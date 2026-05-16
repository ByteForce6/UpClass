import { useState } from "react";

type View = "inicio" | "calificaciones" | "horarios" | "cursos";

interface Curso {
  id: number; nombre: string; instructor: string; categoria: string;
  progreso: number; estado: "activo" | "completado" | "pendiente";
  calificacion?: number; sesiones: number; sesionesTotal: number; nextSession?: string;
}
interface Calificacion {
  materia: string;
  profesor: string;
  fecha: string;
  Promedio: number;
  maximo: number;
}
interface Horario {
  dia: string;
  bloques: { hora: string; curso: string; instructor: string; sala: string; tipo: string }[];
}

const CURSOS: Curso[] = [
  { id:1, nombre:"Diseño UX/UI Avanzado",          instructor:"Arq. Laura Méndez",  categoria:"Diseño",   progreso:72,  estado:"activo",    sesiones:13, sesionesTotal:18, nextSession:"Lun 09:00", calificacion:9.1 },
  { id:2, nombre:"Fotografía Editorial",            instructor:"Mtro. Carlos Ruiz",  categoria:"Arte",     progreso:100, estado:"completado", sesiones:20, sesionesTotal:20, calificacion:8.8 },
  { id:3, nombre:"Marketing Digital & Growth",      instructor:"Lic. Sofía Torres",  categoria:"Negocios", progreso:40,  estado:"activo",    sesiones:6,  sesionesTotal:15, nextSession:"Mié 11:00", calificacion:8.5 },
  { id:4, nombre:"Liderazgo y Gestión de Equipos",  instructor:"Dr. Andrés Vega",    categoria:"Negocios", progreso:0,   estado:"pendiente", sesiones:0,  sesionesTotal:12, nextSession:"Inicia Jun 2" },
];
const CALIFICACIONES: Calificacion[] = [
  // Calificación final por materia (sin “tarea/proyecto”)
  { materia: "Diseño UX/UI Avanzado",       profesor: "Arq. Laura Méndez",      fecha: "12 May", Promedio: 9.5, maximo: 10 },
  { materia: "Fotografía Editorial",       profesor: "Mtro. Carlos Ruiz",        fecha: "15 Abr", Promedio: 8.8, maximo: 10 },
  { materia: "Marketing Digital & Growth", profesor: "Lic. Sofía Torres",       fecha: "10 Abr", Promedio: 8.5, maximo: 10 },
];
const HORARIOS: Horario[] = [
  { dia:"Lunes",     bloques:[{ hora:"09:00–11:00", curso:"Diseño UX/UI Avanzado",     instructor:"Arq. Laura Méndez", sala:"Aula A-3", tipo:"Salón" }] },
  { dia:"Miércoles", bloques:[{ hora:"11:00–13:00", curso:"Marketing Digital & Growth",instructor:"Lic. Sofía Torres", sala:"Aula B-1", tipo:"Salón" }] },
  { dia:"Viernes",   bloques:[
    { hora:"09:00–11:00", curso:"Diseño UX/UI Avanzado",     instructor:"Arq. Laura Méndez", sala:"Aula A-3", tipo:"Salón" },
    { hora:"12:00–13:30", curso:"Marketing Digital & Growth", instructor:"Lic. Sofía Torres", sala:"Aula A-2",   tipo:"Salón" },
  ]},
];
const DIAS = ["Lunes","Martes","Miércoles","Jueves","Viernes"];

const PromedioColor = (n:number) => n>=9?"#1a6b3c":n>=7.5?"#7a5c00":"#9b1c1c";
const PromedioBg    = (n:number) => n>=9?"#f0faf5":n>=7.5?"#fefce8":"#fff5f5";
const progColor = (p:number) => p===10?"#1a6b3c":p>0?"#111":"#bbb";
const promedio  = (cals:Calificacion[]) => {
  const avg = cals.reduce((a,c)=>a+(c.Promedio/c.maximo)*10,0)/cals.length;
  // Mostrar promedio en decimales (sin redondear a entero)
  return Math.round(avg * 10) / 10;
};

function BadgeTipo({ tipo }:{ tipo:string }) {
  const m:Record<string,{bg:string;color:string}> = {
    Proyecto:      {bg:"#f0f0f0",color:"#333"},
    Tarea:         {bg:"#f5f2ed",color:"#555"},
    Evaluación:    {bg:"#111",   color:"#fff"},
    Participación: {bg:"#e8ede8",color:"#2a5c2a"},
  };
  const s = m[tipo]||{bg:"#eee",color:"#333"};
  return <span style={{fontFamily:"var(--ds)",fontSize:10,fontWeight:600,letterSpacing:".08em",textTransform:"uppercase" as const,background:s.bg,color:s.color,padding:"3px 9px",whiteSpace:"nowrap" as const}}>{tipo}</span>;
}

/* ── INICIO ── */
function VistaInicio({ onNav }:{ onNav:(v:View)=>void }) {
  const activos = CURSOS.filter(c=>c.estado==="activo");
  const prom    = promedio(CALIFICACIONES);
  return (
    <div className="uc-stack-lg">
      <div className="uc-section-header">
        <p className="uc-kicker">Bienvenido de vuelta</p>
        <h2 className="uc-page-title">Rodrigo Méndez</h2>
        {/* <br/>Generación Junio 2024 */}
      </div>

      <div className="uc-stats-grid">
        {[
          {icon:"📚",val:String(CURSOS.length),label:"Cursos inscritos",sub:"2 activos · 1 completado"},
          {icon:"✦", val:`${prom}`,            label:"Promedio general",sub:"Sobre 100 puntos"},
          {icon:"◎", val:"94%",                label:"Asistencia",      sub:"Últimas 8 semanas"},
        ].map((s,i)=>(
          <div key={i} className="uc-stat-card">
            <span style={{fontSize:20,marginBottom:4}}>{s.icon}</span>
            <p className="uc-stat-val">{s.val}</p>
            <p className="uc-stat-label">{s.label}</p>
            <p className="uc-stat-sub">{s.sub}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="uc-row-between" style={{marginBottom:18}}>
          <p className="uc-subtitle">Cursos activos</p>
          <button className="uc-link-btn" onClick={()=>onNav("cursos")}>Ver todos →</button>
        </div>
        {activos.map(c=>(
          <div key={c.id} className="uc-course-row">
            <div style={{flex:1,minWidth:0}}>
              <p className="uc-kicker" style={{marginBottom:4}}>{c.categoria}</p>
              <p className="uc-course-name">{c.nombre}</p>
              <p className="uc-course-inst">{c.instructor}</p>
              <div className="uc-progress-row">
                <div className="uc-progress-track"><div className="uc-progress-fill" style={{width:`${c.progreso}%`,background:"#111"}}/></div>
                <span className="uc-progress-label">{c.progreso}% · {c.sesiones}/{c.sesionesTotal}</span>
              </div>
            </div>
            {c.nextSession&&(
              <div className="uc-next-session">
                <p className="uc-kicker" style={{marginBottom:3}}>Próxima sesión</p>
                <p style={{fontFamily:"var(--dr)",fontSize:15,fontWeight:700,color:"#111",margin:0}}>{c.nextSession}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div>
        <div className="uc-row-between" style={{marginBottom:18}}>
          <p className="uc-subtitle">Calificaciones recientes</p>
          <button className="uc-link-btn" onClick={()=>onNav("calificaciones")}>Ver todas →</button>
        </div>
        {CALIFICACIONES.slice(0,4).map((c,i)=>(
          <div key={i} className="uc-cal-row">
            <div style={{display:"flex",gap:10,alignItems:"flex-start",flex:1,minWidth:0}}>
              <div style={{flexShrink:0,paddingTop:2}}><BadgeTipo tipo="Evaluación"/></div>
              <div style={{minWidth:0}}>
                <p className="uc-cal-act">{c.materia}</p>
                <p className="uc-cal-meta">{c.profesor} · {c.fecha}</p>
              </div>
            </div>
            <div className="uc-Promedio-chip" style={{background:PromedioBg(c.Promedio)}}>
              <p style={{fontFamily:"var(--dr)",fontSize:20,fontWeight:700,color:PromedioColor(c.Promedio),margin:0,lineHeight:1}}>{c.Promedio}</p>
              <p style={{fontFamily:"var(--ds)",fontSize:9,color:"#aaa",margin:0}}>/{c.maximo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── CALIFICACIONES ── */
function VistaCalificaciones() {
  const [filtro,setFiltro] = useState("Todos");
  const materias  = ["Todos",...Array.from(new Set(CALIFICACIONES.map(c=>c.materia)))];
  const filtradas = filtro==="Todos"?CALIFICACIONES:CALIFICACIONES.filter(c=>c.materia===filtro);
  const prom      = promedio(filtradas);
  return (
    <div className="uc-stack-lg">
      <div className="uc-section-header">
        <p className="uc-kicker">Registro académico</p>
        <h2 className="uc-page-title">Calificaciones</h2>
      </div>
      <div className="uc-cal-summary">
        {[
          {val:`${prom}`,label:"Promedio",sub:"General",dark:true},
          {val:String(Math.max(...filtradas.map(c=>c.Promedio))),label:"Mejor Promedio",sub:"Sobre 100",dark:false},
        ].map((s,i)=>(
          <div key={i} className="uc-cal-sum-card" style={{background:s.dark?"#111":"#fff"}}>
            <p style={{fontFamily:"var(--dr)",fontSize:34,fontWeight:700,color:s.dark?"#fff":"#111",margin:"0 0 4px"}}>{s.val}</p>
            <p style={{fontFamily:"var(--ds)",fontSize:12,fontWeight:600,color:s.dark?"rgba(255,255,255,.7)":"#555",margin:0}}>{s.label}</p>
            <p style={{fontFamily:"var(--ds)",fontSize:11,color:s.dark?"rgba(255,255,255,.4)":"#aaa",margin:0}}>{s.sub}</p>
          </div>
        ))}
      </div>
      <div className="uc-filters">
        {materias.map(c=>(
          <button key={c} onClick={()=>setFiltro(c)} className={`uc-filter-btn${filtro===c?" active":""}`}>
            {c==="Todos"?"Todos":c.split(" ").slice(0,2).join(" ")}
          </button>
        ))}
      </div>
      <div className="uc-cal-table-wrap">
        <div className="uc-table-header">
          {["Tipo","Actividad","Curso","Fecha","Promedio"].map(h=>(
            <p key={h} style={{fontFamily:"var(--ds)",fontSize:10,fontWeight:600,letterSpacing:".1em",textTransform:"uppercase" as const,color:"rgba(255,255,255,.5)",margin:0}}>{h}</p>
          ))}
        </div>
        {filtradas.map((c,i)=>(
          <div key={i} className="uc-table-row" style={{background:i%2===0?"#fff":"#fafaf9"}}>
            <div className="uc-table-tipo"><BadgeTipo tipo="Evaluación"/></div>
            <p className="uc-table-act">{c.materia}</p>
            <p className="uc-table-curso" style={{fontWeight:500}}>{c.materia}</p>
            <p className="uc-table-fecha">{c.fecha}</p>
            <div className="uc-Promedio-chip" style={{background:PromedioBg(c.Promedio)}}>
              <p style={{fontFamily:"var(--dr)",fontSize:18,fontWeight:700,color:PromedioColor(c.Promedio),margin:0,lineHeight:1}}>{c.Promedio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── HORARIOS ── */
function VistaHorarios() {
  const hoy = "Lunes";
  const sesiones = HORARIOS.flatMap(h=>h.bloques.map((b,i)=>({...b,dia:h.dia,key:`${h.dia}-${i}`})));
  return (
    <div className="uc-stack-lg">
      <div className="uc-section-header">
        <p className="uc-kicker">Semana vigente</p>
        <h2 className="uc-page-title">Horario de clases</h2>
      </div>
      <div className="uc-week-grid">
        {DIAS.map(dia=>{
          const h     = HORARIOS.find(h=>h.dia===dia);
          const isHoy = dia===hoy;
          return (
            <div key={dia} className={`uc-day-card${isHoy?" uc-day-card--hoy":""}`}>
              <div className="uc-day-header">
                <p className="uc-day-name">{dia}</p>
                {isHoy&&<span className="uc-hoy-badge">Hoy</span>}
              </div>
              <div className="uc-day-body">
                {h?h.bloques.map((b,i)=>(
                  <div key={i} className={`uc-bloque${isHoy?" uc-bloque--hoy":""}`}>
                    <p className="uc-bloque-hora">{b.hora}</p>
                    <p className="uc-bloque-nombre">{b.curso.split(" ").slice(0,3).join(" ")}</p>
                    <p className="uc-bloque-sala">{b.sala}</p>
                    <span className="uc-bloque-tipo">{b.tipo}</span>
                  </div>
                )):(
                  <p className="uc-day-empty">Sin sesiones</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p className="uc-subtitle" style={{marginBottom:16}}>Detalle de sesiones</p>
        {sesiones.map(b=>(
          <div key={b.key} className="uc-sesion-row">
            <div className="uc-sesion-dia">
              <p style={{fontFamily:"var(--ds)",fontSize:11,fontWeight:600,letterSpacing:".07em",textTransform:"uppercase" as const,color:"#555",margin:"0 0 2px"}}>{b.dia}</p>
              <p style={{fontFamily:"var(--ds)",fontSize:12,color:"#aaa",margin:0}}>{b.hora}</p>
            </div>
            <div style={{flex:1,minWidth:0}}>
              <p style={{fontFamily:"var(--dr)",fontSize:15,fontWeight:700,color:"#111",margin:"0 0 3px"}}>{b.curso}</p>
              <p style={{fontFamily:"var(--ds)",fontSize:12,color:"#999",margin:0}}>{b.instructor}</p>
            </div>
            <div className="uc-sesion-tags">
              <span className="uc-tag-sala">{b.sala}</span>
              <span className="uc-tag-tipo">{b.tipo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── CURSOS ── */
function VistaCursos() {
  const [filtro,setFiltro] = useState<"todos"|"activo"|"completado"|"pendiente">("todos");
  const filtrados = filtro==="todos"?CURSOS:CURSOS.filter(c=>c.estado===filtro);
  const eLabel:Record<string,string> = {activo:"En curso",completado:"Completado",pendiente:"Por iniciar"};
  const eStyle:Record<string,{bg:string;color:string}> = {
    activo:     {bg:"#111",    color:"#fff"},
    completado: {bg:"#f0faf5", color:"#1a6b3c"},
    pendiente:  {bg:"#f5f2ed", color:"#888"},
  };
  return (
    <div className="uc-stack-lg">
      <div className="uc-section-header">
        <p className="uc-kicker">Mi formación</p>
        <h2 className="uc-page-title">Cursos inscritos</h2>
      </div>
      <div className="uc-filters">
        {(["todos","activo","completado","pendiente"] as const).map(f=>(
          <button key={f} onClick={()=>setFiltro(f)} className={`uc-filter-btn${filtro===f?" active":""}`}>
            {f==="todos"?"Todos":eLabel[f]}
          </button>
        ))}
      </div>
      {filtrados.map(c=>{
        const s=eStyle[c.estado];
        return (
          <div key={c.id} className="uc-curso-card">
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:"flex",gap:8,flexWrap:"wrap" as const,marginBottom:8}}>
                <span className="uc-tag-cat">{c.categoria}</span>
                <span style={{fontFamily:"var(--ds)",fontSize:10,fontWeight:600,letterSpacing:".07em",textTransform:"uppercase" as const,background:s.bg,color:s.color,padding:"3px 9px"}}>{eLabel[c.estado]}</span>
              </div>
              <h3 className="uc-curso-title">{c.nombre}</h3>
              <p className="uc-curso-inst">{c.instructor}</p>
              {c.estado!=="pendiente"&&(
                <div className="uc-progress-row" style={{marginTop:12}}>
                  <div className="uc-progress-track"><div className="uc-progress-fill" style={{width:`${c.progreso}%`,background:progColor(c.progreso)}}/></div>
                  <span className="uc-progress-label">{c.sesiones}/{c.sesionesTotal} · {c.progreso}%</span>
                </div>
              )}
              {c.estado==="pendiente"&&c.nextSession&&(
                <p style={{fontFamily:"var(--ds)",fontSize:12,color:"#aaa",margin:"8px 0 0"}}>
                  Inicio: <strong style={{color:"#555"}}>{c.nextSession}</strong>
                </p>
              )}
            </div>
            <div className="uc-curso-side">
              {c.calificacion!==undefined?(
                <div className="uc-Promedio-big" style={{background:PromedioBg(c.calificacion)}}>
                  <p style={{fontFamily:"var(--dr)",fontSize:28,fontWeight:700,color:PromedioColor(c.calificacion),margin:"0 0 2px",lineHeight:1}}>{c.calificacion}</p>
                  <p style={{fontFamily:"var(--ds)",fontSize:9,color:"#aaa",letterSpacing:".06em",textTransform:"uppercase" as const,margin:0}}>Promedio</p>
                </div>
              ):(
                <div className="uc-Promedio-big" style={{background:"#f5f2ed"}}>
                  <p style={{fontFamily:"var(--ds)",fontSize:11,color:"#ccc",fontStyle:"italic",margin:0}}>Sin calif.</p>
                </div>
              )}
              {c.estado==="activo"&&<button className="uc-action-btn uc-action-btn--solid">Ir al aula →</button>}
              {c.estado==="completado"&&<button className="uc-action-btn uc-action-btn--outline">Ver constancia</button>}
              {c.estado==="pendiente"&&<button className="uc-action-btn uc-action-btn--disabled" disabled>Próximamente</button>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── APP ── */
const NAV:{key:View;label:string;icon:string}[] = [
  {key:"inicio",         label:"Inicio",         icon:"⌂"},
  {key:"cursos",         label:"Mis cursos",     icon:"◉"},
  {key:"calificaciones", label:"Calificaciones", icon:"✦"},
  {key:"horarios",       label:"Horarios",       icon:"◷"},
];

export default function Dashboard() {
  const [view,    setView]    = useState<View>("inicio");
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        :root{ --dr:'Libre Baskerville',Georgia,serif; --ds:'Source Sans 3',system-ui,sans-serif; }
        html,body{height:100%;}
        body{background:#f5f2ed;font-family:var(--ds);-webkit-font-smoothing:antialiased;}
        button{border-radius:0!important;cursor:pointer;}
        ::-webkit-scrollbar{width:4px;} ::-webkit-scrollbar-thumb{background:#d8d4cf;}

        .uc-shell{display:flex;min-height:100vh;}
        .uc-sidebar{width:232px;background:#111;display:flex;flex-direction:column;flex-shrink:0;position:sticky;top:0;height:100vh;overflow-y:auto;z-index:200;transition:transform .25s;}
        .uc-main{flex:1;display:flex;flex-direction:column;min-width:0;overflow:hidden;}
        .uc-topbar{background:#fff;border-bottom:1px solid #e0dbd4;height:56px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;position:sticky;top:0;z-index:10;flex-shrink:0;}
        .uc-content{flex:1;padding:32px 28px 60px;overflow-y:auto;}

        .uc-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:190;}

        /* Sidebar partes */
        .uc-sidebar-logo{padding:24px 20px 20px;border-bottom:1px solid rgba(255,255,255,.08);}
        .uc-logo-text{font-family:var(--dr);font-size:19px;color:#fff;margin:0;line-height:1;}
        .uc-logo-sub{font-family:var(--ds);font-size:9px;color:rgba(255,255,255,.3);margin:4px 0 0;letter-spacing:.1em;text-transform:uppercase;}
        .uc-sidebar-profile{padding:16px 20px;border-bottom:1px solid rgba(255,255,255,.08);display:flex;gap:12px;align-items:center;}
        .uc-avatar{width:36px;height:36px;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .uc-avatar span{font-family:var(--dr);font-size:13px;color:#fff;font-weight:700;}
        .uc-profile-name{font-family:var(--ds);font-size:13px;font-weight:600;color:#fff;margin:0 0 2px;}
        .uc-profile-gen{font-family:var(--ds);font-size:11px;color:rgba(255,255,255,.35);margin:0;}
        .uc-nav-area{padding:12px 0;flex:1;}
        .uc-nav-btn{display:flex;align-items:center;gap:10px;width:100%;padding:12px 20px;background:transparent;border:none;border-left:2px solid transparent;transition:all .15s;}
        .uc-nav-btn:hover{background:rgba(255,255,255,.04);}
        .uc-nav-btn.active{background:rgba(255,255,255,.08);border-left-color:#fff;}
        .uc-nav-icon{font-size:15px;color:rgba(255,255,255,.3);width:18px;text-align:center;flex-shrink:0;}
        .uc-nav-btn.active .uc-nav-icon{color:#fff;}
        .uc-nav-label{font-family:var(--ds);font-size:13px;font-weight:400;color:rgba(255,255,255,.45);}
        .uc-nav-btn.active .uc-nav-label{font-weight:600;color:#fff;}
        .uc-sidebar-footer{padding:16px 20px;border-top:1px solid rgba(255,255,255,.08);}
        .uc-logout{display:flex;align-items:center;gap:8px;background:none;border:none;padding:0;}
        .uc-logout span{font-family:var(--ds);font-size:12px;color:rgba(255,255,255,.3);}

        /* Topbar */
        .uc-hamburger{background:none;border:none;font-size:22px;color:#111;display:none;padding:4px;}
        .uc-topbar-title{font-family:var(--ds);font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#aaa;margin:0;}
        .uc-topbar-right{display:flex;align-items:center;gap:12px;}
        .uc-cycle-badge{font-family:var(--ds);font-size:11px;color:#aaa;background:#f5f2ed;padding:5px 10px;border:1px solid #e0dbd4;white-space:nowrap;}
        .uc-topbar-avatar{width:30px;height:30px;background:#111;display:flex;align-items:center;justify-content:center;}
        .uc-topbar-avatar span{font-family:var(--dr);font-size:11px;color:#fff;font-weight:700;}

        /* Tipografía */
        .uc-kicker{font-family:var(--ds);font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#999;margin-bottom:8px;}
        .uc-page-title{font-family:var(--dr);font-size:clamp(24px,4vw,36px);font-weight:700;letter-spacing:-.02em;color:#111;margin:0;line-height:1.1;}
        .uc-page-title em{font-weight:400;font-style:italic;}
        .uc-subtitle{font-family:var(--dr);font-weight:700;font-size:18px;color:#111;margin:0;}
        .uc-section-header{border-bottom:1px solid #e0dbd4;padding-bottom:20px;}
        .uc-stack-lg{display:flex;flex-direction:column;gap:28px;}
        .uc-row-between{display:flex;justify-content:space-between;align-items:baseline;gap:8px;}
        .uc-link-btn{font-family:var(--ds);font-size:11px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;background:none;border:none;color:#555;text-decoration:underline;padding:0;white-space:nowrap;}

        /* Stats */
        .uc-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
        .uc-stat-card{border:1px solid #e0dbd4;padding:18px 20px;background:#fff;display:flex;flex-direction:column;gap:4;}
        .uc-stat-val{font-family:var(--dr);font-size:30px;font-weight:700;color:#111;letter-spacing:-.02em;margin:0;}
        .uc-stat-label{font-family:var(--ds);font-size:12px;font-weight:600;color:#111;margin:0;}
        .uc-stat-sub{font-family:var(--ds);font-size:11px;color:#999;margin:0;}

        /* Curso row */
        .uc-course-row{display:flex;gap:20px;padding:16px 0;border-bottom:1px solid #ece9e4;align-items:flex-start;}
        .uc-course-name{font-family:var(--dr);font-weight:700;font-size:16px;color:#111;margin:0 0 4px;}
        .uc-course-inst{font-family:var(--ds);font-size:12px;color:#888;margin:0 0 10px;}
        .uc-next-session{border:1px solid #e0dbd4;padding:8px 12px;background:#fafaf9;flex-shrink:0;}

        /* Progreso */
        .uc-progress-row{display:flex;align-items:center;gap:8px;}
        .uc-progress-track{flex:1;max-width:200px;height:3px;background:#ece9e4;}
        .uc-progress-fill{height:100%;transition:width .6s;}
        .uc-progress-label{font-family:var(--ds);font-size:11px;color:#aaa;white-space:nowrap;}

        /* Promedios */
        .uc-Promedio-chip{padding:6px 12px;text-align:center;min-width:50px;flex-shrink:0;}
        .uc-Promedio-big{padding:12px 16px;text-align:center;border:1px solid #e0dbd4;min-width:80px;}

        /* Cal rows */
        .uc-cal-row{display:flex;gap:12px;padding:13px 0;border-bottom:1px solid #ece9e4;align-items:center;}
        .uc-cal-act{font-family:var(--ds);font-size:14px;color:#111;margin:0 0 3px;font-weight:500;}
        .uc-cal-meta{font-family:var(--ds);font-size:11px;color:#999;margin:0;}

        /* Cal summary */
        .uc-cal-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}
        .uc-cal-sum-card{border:1px solid #e0dbd4;padding:18px 20px;}

        /* Filters */
        .uc-filters{display:flex;flex-wrap:wrap;gap:8px;}
        .uc-filter-btn{font-family:var(--ds);font-size:11px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;border:1px solid #d8d4cf;background:transparent;color:#888;padding:6px 15px;transition:all .2s;}
        .uc-filter-btn:hover:not(.active){border-color:#111;color:#111;}
        .uc-filter-btn.active{background:#111;color:#fff;border-color:#111;}

        /* Tabla cal */
        .uc-cal-table-wrap{border:1px solid #e0dbd4;overflow:hidden;}
        .uc-table-header{display:grid;grid-template-columns:90px 1fr 130px 70px 60px;background:#111;padding:11px 16px;align-items:center;}
        .uc-table-row{display:grid;grid-template-columns:90px 1fr 130px 70px 60px;padding:13px 16px;align-items:center;border-bottom:1px solid #ece9e4;}
        .uc-table-row:last-child{border-bottom:none;}
        .uc-table-act{font-family:var(--ds);font-size:13px;color:#111;margin:0 12px;font-weight:500;}
        .uc-table-curso{font-family:var(--ds);font-size:11px;color:#999;margin:0 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
        .uc-table-fecha{font-family:var(--ds);font-size:11px;color:#aaa;margin:0 12px;white-space:nowrap;}

        /* Horarios */
        .uc-week-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;}
        .uc-day-card{border:1px solid #e0dbd4;background:#fff;overflow:hidden;}
        .uc-day-card--hoy{border-color:#111;background:#111;}
        .uc-day-header{padding:10px 12px;border-bottom:1px solid rgba(0,0,0,.07);background:#fafaf9;display:flex;justify-content:space-between;align-items:center;}
        .uc-day-card--hoy .uc-day-header{background:#000;border-bottom-color:rgba(255,255,255,.1);}
        .uc-day-name{font-family:var(--ds);font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#aaa;margin:0;}
        .uc-day-card--hoy .uc-day-name{color:rgba(255,255,255,.5);}
        .uc-hoy-badge{font-family:var(--ds);font-size:9px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;background:rgba(255,255,255,.15);color:rgba(255,255,255,.7);padding:2px 7px;}
        .uc-day-body{padding:12px;display:flex;flex-direction:column;gap:10px;min-height:110px;}
        .uc-day-empty{font-family:var(--ds);font-size:11px;color:#ccc;font-style:italic;}
        .uc-day-card--hoy .uc-day-empty{color:rgba(255,255,255,.2);}
        .uc-bloque{border-left:2px solid #d8d4cf;padding-left:8px;}
        .uc-bloque--hoy{border-left-color:rgba(255,255,255,.35);}
        .uc-bloque-hora{font-family:var(--ds);font-size:9px;color:#bbb;margin:0 0 2px;}
        .uc-bloque--hoy .uc-bloque-hora{color:rgba(255,255,255,.4);}
        .uc-bloque-nombre{font-family:var(--dr);font-size:12px;font-weight:700;color:#111;margin:0 0 2px;line-height:1.2;}
        .uc-bloque--hoy .uc-bloque-nombre{color:#fff;}
        .uc-bloque-sala{font-family:var(--ds);font-size:9px;color:#aaa;margin:0 0 3px;}
        .uc-bloque--hoy .uc-bloque-sala{color:rgba(255,255,255,.35);}
        .uc-bloque-tipo{font-family:var(--ds);font-size:8px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;background:#f0f0f0;color:#666;padding:2px 6px;}
        .uc-bloque--hoy .uc-bloque-tipo{background:rgba(255,255,255,.1);color:rgba(255,255,255,.55);}
        .uc-sesion-row{display:flex;gap:16px;padding:14px 0;border-bottom:1px solid #ece9e4;align-items:center;flex-wrap:wrap;}
        .uc-sesion-dia{min-width:88px;flex-shrink:0;}
        .uc-sesion-tags{display:flex;gap:8px;align-items:center;flex-wrap:wrap;flex-shrink:0;}
        .uc-tag-sala{font-family:var(--ds);font-size:11px;color:#888;border:1px solid #e0dbd4;padding:3px 10px;white-space:nowrap;}
        .uc-tag-tipo{font-family:var(--ds);font-size:10px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;background:#111;color:#fff;padding:4px 10px;white-space:nowrap;}

        /* Cursos inscritos */
        .uc-curso-card{display:flex;gap:20px;padding:22px 0;border-bottom:1px solid #ece9e4;align-items:flex-start;}
        .uc-curso-side{display:flex;flex-direction:column;gap:10px;align-items:flex-end;flex-shrink:0;min-width:100px;}
        .uc-curso-title{font-family:var(--dr);font-size:18px;font-weight:700;color:#111;margin:0 0 4px;}
        .uc-curso-inst{font-family:var(--ds);font-size:12px;color:#888;margin:0;}
        .uc-tag-cat{font-family:var(--ds);font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;border:1px solid #e0dbd4;padding:3px 9px;color:#888;}
        .uc-action-btn{font-family:var(--ds);font-size:11px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;padding:9px 14px;width:100%;border:none;transition:all .2s;}
        .uc-action-btn--solid{background:#111;color:#fff;}
        .uc-action-btn--solid:hover{background:#333;}
        .uc-action-btn--outline{background:transparent;color:#555;border:1px solid #d8d4cf!important;}
        .uc-action-btn--outline:hover{background:#111;color:#fff;border-color:#111!important;}
        .uc-action-btn--disabled{background:#f5f2ed;color:#ccc;border:1px solid #e0dbd4!important;cursor:not-allowed!important;}

        /* ════ TABLET < 1024px ════ */
        @media(max-width:1023px){
          .uc-stats-grid{grid-template-columns:repeat(2,1fr);}
          .uc-week-grid{grid-template-columns:repeat(3,1fr);}
          .uc-table-header,.uc-table-row{grid-template-columns:80px 1fr 110px 60px 50px;}
        }

        /* ════ MÓVIL < 768px ════ */
        @media(max-width:767px){
          /* Sidebar deslizable */
          .uc-sidebar{position:fixed!important;top:0;left:0;height:100svh;transform:translateX(-100%);}
          .uc-sidebar.open{transform:translateX(0);}
          .uc-overlay{display:block;}
          .uc-hamburger{display:flex!important;}
          .uc-cycle-badge{display:none;}
          .uc-content{padding:20px 16px 60px;}

          /* Stats 2 col */
          .uc-stats-grid{grid-template-columns:repeat(2,1fr);gap:10px;}
          .uc-stat-val{font-size:24px;}

          /* Semana 2 col */
          .uc-week-grid{grid-template-columns:repeat(2,1fr);}

          /* Tabla → cards */
          .uc-table-header{display:none;}
          .uc-cal-table-wrap{border:none;display:flex;flex-direction:column;gap:8px;}
          .uc-table-row{
            display:grid!important;
            grid-template-columns:1fr auto!important;
            grid-template-rows:auto auto auto!important;
            gap:5px!important;padding:14px!important;
            border:1px solid #e0dbd4!important;background:#fff!important;
          }
          .uc-table-tipo{grid-column:1;grid-row:1;}
          .uc-table-act{grid-column:1;grid-row:2;margin:0!important;font-size:14px;}
          .uc-table-curso{grid-column:1;grid-row:3;margin:0!important;}
          .uc-table-fecha{display:none;}
          .uc-Promedio-chip{grid-column:2;grid-row:1/4;align-self:center;}

          /* Cal summary apilado */
          .uc-cal-summary{grid-template-columns:1fr 1fr;gap:8px;}

          /* Cursos: col única */
          .uc-curso-card{flex-direction:column;gap:14px;}
          .uc-curso-side{flex-direction:row;align-items:center;width:100%;justify-content:space-between;min-width:unset;}

          /* Curso row inicio */
          .uc-course-row{flex-direction:column;gap:10px;}
          .uc-next-session{align-self:flex-start;}

          /* Filters scroll */
          .uc-filters{flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch;}
          .uc-filter-btn{flex-shrink:0;}

          /* Sesiones */
          .uc-sesion-row{gap:10px;}
          .uc-sesion-tags{gap:6px;}
        }

        /* ════ MUY PEQUEÑO < 400px ════ */
        @media(max-width:399px){
          .uc-stats-grid{grid-template-columns:1fr 1fr;}
          .uc-week-grid{grid-template-columns:1fr 1fr;}
          .uc-cal-summary{grid-template-columns:1fr;}
        }
      `}</style>

      <div className="uc-shell">
        {/* Overlay */}
        <div className={`uc-overlay${sidebar?" open":""}`} onClick={()=>setSidebar(false)} style={{position:"fixed",inset:0,zIndex:190,display:sidebar?"block":"none"}}/>

        {/* Sidebar */}
        <aside className={`uc-sidebar${sidebar?" open":""}`}>
          <div className="uc-sidebar-logo">
            <p className="uc-logo-text">UP<em style={{fontWeight:400}}>CLASS</em></p>
            <p className="uc-logo-sub">Portal del estudiante</p>
          </div>
          <div className="uc-sidebar-profile">
            <div className="uc-avatar"><span>RM</span></div>
            <div>
              <p className="uc-profile-name">Rodrigo Méndez</p>
              {/* <p className="uc-profile-gen">Gen. Jun 2024</p> */}
            </div>
          </div>
          <nav className="uc-nav-area">
            {NAV.map(item=>{
              const active=view===item.key;
              return (
                <button key={item.key} className={`uc-nav-btn${active?" active":""}`}
                  onClick={()=>{setView(item.key);setSidebar(false);}}>
                  <span className="uc-nav-icon">{item.icon}</span>
                  <span className="uc-nav-label">{item.label}</span>
                </button>
              );
            })}
          </nav>
          <div className="uc-sidebar-footer">
            <button className="uc-logout">
              <span style={{fontSize:14,color:"rgba(255,255,255,.3)"}}>↩</span>
              <span>Cerrar sesión</span>
            </button>
          </div>
        </aside>

        {/* Main */}
        <div className="uc-main">
          <div className="uc-topbar">
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <button className="uc-hamburger" onClick={()=>setSidebar(true)}>☰</button>
              <p className="uc-topbar-title">{NAV.find(n=>n.key===view)?.label}</p>
            </div>
            <div className="uc-topbar-right">
              <span className="uc-cycle-badge">Ciclo Ene–Jun 2025</span>
              <div className="uc-topbar-avatar"><span>RM</span></div>
            </div>
          </div>
          <main className="uc-content">
            {view==="inicio"         && <VistaInicio onNav={setView}/>}
            {view==="calificaciones" && <VistaCalificaciones/>}
            {view==="horarios"       && <VistaHorarios/>}
            {view==="cursos"         && <VistaCursos/>}
          </main>
        </div>
      </div>
    </>
  );
}