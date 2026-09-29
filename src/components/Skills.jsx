import { useState } from 'react'

function Skills({ onClose }) {
    const [activeSkill, setActiveSkill] = useState(null)

    const toggleSkill = (skill) => {
        setActiveSkill(activeSkill === skill ? null : skill)
    }

    return (
        <div className="panel">
            <button onClick={onClose}>✕</button>

            <h2>My Skills</h2>

            <div className="skills-grid">
                <div
                    className={`skill-card ${activeSkill === 'cpp' ? 'active' : ''}`}
                    onClick={() => toggleSkill('cpp')}
                >
                    <h3>C++</h3>
                    <p>Programming fundamentals, problem solving and algorithms.</p>
                </div>

                <div
                    className={`skill-card ${activeSkill === 'java' ? 'active' : ''}`}
                    onClick={() => toggleSkill('java')}
                >
                    <h3>Java</h3>
                    <p>Object-oriented programming and application development.</p>
                </div>

                <div
                    className={`skill-card ${activeSkill === 'python' ? 'active' : ''}`}
                    onClick={() => toggleSkill('python')}
                >
                    <h3>Python</h3>
                    <p>Programming, scripting and basic problem solving.</p>
                </div>

                <div
                    className={`skill-card ${activeSkill === 'javascript' ? 'active' : ''}`}
                    onClick={() => toggleSkill('javascript')}
                >
                    <h3>JavaScript</h3>
                    <p>Creating interactive features for websites.</p>
                </div>

                <div
                    className={`skill-card ${activeSkill === 'react' ? 'active' : ''}`}
                    onClick={() => toggleSkill('react')}
                >
                    <h3>React</h3>
                    <p>Building interactive user interfaces with components.</p>
                </div>

                <div
                    className={`skill-card ${activeSkill === 'htmlcss' ? 'active' : ''}`}
                    onClick={() => toggleSkill('htmlcss')}
                >
                    <h3>HTML & CSS</h3>
                    <p>Creating and styling responsive web pages.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
