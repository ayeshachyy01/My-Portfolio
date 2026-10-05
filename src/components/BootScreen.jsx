import { useEffect, useState } from 'react';
import '../styles/BootScreen.css';

function BootScreen({ onBootComplete }) {
    const [progress, setProgress] = useState(0);
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        const linesTimer = setInterval(() => {
            setVisibleLines((current) => {
                if (current >= 4) {
                    clearInterval(linesTimer);
                    return 4;
                }

                return current + 1;
            });
        }, 900);

        const progressTimer = setInterval(() => {
            setProgress((current) => {
                if (current >= 100) {
                    clearInterval(progressTimer);

                    setTimeout(() => {
                        onBootComplete();
                    }, 1000);

                    return 100;
                }

                return current + 1;
            });
        }, 55);

        return () => {
            clearInterval(linesTimer);
            clearInterval(progressTimer);
        };
    }, [onBootComplete]);

    const statusLines = [
        '[ OK ] CORE SYSTEM',
        '[ OK ] USER PROFILE',
        '[ OK ] INTERFACE',
        '[ OK ] APPLICATIONS'
    ];

    return (
        <div className="boot-screen">

            <div className="boot-content">

                <div className="boot-logo">
                    AYOS
                </div>

                <div className="boot-subtitle">
                    AYOS // SYSTEM INITIALIZATION
                </div>

                <div className="boot-status">
                    {statusLines.map((line, index) => (
                        index < visibleLines && (
                            <p key={line}>{line}</p>
                        )
                    ))}
                </div>

                <div className="boot-progress">
                    <div
                        className="boot-progress-bar"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <div className="boot-percentage">
                    {progress}%
                </div>

                <div className="boot-user">
                    USER DETECTED
                </div>

            </div>

        </div>
    );
}

export default BootScreen;