function Navbar({ onSkillsClick, onWorkClick, onContactClick }) {
    return (
        <nav className="navbar">
            <h2 className="logo">Portfolio</h2>

            <div className="nav-links">
                <button onClick={onSkillsClick}>Skills</button>
                <button onClick={onWorkClick}>Work</button>
                <button onClick={onContactClick}>Contact</button>
            </div>
        </nav>
    )
}

export default Navbar