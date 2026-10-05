import '../styles/Taskbar.css';

import { useState } from 'react';

import {
    FaHome,
    FaUser,
    FaGraduationCap,
    FaCode,
    FaFolderOpen,
    FaBolt,
    FaEnvelope
} from 'react-icons/fa';

function Taskbar({ time, onLogout }) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <div className="taskbar">

            <div className="taskbar-left">

                <button
                    className="taskbar-logo"
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}
                >
                    AC
                </button>


                {menuOpen && (

                    <div className="taskbar-menu">

                        <button
                            onClick={() => {
                                setMenuOpen(false);
                                onLogout();
                            }}
                        >
                            LOG OUT
                        </button>

                    </div>

                )}

            </div>


            <nav className="taskbar-nav">

                <a
                    href="#home"
                    className="taskbar-icon"
                    title="Home"
                >
                    <FaHome />
                </a>


                <a
                    href="#about"
                    className="taskbar-icon"
                    title="About"
                >
                    <FaUser />
                </a>


                <a
                    href="#education"
                    className="taskbar-icon"
                    title="Education"
                >
                    <FaGraduationCap />
                </a>


                <a
                    href="#skills"
                    className="taskbar-icon"
                    title="Skills"
                >
                    <FaCode />
                </a>


                <a
                    href="#projects"
                    className="taskbar-icon"
                    title="Projects"
                >
                    <FaFolderOpen />
                </a>


                <a
                    href="#reaction"
                    className="taskbar-icon"
                    title="System Test"
                >
                    <FaBolt />
                </a>


                <a
                    href="#contact"
                    className="taskbar-icon"
                    title="Contact"
                >
                    <FaEnvelope />
                </a>

            </nav>


            <div className="taskbar-right">

                <span>
                    {time.toLocaleTimeString()}
                </span>

            </div>

        </div>

    );

}

export default Taskbar;