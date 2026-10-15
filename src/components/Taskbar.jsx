
import '../styles/Taskbar.css';

import {
    FaHome,
    FaUser,
    FaGraduationCap,
    FaCode,
    FaFolderOpen,
    FaBolt,
    FaEnvelope
} from 'react-icons/fa';

// create the taskbar component
function Taskbar({
    activeSection
}) {

    return (

        <div className="taskbar">

            {/* left side of the taskbar */}
            <div className="taskbar-left">

                {/* ac logo */}
                <div className="taskbar-logo">
                    AC
                </div>

            </div>


            {/* navigation area containing all section icons */}
            <nav className="taskbar-nav">

                {/* home icon */}
                <a
                    href="#home"
                    className={`taskbar-icon ${activeSection === 'home' ? 'active' : ''}`}
                    title="Home"
                >
                    <FaHome />
                </a>

                {/* about icon */}
                <a
                    href="#about"
                    className={`taskbar-icon ${activeSection === 'about' ? 'active' : ''}`}
                    title="About"
                >
                    <FaUser />
                </a>

                {/* education icon */}
                <a
                    href="#education"
                    className={`taskbar-icon ${activeSection === 'education' ? 'active' : ''}`}
                    title="Education"
                >
                    <FaGraduationCap />
                </a>

                {/* skills icon */}
                <a
                    href="#skills"
                    className={`taskbar-icon ${activeSection === 'skills' ? 'active' : ''}`}
                    title="Skills"
                >
                    <FaCode />
                </a>

                {/* projects icon */}
                <a
                    href="#projects"
                    className={`taskbar-icon ${activeSection === 'projects' ? 'active' : ''}`}
                    title="Projects"
                >
                    <FaFolderOpen />
                </a>

                {/* system test icon */}
                <a
                    href="#reaction"
                    className={`taskbar-icon ${activeSection === 'reaction' ? 'active' : ''}`}
                    title="System Test"
                >
                    <FaBolt />
                </a>

                {/* contact icon */}
                <a
                    href="#contact"
                    className={`taskbar-icon ${activeSection === 'contact' ? 'active' : ''}`}
                    title="Contact"
                >
                    <FaEnvelope />
                </a>

            </nav>

        </div>

    );

}

export default Taskbar;
