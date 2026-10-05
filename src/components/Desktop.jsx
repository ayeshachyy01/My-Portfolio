import { useEffect, useState } from 'react';
import Taskbar from './Taskbar';
import Home from './Home';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import SystemTest from './SystemTest';
import Contact from './Contact';

function Desktop({ onLogout }) {

    /* =====================================================
       SYSTEM CLOCK
       Updates the clock in the taskbar every second.
    ===================================================== */

    const [time, setTime] = useState(new Date());


    /* =====================================================
       FIRST HOLOGRAM
       Stores the cursor position for the main robot.
    ===================================================== */

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });


    /* =====================================================
       SECOND HOLOGRAM
       Stores the cursor position for the bow robot.
    ===================================================== */

    const [secondMousePosition, setSecondMousePosition] = useState({
        x: 0,
        y: 0
    });


    /* =====================================================
       FIRST ROBOT MONOLOGUES
       Main hologram at the top of the portfolio.
    ===================================================== */

    const robotMessages = [

        {
            label: '// SYSTEM WAKE',
            text: "You're looking at the interface."
        },

        {
            label: '// PROFILE',
            text: "AYESHA CHOUDHURY"
        },
        {
            label: '// PROFILE',
            text: "A Computer Science student and developer."
        },

        {
            label: '// PROFILE',
            text: "Ayesha turns concepts into projects and ideas into working systems."
        },
        {
            label: '// PROFILE',
            text: "This system is a collection of that work."
        },

        {
            label: '// DEVELOPMENT LOG',
            text: "Not everything here started out working."
        },
        {
            label: '// DEVELOPMENT LOG',
            text: "That's usually where the interesting part begins."
        },

        {
            label: '// SYSTEM ACCESS',
            text: "You can explore her projects, technical skills"
        },
        {
            label: '// SYSTEM ACCESS',
            text: "and experiments through the system. Go ahead."
        },

    ];


    /* =====================================================
       FIRST ROBOT MESSAGE INDEX
    ===================================================== */

    const [messageIndex, setMessageIndex] = useState(0);


    /* =====================================================
       SECOND ROBOT MONOLOGUES
       Bow hologram before the Contact section.
    ===================================================== */

    const finalMessages = [

        {
            label: '// AUXILIARY CORE ONLINE',
            text: 'So, you found your way here.'
        },

        {
            label: '// SESSION ANALYSIS',
            text: 'Most people stop at the surface.'
        },

        {
            label: '// UNEXPECTED RESULT',
            text: 'You didn’t.'
        },

        {
            label: '// UNEXPECTED RESULT',
            text: 'Good.'
        },

        {
            label: '// HIDDEN LAYERS',
            text: "There’s more to this system than what appears on screen."
        },
        {
            label: '// PROTOCOL CONTINUE',
            text: "Keep exploring..But before you go"
        },
        {
            label: '// OPTIONAL SYSTEM TEST',
            text: 'Prove you are paying attention.'
        },

    ];


    /* =====================================================
       BABY ROBOT MONOLOGUES
       Small hologram above the Contact section.
    ===================================================== */

    const babyMessages = [

        {
            label: '// FINAL TRANSMISSION',
            text: 'You could leave now.'
        },

        {
            label: '// FINAL TRANSMISSION',
            text: "But then you'd miss what we could build."
        },

        {
            label: '// SYSTEM STATUS',
            text: '...but are you really leaving?'
        },

        {
            label: '// CONNECTION',
            text: 'I think I like having you here.'
        }

    ];


    const [finalMessageIndex, setFinalMessageIndex] = useState(0);

    const [babyMessageIndex, setBabyMessageIndex] = useState(0);


    /* =====================================================
       SCROLL ANIMATION
       Tracks which sections have entered the viewport.
    ===================================================== */

    const [visibleSections, setVisibleSections] = useState([]);


    /* =====================================================
       REACTION TEST
       Controls the mini-game.
    ===================================================== */

    const [gameState, setGameState] = useState('idle');

    const [reactionTime, setReactionTime] = useState(null);

    const [gameMessage, setGameMessage] = useState(
        'INITIALIZE SYSTEM TEST'
    );

    const [targetTime, setTargetTime] = useState(null);

    const [targetPosition, setTargetPosition] = useState({
        x: 50,
        y: 50
    });


    /* =====================================================
       SYSTEM CLOCK EFFECT
    ===================================================== */

    useEffect(() => {

        const clock = setInterval(() => {

            setTime(new Date());

        }, 1000);


        return () => {

            clearInterval(clock);

        };

    }, []);


    /* =====================================================
       REAL CURSOR TRACKING

       The cursor position is converted into a range
       from -1 to 1.

       This allows all three robots to move freely
       around their original positions.
    ===================================================== */

    useEffect(() => {

        const handleMouseMove = (event) => {

            const horizontal =
                (event.clientX / window.innerWidth) * 2 - 1;

            const vertical =
                (event.clientY / window.innerHeight) * 2 - 1;


            setMousePosition({
                x: horizontal,
                y: vertical
            });


            setSecondMousePosition({
                x: horizontal,
                y: vertical
            });

        };


        window.addEventListener(
            'mousemove',
            handleMouseMove
        );


        return () => {

            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );

        };

    }, []);


    /* =====================================================
       FIRST ROBOT MESSAGE TIMER
       Moves through all of the first robot's monologues.
    ===================================================== */

    useEffect(() => {

        const messageTimer = setInterval(() => {

            setMessageIndex((current) => {

                return (
                    (current + 1) %
                    robotMessages.length
                );

            });

        }, 4200);


        return () => {

            clearInterval(messageTimer);

        };

    }, []);


    /* =====================================================
       SECOND ROBOT MESSAGE TIMER
       Moves through all of the second robot's monologues.
    ===================================================== */

    useEffect(() => {

        const finalTimer = setInterval(() => {

            setFinalMessageIndex((current) => {

                return (
                    (current + 1) %
                    finalMessages.length
                );

            });

        }, 4000);


        return () => {

            clearInterval(finalTimer);

        };

    }, []);


    /* =====================================================
       BABY ROBOT MESSAGE TIMER
       Moves through all of the baby robot's monologues.
    ===================================================== */

    useEffect(() => {

        const babyTimer = setInterval(() => {

            setBabyMessageIndex((current) => {

                return (
                    (current + 1) %
                    babyMessages.length
                );

            });

        }, 5000);


        return () => {

            clearInterval(babyTimer);

        };

    }, []);


    /* =====================================================
       SCROLL SECTION OBSERVER
       Makes content panels animate into view while scrolling.
    ===================================================== */

    useEffect(() => {

        const sections =
            document.querySelectorAll('.content-screen');


        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        setVisibleSections((current) => {

                            if (
                                current.includes(entry.target.id)
                            ) {
                                return current;
                            }

                            return [
                                ...current,
                                entry.target.id
                            ];

                        });

                    }

                });

            },
            {
                threshold: 0.25
            }
        );


        sections.forEach((section) => {

            observer.observe(section);

        });


        return () => {

            observer.disconnect();

        };

    }, []);


    /* =====================================================
       START REACTION TEST
       Waits a random amount of time before showing
       the target.
    ===================================================== */

    const startGame = () => {

        setGameState('waiting');

        setReactionTime(null);

        setGameMessage(
            'WAIT FOR THE SIGNAL...'
        );


        const delay =
            Math.floor(Math.random() * 2000) + 1500;


        setTimeout(() => {

            const randomX =
                Math.floor(Math.random() * 70) + 15;

            const randomY =
                Math.floor(Math.random() * 55) + 20;


            setTargetPosition({
                x: randomX,
                y: randomY
            });


            setTargetTime(Date.now());

            setGameState('ready');

            setGameMessage(
                'SIGNAL DETECTED // CLICK NOW'
            );

        }, delay);

    };


    /* =====================================================
       HANDLE REACTION TARGET
       Calculates how quickly the user clicked.
    ===================================================== */

    const handleTargetClick = () => {

        if (gameState !== 'ready') {

            return;

        }


        const currentTime = Date.now();

        const result =
            currentTime - targetTime;


        setReactionTime(result);

        setGameState('finished');

        setGameMessage(
            'SYSTEM TEST COMPLETE'
        );

    };


    /* =====================================================
       CURRENT MONOLOGUES
    ===================================================== */

    const currentMessage =
        robotMessages[messageIndex];


    const currentFinalMessage =
        finalMessages[finalMessageIndex];


    const currentBabyMessage =
        babyMessages[babyMessageIndex];


    return (

        <main className="os">


            <Home
                mousePosition={mousePosition}
                currentMessage={currentMessage}
                messageIndex={messageIndex}
            />


            <About
                visibleSections={visibleSections}
            />
            {/* =================================================
                EDUCATION
                ================================================= */}

            <Education
                visibleSections={visibleSections}
            />


            {/* =================================================
               SKILLS
            ================================================= */}

            <Skills
                visibleSections={visibleSections}
            />


            {/* =================================================
               PROJECTS
            ================================================= */}

            <Projects
                visibleSections={visibleSections}
            />


            {/* =================================================
               SYSTEM TEST
            ================================================= */}

            <SystemTest
                visibleSections={visibleSections}
                secondMousePosition={secondMousePosition}
                currentFinalMessage={currentFinalMessage}
                finalMessageIndex={finalMessageIndex}
                gameState={gameState}
                gameMessage={gameMessage}
                targetPosition={targetPosition}
                reactionTime={reactionTime}
                startGame={startGame}
                handleTargetClick={handleTargetClick}
            />


            {/* =================================================
               CONTACT
            ================================================= */}

            <Contact
                visibleSections={visibleSections}
                mousePosition={mousePosition}
                currentBabyMessage={currentBabyMessage}
                babyMessageIndex={babyMessageIndex}
            />


            <Taskbar
                time={time}
                onLogout={onLogout}
            />


        </main>
    );
}

export default Desktop;
