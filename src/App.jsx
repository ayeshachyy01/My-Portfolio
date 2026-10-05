import { useState } from 'react';
import BootScreen from './components/BootScreen';
import Desktop from './components/Desktop';
import './App.css';

function App() {

    const [started, setStarted] = useState(false);
    const [bootComplete, setBootComplete] = useState(false);


    const handleLogout = () => {

        setStarted(false);
        setBootComplete(false);

    };


    if (!started) {

        return (

            <div className="start-screen">

                <div className="start-content">

                    <div className="start-code">
                        AYOS // SYSTEM READY
                    </div>

                    <h1>AYOS</h1>

                    <p>
                        AC OPERATING SYSTEM
                    </p>

                    <div className="start-line"></div>

                    <button
                        className="start-button"
                        onClick={() => setStarted(true)}
                    >
                        START SYSTEM
                    </button>

                    <div className="start-hint">
                        INITIALIZATION REQUIRED
                    </div>

                </div>

            </div>

        );

    }


    if (!bootComplete) {

        return (

            <BootScreen
                onBootComplete={() => setBootComplete(true)}
            />

        );

    }


    return (

        <Desktop
            onLogout={handleLogout}
        />

    );

}

export default App;