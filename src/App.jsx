import { useState } from 'react'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
    const [activePanel, setActivePanel] = useState(null)

    return (
        <div>
            <Navbar
                onSkillsClick={() => setActivePanel('skills')}
                onWorkClick={() => setActivePanel('work')}
                onContactClick={() => setActivePanel('contact')}
            />

            <main className="profile">
                <img
                    src="/Ayeshaprofile.png"
                    alt="Ayesha Choudhury"
                    className="profile-picture"
                />

                <p className="intro-small">Hey There! :D</p>

                <h1>I'm Ayesha Choudhury</h1>

                <p className="intro">
                    A Computer Science student who enjoys programming,
                    building projects and learning about technologies.
                </p>
            </main>

            {activePanel === 'skills' && (
                <Skills onClose={() => setActivePanel(null)} />
            )}

            {activePanel === 'work' && (
                <Work onClose={() => setActivePanel(null)} />
            )}

            {activePanel === 'contact' && (
                <Contact onClose={() => setActivePanel(null)} />
            )}
        </div>
    )
}

export default App