function Education({ onClose }) {
    return (
        <div className="panel">
            <button onClick={onClose}>✕</button>

            <h2>Education</h2>

            <div className="education-card">
                <h3>O-Levels</h3>
                <p>Bangladesh International School & College, Jeddah, KSA</p>
            </div>

            <div className="education-card">
                <h3>A-Levels</h3>
                <p>British Council Bangladesh</p>
            </div>

            <div className="education-card">
                <h3>Undergraduate</h3>
                <p>B.Sc in Computer Science & Engineering, Metropolitan University, Bangladesh</p>
            </div>
        </div>
    )
}

export default Education