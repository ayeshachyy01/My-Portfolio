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

function Taskbar({
    time,
    onLogout,
    activeSection
}) {

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
                    className={`taskbar-icon ${activeSection === 'home'
                        ? 'active'
                        : ''
                        }`}
                    title="Home"
                >
                    <FaHome />
                </a>


                <a
                    href="#about"
                    className={`taskbar-icon ${activeSection === 'about'
                        ? 'active'
                        : ''
                        }`}
                    title="About"
                >
                    <FaUser />
                </a>


                <a
                    href="#education"
                    className={`taskbar-icon ${activeSection === 'education'
                        ? 'active'
                        : ''
                        }`}
                    title="Education"
                >
                    <FaGraduationCap />
                </a>


                <a
                    href="#skills"
                    className={`taskbar-icon ${activeSection === 'skills'
                        ? 'active'
                        : ''
                        }`}
                    title="Skills"
                >
                    <FaCode />
                </a>


                <a
                    href="#projects"
                    className={`taskbar-icon ${activeSection === 'projects'
                        ? 'active'
                        : ''
                        }`}
                    title="Projects"
                >
                    <FaFolderOpen />
                </a>


                <a
                    href="#reaction"
                    className={`taskbar-icon ${activeSection === 'reaction'
                        ? 'active'
                        : ''
                        }`}
                    title="System Test"
                >
                    <FaBolt />
                </a>


                <a
                    href="#contact"
                    className={`taskbar-icon ${activeSection === 'contact'
                        ? 'active'
                        : ''
                        }`}
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
