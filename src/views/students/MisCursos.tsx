import { useState } from "react";

interface CursoInscrito {
  inscripcionId: string;
  estadoInscripcion: string;
  pagoEstado: string;
  cursoId: number;
  nombre: string;
  categoria: string;
  instructor: string;
  horario: string;
  cupoActual: number;
  cupoMaximo: number;
}

// Datos temporales mientras se conecta DataConnect
const cursosMock: CursoInscrito[] = [
  {
    inscripcionId: "INS001",
    estadoInscripcion: "activa",
    pagoEstado: "pagado",
    cursoId: 1,
    nombre: "Desarrollo Web Full Stack",
    categoria: "Programación",
    instructor: "Ana López",
    horario: "Lunes y Miércoles 10:00 - 12:00",
    cupoActual: 18,
    cupoMaximo: 25,
  },
  {
    inscripcionId: "INS002",
    estadoInscripcion: "activa",
    pagoEstado: "pendiente",
    cursoId: 2,
    nombre: "Bases de Datos SQL",
    categoria: "Tecnología",
    instructor: "Carlos Ramírez",
    horario: "Martes y Jueves 14:00 - 16:00",
    cupoActual: 20,
    cupoMaximo: 30,
  },
  {
    inscripcionId: "INS003",
    estadoInscripcion: "completada",
    pagoEstado: "pagado",
    cursoId: 3,
    nombre: "Fundamentos de Programación",
    categoria: "Programación",
    instructor: "María González",
    horario: "Viernes 09:00 - 12:00",
    cupoActual: 25,
    cupoMaximo: 25,
  },
  {
    inscripcionId: "INS004",
    estadoInscripcion: "pendiente",
    pagoEstado: "pendiente",
    cursoId: 4,
    nombre: "Diseño de Interfaces UX/UI",
    categoria: "Diseño",
    instructor: "Luis Hernández",
    horario: "Sábado 10:00 - 13:00",
    cupoActual: 12,
    cupoMaximo: 20,
  },
];


const estadoTexto: Record<string, string> = {
  activa: "En curso",
  completada: "Completado",
  pendiente: "Por iniciar",
};


export default function MisCursos() {

  const [filtro, setFiltro] = useState<
    "todos" | "activa" | "completada" | "pendiente"
  >("todos");


  const cursos =
    filtro === "todos"
      ? cursosMock
      : cursosMock.filter(
          (curso) => curso.estadoInscripcion === filtro
        );


  return (
    <div className="uc-stack-lg">

      <div className="uc-section-header">
        <p className="uc-kicker">
          Mi formación
        </p>

        <h2 className="uc-page-title">
          Cursos inscritos
        </h2>
      </div>


      <div className="uc-filters">

        {(["todos","activa","completada","pendiente"] as const)
          .map((estado)=>(

          <button
            key={estado}
            className={`uc-filter-btn ${
              filtro === estado ? "active" : ""
            }`}
            onClick={()=>setFiltro(estado)}
          >
            {
              estado === "todos"
              ? "Todos"
              : estadoTexto[estado]
            }

          </button>

        ))}

      </div>



      {cursos.map((curso)=>(

        <div
          key={curso.inscripcionId}
          className="uc-curso-card"
        >


          <div style={{flex:1}}>

            <div style={{
              display:"flex",
              gap:8,
              marginBottom:8
            }}>

              <span className="uc-tag-cat">
                {curso.categoria}
              </span>


              <span style={{
                background:
                  curso.estadoInscripcion==="activa"
                  ? "#111"
                  : "#eee",

                color:
                  curso.estadoInscripcion==="activa"
                  ? "#fff"
                  : "#555",

                padding:"4px 10px",
                fontSize:12
              }}>

                {estadoTexto[curso.estadoInscripcion]}

              </span>

            </div>



            <h3 className="uc-curso-title">
              {curso.nombre}
            </h3>


            <p className="uc-curso-inst">
              Instructor: {curso.instructor}
            </p>


            <p style={{
              marginTop:10,
              color:"#777"
            }}>
              🕒 {curso.horario}
            </p>



            <div style={{
              marginTop:12
            }}>

              <small>
                Cupo: {curso.cupoActual}/{curso.cupoMaximo}
              </small>

              <div style={{
                height:6,
                background:"#eee",
                marginTop:5
              }}>

                <div
                  style={{
                    width:
                    `${(curso.cupoActual /
                    curso.cupoMaximo)*100}%`,

                    height:"100%",
                    background:"#111"
                  }}
                />

              </div>

            </div>


          </div>



          <div className="uc-curso-side">


            {
              curso.estadoInscripcion==="activa" &&
              <button className="uc-action-btn uc-action-btn--solid">
                Ir al aula →
              </button>
            }


            {
              curso.estadoInscripcion==="completada" &&
              <button className="uc-action-btn uc-action-btn--outline">
                Ver constancia
              </button>
            }


            {
              curso.estadoInscripcion==="pendiente" &&
              <button className="uc-action-btn uc-action-btn--disabled">
                Próximamente
              </button>
            }


          </div>


        </div>

      ))}


    </div>
  );
}