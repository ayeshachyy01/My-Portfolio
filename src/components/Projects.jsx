/* =========================================================
   PROJECTS
========================================================= */

import '../styles/Projects.css';

function Projects({ visibleSections }) {

    return (

        <section
            id="projects"
            className={`
                os-screen
                content-screen
                ${visibleSections.includes('projects')
                    ? 'section-visible'
                    : ''
                }
            `}
        >

            <div className="section-number">
                04 // PROJECTS
            </div>


            <div className="content-panel">

                <p className="panel-label">
                    PROJECT DATABASE
                </p>

                <h2>
                    SELECTED WORK
                </h2>


                <div className="project-list">

                    <div className="project-item">

                        <span>
                            01
                        </span>

                        <div className="project-info">

                            <strong>
                                BLUETOOTH CONTROL CAR
                            </strong>

                            <p className="project-tech">
                                ARDUINO · C++
                            </p>

                            <a
                                href="https://github.com/ayeshachyy01/Bluetooth-Control-Car"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                [ ACCESS REPOSITORY ]
                            </a>

                        </div>

                    </div>


                    <div className="project-item">

                        <span>
                            02
                        </span>

                        <div className="project-info">

                            <strong>
                                JAVA SWING FLASHCARDS
                            </strong>

                            <p className="project-tech">
                                JAVA · SWING
                            </p>

                            <a
                                href="https://github.com/ayeshachyy01/Oop-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                [ ACCESS REPOSITORY ]
                            </a>

                        </div>

                    </div>


                    <div className="project-item">

                        <span>
                            03
                        </span>

                        <div className="project-info">

                            <strong>
                                CHAPTORA — MANHWA & MANGA LIBRARY
                            </strong>

                            <p className="project-tech">
                                HTML · CSS · JAVASCRIPT · MYSQL
                            </p>

                            <a
                                href="https://github.com/ayeshachyy01/Chaptora-Manhwa-and-Manga-Library"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                [ ACCESS REPOSITORY ]
                            </a>

                        </div>

                    </div>


                    <div className="project-item">

                        <span>
                            04
                        </span>

                        <div className="project-info">

                            <strong>
                                MY PORTFOLIO-this one
                            </strong>

                            <p className="project-tech">
                                REACT · JAVASCRIPT · CSS · VITE
                            </p>

                            <a
                                href="https://github.com/ayeshachyy01/My-Portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                [ ACCESS REPOSITORY ]
                            </a>

                        </div>

                    </div>


                </div>

            </div>

        </section>

    );

}

export default Projects;
