import LogoSvg from "../src/assets/images/logo.svg";

function App() {
    return (
        <>
            <header className="padding-big">
                <nav className="navbar">
                    {/* Logo */}
                    <a href="/" className="logo">
                        <span>Project</span> <img src={LogoSvg} alt="" /> <span>Ninja</span>
                    </a>

                    {/* Navigation */}
                    <div className="navigation-buttons">
                        <a href="/workspace">Workspace</a>
                        <a href="/perfil">Perfil</a>
                    </div>
                </nav>
            </header>

            <main className="main">
                <div className="project-name padding-big">Nombre de proyecto</div>
                <div className="project">
                    <div>Espacios</div>
                    <div>Tareas</div>
                </div>
            </main>
        </>
    );
}

export default App;
