function About({ visibleSections }) {

    return (

        <section
            id="about"
            className={`
                os-screen
                content-screen
                ${visibleSections.includes('about')
                    ? 'section-visible'
                    : ''
                }
            `}
        >

            <div className="section-number">
                01 // ABOUT
            </div>


            <div className="content-panel">

                <p className="panel-label">
                    USER PROFILE
                </p>

                <h2>
                    AYESHA CHOUDHURY
                </h2>

                <p>
                    I’ve always been the kind of person who gets curious about how things work
                    and then wants to figure them out for myself. I enjoy building
                    little projects, experimenting with different ideas, and occasionally
                    spending way too long trying to fix something that should have worked
                    the first time. For now, I’m enjoying the process of making things,
                    breaking things, and getting a little better with every project.

                    Outside of that, I like getting lost in a good story. Whether it’s a book,
                    a movie, or anything that pulls me into its world, I’ve always enjoyed
                    stories that give me something to think about long after they’re over.

                </p>

            </div>

        </section>

    );

}

export default About;