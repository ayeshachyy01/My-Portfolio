function Contact({ onClose }) {
    return (
        <div className="panel">
            <button onClick={onClose}>✕</button>

            <h2>Contact Me</h2>

            <p className="email">
                Email: <a href="mailto:ayeshachyy01@gmail.com">ayeshachyy01@gmail.com</a>
            </p>

            <div className="social-links">
                <a
                    href="https://github.com/ayeshachyy01"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <i className="fab fa-github"></i>
                </a>

                <a
                    href="https://www.facebook.com/ayesha.choudhury.849653"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <i className="fab fa-facebook"></i>
                </a>
            </div>
        </div>
    )
}

export default Contact