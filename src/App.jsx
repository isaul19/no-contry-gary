import LogoSvg from "./assets/images/logo.svg";
import PencilImage from "./assets/images/pencil-edit.svg";
import PencilImage2 from "./assets/images/pencil-edit2.svg";
import DashImage from "./assets/images/dash.svg";
import AddImage from "./assets/images/add.svg";

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
                <div className="project-name padding-big">
                    <span>Nombre de proyecto</span>
                    <img src={PencilImage2} alt="edit-icon" />
                </div>
                <div className="project">
                    <section className="space-block">
                        <h2 className="space-block__title">Espacios</h2>
                        <div className="space-block__items">
                            <div className="space-block__item">
                                <span>Diseño</span>
                                <img src={PencilImage} alt="edit-icon" />
                            </div>
                            <div className="space-block__item">
                                <span>Fronted</span>
                                <img src={PencilImage} alt="edit-icon" />
                            </div>
                            <div className="space-block__item">
                                <span>Backend</span>
                                <img src={PencilImage} alt="edit-icon" />
                            </div>
                            <div className="space-block__item">
                                <span>QA</span>
                                <img src={PencilImage} alt="edit-icon" />
                            </div>
                        </div>

                        <div className="space-block__buttons">
                            <button>Agregar Espacio</button>
                            <button>Large button</button>
                        </div>
                    </section>
                    <section className="task-block">
                        <div className="task-block__select">
                            <label htmlFor="select-task">Acomodar por:</label>
                            <select id="select-task" className="task-select">
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className="task-list">
                            <h2>
                                <img src={DashImage} alt="dash-icon" />
                                <span>Lista de tareas</span>
                            </h2>
                            <div className="task-list__items">
                                <div className="task-list__items"></div>
                            </div>
                        </div>
                        <button className="task-block__button-add">
                            <img src={AddImage} alt="add-icon" />
                            <span>Tarea</span>
                        </button>
                    </section>
                </div>
            </main>
        </>
    );
}

export default App;
