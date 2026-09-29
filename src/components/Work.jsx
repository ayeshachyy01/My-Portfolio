function Work({ onClose }) {
    return (
        <div className="panel">
            <button onClick={onClose}>✕</button>

            <h2>My Work</h2>

            <div className="work-grid">
                <div className="work-card">
                    <h3>Bluetooth Controlled Car</h3>
                    <p>
                        An Arduino-based car controlled wirelessly using
                        Bluetooth, allowing the car to move in different directions.
                    </p>
                </div>

                <div className="work-card">
                    <h3>Java Swing Flashcards</h3>
                    <p>
                        A Java Swing application that displays flashcards,
                        allowing users to navigate between questions and reveal answers.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Work
