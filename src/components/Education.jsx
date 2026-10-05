import '../styles/Education.css';

function Education({ visibleSections }) {

    return (

        <section
            id="education"
            className={`
                os-screen
                content-screen
                education-screen
                ${visibleSections.includes('education')
                    ? 'section-visible'
                    : ''
                }
            `}
        >
            <div className="section-number">
                02 // Academic Log
            </div>

            <div className="education-container">

                <div className="content-panel">

                    <p className="panel-label">
                        ACADEMIC MODULE
                    </p>

                    <h2>
                        EDUCATIONAL RECORD
                    </h2>


                    <div className="education-card">

                        <div className="education-info">

                            <h3>
                                B.Sc. in Computer Science
                            </h3>

                            <p className="education-institution">
                                Metropolitan University
                            </p>

                        </div>

                    </div>


                    <div className="education-card">

                        <div className="education-info">

                            <h3>
                                A-Levels
                            </h3>

                            <p className="education-institution">
                                British Council Bangladesh
                            </p>

                        </div>

                    </div>


                    <div className="education-card">

                        <div className="education-info">

                            <h3>
                                O-Levels
                            </h3>

                            <p className="education-institution">
                                Bangladesh International School & College
                                Jeddah, KSA
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default Education;