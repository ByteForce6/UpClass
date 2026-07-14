import { useEffect, useState, useMemo } from "react";
import { useGetHorariosDisponibles } from "../dataconnect-generated/react";
import "../Styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { data: horariosData, isLoading } = useGetHorariosDisponibles();

    const cursosPopulares = useMemo(() => {
        const horarios = horariosData?.horarios ?? [];

        const mapa = new Map<string, { curso: any, totalInscritos: number, totalClases: number }>();
        horarios.forEach((h: any) => {
            if (h.estado?.toLowerCase() !== "activo") return;

            const cursoId = h.curso.id;
            if (!mapa.has(cursoId)) {
                mapa.set(cursoId, { curso: h.curso, totalInscritos: 0, totalClases: 0 });
            }
            const entry = mapa.get(cursoId)!;
            entry.totalInscritos += h.cupoActual ?? 0;
            entry.totalClases += 1;
        });

        return Array.from(mapa.values())
            .sort((a, b) => b.totalInscritos - a.totalInscritos)
            .slice(0, 8);
    }, [horariosData]);

    useEffect(() => {
        const cards = document.querySelectorAll(".testimonial-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        cards.forEach((card) => observer.observe(card));
    }, []);

    return (
        <div className="home">

            {/* Navbar */}
            <header className="home-navbar">
                <button
                    className="home-hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
                <div className="home-logo">UpClass</div>

                <nav className={`home-nav ${menuOpen ? "active" : ""}`}>
                    <a href="#inicio">Inicio</a>
                    <a href="#cursos">Cursos</a>
                    <a href="#testimonios">Testimonios</a>
                    <a href="#preguntas">Preguntas Frecuentes</a>
                </nav>

                <Link to="/login" className="home-login-btn">
                    Iniciar sesión
                </Link>
            </header>

            {/* Hero */}
            <section className="hero">

                <div className="hero-left">

                    <span className="hero-badge">
                        Plataforma educativa moderna
                    </span>

                    <h1>
                        Aprende y administra todo con
                        <span> UpClass</span>
                    </h1>

                    <p>
                        Gestiona estudiantes, clases, tareas y actividades
                        desde una plataforma moderna, rápida y adaptable.
                    </p>

                    <div className="hero-buttons">
                        <button className="hero-primary">
                            Comienzar
                        </button>

                        <button className="hero-secondary">
                            Ver demo
                        </button>
                    </div>

                    <div className="hero-stats">

                        <div>
                            <h3>+5K</h3>
                            <span>Estudiantes</span>
                        </div>

                        <div>
                            <h3>+120</h3>
                            <span>Docentes</span>
                        </div>

                        <div>
                            <h3>99%</h3>
                            <span>Satisfacción</span>
                        </div>

                    </div>
                </div>

                {/* Imagen */}
                <div className="hero-right" id="inicio">

                    <div className="hero-card">

                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                            alt="students"
                        />

                        <div className="floating-card">
                            <h4>Clases en tiempo real</h4>
                            <p>Accede desde cualquier dispositivo</p>
                        </div>

                    </div>

                </div>

            </section>

            {/* CURSOS */}
            <section className="courses-section" id="cursos">
                <div className="courses-header">
                    <h2>Cursos populares</h2>

                    <div className="courses-buttons">
                        <button
                            onClick={() => {
                                document.getElementById("courses-track")
                                    ?.scrollBy({ left: -350, behavior: "smooth" });
                            }}
                        >
                            ←
                        </button>

                        <button
                            onClick={() => {
                                document.getElementById("courses-track")
                                    ?.scrollBy({ left: 350, behavior: "smooth" });
                            }}
                        >
                            →
                        </button>
                    </div>
                </div>

                <div className="courses-track" id="courses-track">
                    {isLoading ? (
                        <p>Cargando cursos...</p>
                    ) : cursosPopulares.length === 0 ? (
                        <p>No hay cursos disponibles todavía.</p>
                    ) : (
                        cursosPopulares.map(({ curso, totalInscritos, totalClases }) => (
                            <div className="course-card" key={curso.id}>
                                {curso.urlImagen && (
                                    <img src={curso.urlImagen} alt={curso.nombre} />
                                )}

                                <div className="course-content">
                                    <div className="course-top">
                                        <h3>{curso.nombre}</h3>
                                        {curso.categoria && <span>{curso.categoria}</span>}
                                    </div>

                                    <div className="course-info">
                                        {curso.instructor?.usuario?.nombreCompleto && (
                                            <p>👨‍🏫 {curso.instructor.usuario.nombreCompleto}</p>
                                        )}
                                        <p>⏰ {totalClases} clase{totalClases !== 1 ? "s" : ""}</p>
                                    </div>

                                    {curso.descripcion && (
                                        <p className="course-description">{curso.descripcion}</p>
                                    )}

                                    <p className="course-info">👥 {totalInscritos} inscritos</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            {/* TESTIMONIOS */}
            <section className="testimonials-section" id="testimonios">

                <div className="testimonials-header">

                    <span>TESTIMONIOS</span>

                    <h2>
                        Lo que dicen nuestros estudiantes
                    </h2>

                    <p>
                        Miles de alumnos ya utilizan UpClass para
                        aprender, organizar sus cursos y mejorar
                        su experiencia educativa.
                    </p>

                </div>

                <div className="testimonials-grid">

                    <div className="testimonial-card">

                        <div className="testimonial-top">

                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="user"
                            />

                            <div>
                                <h3>María González</h3>
                                <span>Diseño UX/UI</span>
                            </div>

                        </div>

                        <p>
                            "La plataforma es increíblemente intuitiva.
                            Puedo acceder a mis clases y tareas desde
                            cualquier dispositivo."
                        </p>

                    </div>

                    <div className="testimonial-card">

                        <div className="testimonial-top">

                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="user"
                            />

                            <div>
                                <h3>Carlos Ramírez</h3>
                                <span>Programación Web</span>
                            </div>

                        </div>

                        <p>
                            "UpClass hizo que administrar cursos y
                            aprender fuera muchísimo más fácil y moderno."
                        </p>

                    </div>

                    <div className="testimonial-card">

                        <div className="testimonial-top">

                            <img
                                src="https://randomuser.me/api/portraits/women/68.jpg"
                                alt="user"
                            />

                            <div>
                                <h3>Sofía Martínez</h3>
                                <span>Marketing Digital</span>
                            </div>

                        </div>

                        <p>
                            "El diseño es hermoso y la experiencia
                            móvil funciona perfecto como aplicación."
                        </p>

                    </div>

                </div>

            </section>

            {/* FAQ SECTION */}
            <section className="faq-section" id="preguntas">

                <div className="faq-left">

                    <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                        alt="faq"
                    />

                </div>

                <div className="faq-right">

                    <h2>Preguntas frecuentes</h2>

                    <p className="faq-subtitle">
                        Resolvemos las dudas más comunes sobre UpClass
                        para que aproveches al máximo la plataforma.
                    </p>

                    <div className="faq-item">
                        <input type="checkbox" id="q1" />
                        <label htmlFor="q1">
                            ¿Qué es UpClass?
                        </label>
                        <div className="faq-content">
                            Es una plataforma educativa para gestionar cursos,
                            estudiantes y aprendizaje en un solo lugar.
                        </div>
                    </div>

                    <div className="faq-item">
                        <input type="checkbox" id="q2" />
                        <label htmlFor="q2">
                            ¿Puedo acceder desde mi celular?
                        </label>
                        <div className="faq-content">
                            Sí, UpClass es totalmente responsivo y funciona
                            en cualquier dispositivo.
                        </div>
                    </div>

                    <div className="faq-item">
                        <input type="checkbox" id="q3" />
                        <label htmlFor="q3">
                            ¿Es gratis?
                        </label>
                        <div className="faq-content">
                            Sí, puedes usar la plataforma base sin costo.
                            Algunas funciones avanzadas pueden ser premium.
                        </div>
                    </div>

                    <div className="faq-item">
                        <input type="checkbox" id="q4" />
                        <label htmlFor="q4">
                            ¿Cómo empiezo?
                        </label>
                        <div className="faq-content">
                            Solo crea tu cuenta e inicia sesión para comenzar
                            a explorar cursos.
                        </div>
                    </div>

                </div>

            </section>

            {/* FOOTER */}
            <footer className="footer">

                <div className="footer-top">

                    <div className="footer-brand">

                        <h2>UpClass</h2>

                        <p>
                            Plataforma educativa moderna para gestionar
                            cursos, estudiantes y aprendizaje desde
                            cualquier dispositivo.
                        </p>

                        <div className="footer-socials">

                            <a href="#">
                                <i className="ti ti-brand-facebook"></i>
                            </a>

                            <a href="#">
                                <i className="ti ti-brand-instagram"></i>
                            </a>

                            <a href="#">
                                <i className="ti ti-brand-x"></i>
                            </a>

                            <a href="#">
                                <i className="ti ti-brand-linkedin"></i>
                            </a>

                        </div>

                    </div>

                    <div className="footer-links">

                        <div className="footer-column">
                            <h3>Plataforma</h3>

                            <a href="#">Cursos</a>
                            <a href="#">Instructores</a>
                            <a href="#">Dashboard</a>
                        </div>

                        <div className="footer-column">
                            <h3>Compañía</h3>

                            <a href="#">Nosotros</a>
                            <a href="#">Contacto</a>
                            <a href="#">Soporte</a>
                        </div>

                        <div className="footer-column">
                            <h3>Legal</h3>

                            <a href="#">Privacidad</a>
                            <a href="#">Términos</a>
                            <a href="#">Cookies</a>
                        </div>

                    </div>

                </div>

                <div className="footer-bottom">

                    <p>
                        © 2026 UpClass. Todos los derechos reservados.
                    </p>

                </div>

            </footer>

        </div>
    );
}