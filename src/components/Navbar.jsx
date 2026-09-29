import { useState } from 'react'

function Navbar({ onSkillsClick, onWorkClick, onEducationClick, onContactClick }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <h2 className="logo">Portfolio</h2>

            <div className="menu-container">
                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {menuOpen && (
                    <div className="dropdown-menu">
                        <button onClick={() => {
                            onSkillsClick()
                            setMenuOpen(false)
                        }}>
                            Skills
                        </button>

                        <button onClick={() => {
                            onWorkClick()
                            setMenuOpen(false)
                        }}>
                            Work
                        </button>

                        <button onClick={() => {
                            onEducationClick()
                            setMenuOpen(false)
                        }}>
                            Education
                        </button>

                        <button onClick={() => {
                            onContactClick()
                            setMenuOpen(false)
                        }}>
                            Contact
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
