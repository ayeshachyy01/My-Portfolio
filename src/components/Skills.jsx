function Skills({ onClose }) {
    return (
        <div className="panel">
            <button onClick={onClose}>✕</button>

            <h2>My Skills</h2>

            <div className="skills-grid">
                <div>
                    <h3>C++</h3>
                    <p>Programming fundamentals, problem solving and algorithms.</p>
                </div>

                <div>
                    <h3>Java</h3>
                    <p>Object-oriented programming and application development.</p>
                </div>

                <div>
                    <h3>Python</h3>
                    <p>Programming, scripting and basic problem solving.</p>
                </div>

                <div>
                    <h3>JavaScript</h3>
                    <p>Creating interactive features for websites.</p>
                </div>

                <div>
                    <h3>React</h3>
                    <p>Building interactive user interfaces with components.</p>
                </div>

                <div>
                    <h3>HTML & CSS</h3>
                    <p>Creating and styling responsive web pages.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills