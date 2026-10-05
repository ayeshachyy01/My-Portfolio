import '../styles/Contact.css';

import {
    FaEnvelope,
    FaGithub,
    FaFacebook
} from 'react-icons/fa';

function Contact({
    visibleSections,
    mousePosition,
    currentBabyMessage,
    babyMessageIndex
}) {

    return (

        <section
            id="contact"
            className={`
                os-screen
                content-screen
                contact-screen
                ${
                    visibleSections.includes('contact')
                        ? 'section-visible'
                        : ''
                }
            `}
        >

            <div className="section-number">
                06 // CONTACT
            </div>


            {/* CONTACT CONTAINER */}

            <div className="contact-container">


                {/* =================================================
                   BABY ROBOT
                ================================================= */}

                <div
                    className="baby-robot"
                    style={{
                        transform: `
                            translate3d(
                                ${mousePosition.x * 40}px,
                                ${mousePosition.y * 25}px,
                                0
                            )
                            rotateY(${mousePosition.x * 8}deg)
                            rotateX(${-mousePosition.y * 5}deg)
                        `
                    }}
                >

                    {/* BABY HEAD */}

                    <div className="baby-head">

                        <div className="baby-ear left"></div>

                        <div className="baby-ear right"></div>

                        <div className="baby-eye left-eye"></div>

                        <div className="baby-eye right-eye"></div>


                        {/* PACIFIER */}

                        <div className="pacifier">

                            <div className="pacifier-ring"></div>

                        </div>

                    </div>


                    {/* BABY BODY */}

                    <div className="baby-body">

                        <div className="baby-chest-light"></div>

                    </div>


                    <div className="baby-leg left-leg"></div>

                    <div className="baby-leg right-leg"></div>

                </div>


                {/* =================================================
                   BABY MONOLOGUE
                ================================================= */}

                <div className="baby-monologue">

                    <div className="baby-message-label">
                        {currentBabyMessage.label}
                    </div>

                    <div
                        key={babyMessageIndex}
                        className="baby-message-text"
                    >
                        {currentBabyMessage.text}
                    </div>

                    <div className="message-cursor">
                        _
                    </div>

                </div>


                {/* =================================================
                   CONTACT PANEL
                ================================================= */}

                <div className="content-panel">

                    <p className="panel-label">
                        CONNECTION TERMINAL
                    </p>

                    <h2>
                        SOMETHING WORTH BUILDING?
                        <br />
                        I'M LISTENING!!
                    </h2>


                    {/* CONTACT LINKS */}

                    <div className="contact-links">

                        <a
                            href="mailto:ayeshachyy01@gmail.com"
                            className="contact-link"
                        >
                            <FaEnvelope />

                            <span>
                                ayeshachyy01@gmail.com
                            </span>
                        </a>


                        <a
                            href="https://github.com/ayeshachyy01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            <FaGithub />

                            <span>
                                ayeshachyy01
                            </span>
                        </a>


                        <a
                            href="https://www.facebook.com/ayesha.choudhury.849653"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            <FaFacebook />

                            <span>
                                Ayesha Choudhury
                            </span>
                        </a>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Contact;