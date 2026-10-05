import '../styles/Skills.css';

function Skills({ visibleSections }) {

    return (

        <section
            id="skills"
            className={`
                os-screen
                content-screen
                ${
                    visibleSections.includes('skills')
                        ? 'section-visible'
                        : ''
                }
            `}
        >

            <div className="section-number">
                03 // SKILLS
            </div>


            <div className="content-panel">

                <p className="panel-label">
                    SYSTEM MODULES
                </p>

                <h2>
                    TECHNICAL SKILLS
                </h2>


                <div className="skill-category">

                    <h3>
                        LANGUAGES
                    </h3>

                    <div className="skill-list">

                        <span>C</span>

                        <span>C++</span>

                        <span>PYTHON</span>

                        <span>JAVA</span>

                    </div>

                </div>


                <div className="skill-category">

                    <h3>
                        WEB DEVELOPMENT
                    </h3>

                    <div className="skill-list">

                        <span>HTML / CSS</span>

                        <span>JAVASCRIPT</span>

                        <span>REACT</span>

                        <span>NODE.JS</span>

                    </div>

                </div>


                <div className="skill-category">

                    <h3>
                        DATABASES
                    </h3>

                    <div className="skill-list">

                        <span>MYSQL</span>

                    </div>

                </div>


                <div className="skill-category">

                    <h3>
                        TOOLS & OTHERS
                    </h3>

                    <div className="skill-list">

                        <span>GIT / GITHUB</span>

                        <span>VS CODE</span>

                    </div>

                </div>


            </div>

        </section>

    );

}

export default Skills;