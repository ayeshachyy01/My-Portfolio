import { useEffect, useState } from 'react';
import Taskbar from './Taskbar';
import Home from './Home';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import SystemTest from './SystemTest';
import Contact from './Contact';


/* create the desktop component */
/* receive onlogout from the app component */
function Desktop({ onLogout }) {

    /* store the current time for the taskbar clock */
    const [time, setTime] = useState(new Date());


    /* store the cursor position for the first robot */
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });


    /* store the cursor position for the second robot */
    const [secondMousePosition, setSecondMousePosition] = useState({
        x: 0,
        y: 0
    });


    /* store the messages shown by the first robot */
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
        }

    ];


    /* store the position of the current first robot message */
    const [messageIndex, setMessageIndex] = useState(0);


    /* store the messages shown by the second robot */
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
        }

    ];


    /* store the messages shown by the baby robot */
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


    /* store the position of the current second robot message */
    const [finalMessageIndex, setFinalMessageIndex] = useState(0);

    /* store the position of the current baby robot message */
    const [babyMessageIndex, setBabyMessageIndex] = useState(0);


    /* store which sections have appeared on the screen */
    const [visibleSections, setVisibleSections] = useState([]);

    /* store the section currently being viewed */
    const [activeSection, setActiveSection] = useState('home');


    /* store the current state of the reaction game */
    const [gameState, setGameState] = useState('idle');

    /* store the user's reaction time */
    const [reactionTime, setReactionTime] = useState(null);

    /* store the message shown in the reaction game */
    const [gameMessage, setGameMessage] = useState(
        'INITIALIZE SYSTEM TEST'
    );

    /* store the time when the reaction target appears */
    const [targetTime, setTargetTime] = useState(null);

    /* store the position of the reaction target */
    const [targetPosition, setTargetPosition] = useState({
        x: 50,
        y: 50
    });


    /* update the clock every second */
    useEffect(() => {

        /* create a timer that runs every second */
        const clock = setInterval(() => {

            /* update the time */
            setTime(new Date());

        }, 1000);


        /* stop the timer when the component is removed */
        return () => {

            clearInterval(clock);

        };

    }, []);


    /* track the real mouse position */
    useEffect(() => {

        /* run this function whenever the mouse moves */
        const handleMouseMove = (event) => {

            /* convert the horizontal cursor position to a range from -1 to 1 */
            const horizontal =
                (event.clientX / window.innerWidth) * 2 - 1;

            /* convert the vertical cursor position to a range from -1 to 1 */
            const vertical =
                (event.clientY / window.innerHeight) * 2 - 1;


            /* update the first robot position */
            setMousePosition({
                x: horizontal,
                y: vertical
            });


            /* update the second robot position */
            setSecondMousePosition({
                x: horizontal,
                y: vertical
            });

        };


        /* listen for mouse movement */
        window.addEventListener(
            'mousemove',
            handleMouseMove
        );


        /* remove the mouse listener when the component is removed */
        return () => {

            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );

        };

    }, []);


    /* change the first robot message every 4.2 seconds */
    useEffect(() => {

        /* create a timer for changing the message */
        const messageTimer = setInterval(() => {

            setMessageIndex((current) => {

                /* move to the next message */
                return (
                    (current + 1) %
                    robotMessages.length
                );

            });

        }, 4200);


        /* stop the timer when the component is removed */
        return () => {

            clearInterval(messageTimer);

        };

    }, []);


    /* change the second robot message every 4 seconds */
    useEffect(() => {

        /* create a timer for changing the message */
        const finalTimer = setInterval(() => {

            setFinalMessageIndex((current) => {

                /* move to the next message */
                return (
                    (current + 1) %
                    finalMessages.length
                );

            });

        }, 4000);


        /* stop the timer when the component is removed */
        return () => {

            clearInterval(finalTimer);

        };

    }, []);


    /* change the baby robot message every 5 seconds */
    useEffect(() => {

        /* create a timer for changing the message */
        const babyTimer = setInterval(() => {

            setBabyMessageIndex((current) => {

                /* move to the next message */
                return (
                    (current + 1) %
                    babyMessages.length
                );

            });

        }, 5000);


        /* stop the timer when the component is removed */
        return () => {

            clearInterval(babyTimer);

        };

    }, []);


    /* detect when sections enter the screen while scrolling */
    useEffect(() => {

        /* select all sections that should be observed */
        const sections =
            document.querySelectorAll('.content-screen, #home');


        /* create an observer for detecting visible sections */
        const observer = new IntersectionObserver(
            (entries) => {

                /* check each section */
                entries.forEach((entry) => {

                    /* run when the section enters the viewport */
                    if (entry.isIntersecting) {

                        /* update the active section */
                        setActiveSection(entry.target.id);

                        /* add the section to the visible sections */
                        setVisibleSections((current) => {

                            /* do not add the section again */
                            if (
                                current.includes(entry.target.id)
                            ) {
                                return current;
                            }

                            /* add the new section */
                            return [
                                ...current,
                                entry.target.id
                            ];

                        });

                    }

                });

            },

            /* section becomes visible when 25% is inside the viewport */
            {
                threshold: 0.25
            }
        );


        /* start observing every selected section */
        sections.forEach((section) => {

            observer.observe(section);

        });


        /* stop observing when the component is removed */
        return () => {

            observer.disconnect();

        };

    }, []);


    /* start the reaction test */
    const startGame = () => {

        /* set the game to waiting mode */
        setGameState('waiting');

        /* remove the previous reaction time */
        setReactionTime(null);

        /* tell the user to wait */
        setGameMessage(
            'WAIT FOR THE SIGNAL...'
        );


        /* create a random delay between 1.5 and 3.5 seconds for system game */
        const delay =
            Math.floor(Math.random() * 2000) + 1500;


        /* wait for the random delay before showing the target */
        setTimeout(() => {

            /* create a random horizontal position */
            const randomX =
                Math.floor(Math.random() * 70) + 15;

            /* create a random vertical position */
            const randomY =
                Math.floor(Math.random() * 55) + 20;


            /* move the target to the random position */
            setTargetPosition({
                x: randomX,
                y: randomY
            });


            /* record the exact time when the target appears */
            setTargetTime(Date.now());

            /* change the game to ready mode */
            setGameState('ready');

            /* tell the user to click the target */
            setGameMessage(
                'SIGNAL DETECTED // CLICK NOW'
            );

        }, delay);

    };


    /* handle the user clicking the reaction target */
    const handleTargetClick = () => {

        /* ignore clicks when the game is not ready */
        if (gameState !== 'ready') {

            return;

        }


        /* get the current time */
        const currentTime = Date.now();

        /* calculate how many milliseconds the user took */
        const result =
            currentTime - targetTime;


        /* store the reaction time */
        setReactionTime(result);

        /* change the game to finished mode */
        setGameState('finished');

        /* show the completed message */
        setGameMessage(
            'SYSTEM TEST COMPLETE'
        );

    };


    /* get the current message for the first robot */
    const currentMessage =
        robotMessages[messageIndex];

    /* get the current message for the second robot */
    const currentFinalMessage =
        finalMessages[finalMessageIndex];

    /* get the current message for the baby robot */
    const currentBabyMessage =
        babyMessages[babyMessageIndex];


    /* display the complete desktop */
    return (

        <main className="os">

            {/* display the home section */}
            <Home
                mousePosition={mousePosition}
                currentMessage={currentMessage}
                messageIndex={messageIndex}
            />


            {/* display the about section */}
            <About
                visibleSections={visibleSections}
            />


            {/* display the education section */}
            <Education
                visibleSections={visibleSections}
            />


            {/* display the skills section */}
            <Skills
                visibleSections={visibleSections}
            />


            {/* display the projects section */}
            <Projects
                visibleSections={visibleSections}
            />


            {/* display the system test section */}
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


            {/* display the contact section */}
            <Contact
                visibleSections={visibleSections}
                mousePosition={mousePosition}
                currentBabyMessage={currentBabyMessage}
                babyMessageIndex={babyMessageIndex}
            />


            {/* display the taskbar */}
            <Taskbar
                activeSection={activeSection}
            />

        </main>
    );
}

export default Desktop;
