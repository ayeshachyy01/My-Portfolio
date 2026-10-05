import { useEffect, useState } from 'react';
import '../styles/Home.css';

function Home({ mousePosition, currentMessage, messageIndex }) {

    const typedText =
        'I MAKE THINGS THAT WORK. THEN I MAKE THEM WORTH LOOKING AT.';

    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {

        let currentIndex = 0;

        setDisplayedText('');

        const typingInterval = setInterval(() => {

            setDisplayedText(
                typedText.slice(0, currentIndex + 1)
            );

            currentIndex++;

            if (currentIndex === typedText.length) {
                clearInterval(typingInterval);
            }

        }, 100);

        return () => {
            clearInterval(typingInterval);
        };

    }, []);


    return (

        <section
            id="home"
            className="os-screen home-screen"
        >

            <div className="grid-background"></div>


            {/* SYSTEM HEADER */}

            <header className="system-header">

                <div>

                    <div className="system-name">
                        AYOS
                    </div>

                    <div className="system-subtitle">
                        AC OPERATING SYSTEM
                    </div>

                </div>


                <div className="system-status">

                    <span className="status-dot"></span>

                    SYSTEM ONLINE

                </div>

            </header>


            {/* USER INFORMATION */}

            <div className="system-info">

                <p>
                    USER // AYESHA CHOUDHURY
                </p>

                <p>
                    ROLE // COMPUTER SCIENCE STUDENT
                </p>

                <p>
                    STATUS // AVAILABLE
                </p>

            </div>


            {/* FIRST HOLOGRAM */}

            <div className="hologram-area">

                <div
                    className="hologram"
                    style={{
                        transform: `
                            translate3d(
                                ${mousePosition.x * 100}px,
                                ${mousePosition.y * 65}px,
                                0
                            )
                            rotateY(${mousePosition.x * 10}deg)
                            rotateX(${-mousePosition.y * 6}deg)
                        `
                    }}
                >

                    {/* ROBOT HEAD */}

                    <div className="robot-head">

                        <div
                            className="robot-eye left-eye"
                            style={{
                                transform: `
                                    translate(
                                        ${mousePosition.x * 10}px,
                                        ${mousePosition.y * 6}px
                                    )
                                `
                            }}
                        ></div>


                        <div
                            className="robot-eye right-eye"
                            style={{
                                transform: `
                                    translate(
                                        ${mousePosition.x * 10}px,
                                        ${mousePosition.y * 6}px
                                    )
                                `
                            }}
                        ></div>

                    </div>


                    {/* ROBOT BODY */}

                    <div className="robot-body">

                        <div className="robot-core"></div>

                        <div className="robot-line line-one"></div>

                        <div className="robot-line line-two"></div>

                    </div>


                    <div className="robot-base"></div>

                    <div className="hologram-ring"></div>

                </div>


                {/* FIRST ROBOT MESSAGE BOX */}

                <div className="robot-message">

                    <div className="message-header">
                        AYOS // AI CORE
                    </div>


                    <div className="message-status">

                        <span></span>

                        ACTIVE

                    </div>


                    <div className="message-line"></div>


                    <div className="message-label">
                        {currentMessage.label}
                    </div>


                    <div
                        key={messageIndex}
                        className="message-text"
                    >
                        {currentMessage.text}
                    </div>


                    <div className="message-cursor">
                        _
                    </div>

                </div>

            </div>


            {/* CENTER DISPLAY */}

            <div className="center-display">

                <div className="center-line"></div>

                <div className="center-label">
                    AYOS // SYSTEM READY
                </div>

                <div className="center-description">
                    INTERACTIVE PORTFOLIO ENVIRONMENT
                </div>

                <div className="center-line"></div>

                <div className="typed-message">
                    {displayedText}
                    <span className="typed-cursor">_</span>
                </div>

            </div>

        </section>

    );
}

export default Home;