import '../styles/SystemTest.css';

function SystemTest({
    visibleSections,
    secondMousePosition,
    currentFinalMessage,
    finalMessageIndex,
    gameState,
    gameMessage,
    targetPosition,
    reactionTime,
    startGame,
    handleTargetClick
}) {

    return (

        <section
            id="reaction"
            className={`
                os-screen
                content-screen
                reaction-screen
                ${
                    visibleSections.includes('reaction')
                        ? 'section-visible'
                        : ''
                }
            `}
        >

            <div className="section-number">
                05 // YOU'RE STILL HERE?
            </div>


            {/* SECOND HOLOGRAM */}

            <div className="second-hologram-area">

                <div
                    className="second-hologram"
                    style={{
                        transform: `
                            translate3d(
                                ${secondMousePosition.x * 85}px,
                                ${secondMousePosition.y * 50}px,
                                0
                            )
                            rotateY(${secondMousePosition.x * 9}deg)
                            rotateX(${-secondMousePosition.y * 5}deg)
                        `
                    }}
                >

                    {/* SMALL PINK BOW */}

                    <div className="robot-bow">

                        <div className="bow-left"></div>

                        <div className="bow-right"></div>

                        <div className="bow-center"></div>

                    </div>


                    {/* HEAD */}

                    <div className="robot-head">

                        {/* BLUSH */}

                        <div className="robot-blush left-blush"></div>

                        <div className="robot-blush right-blush"></div>


                        {/* EYES */}

                        <div
                            className="robot-eye left-eye"
                            style={{
                                transform: `
                                    translate(
                                        ${secondMousePosition.x * 7}px,
                                        ${secondMousePosition.y * 4}px
                                    )
                                `
                            }}
                        ></div>


                        <div
                            className="robot-eye right-eye"
                            style={{
                                transform: `
                                    translate(
                                        ${secondMousePosition.x * 7}px,
                                        ${secondMousePosition.y * 4}px
                                    )
                                `
                            }}
                        ></div>

                    </div>


                    {/* BODY */}

                    <div className="robot-body">

                        <div className="robot-core"></div>

                        <div className="robot-line line-one"></div>

                        <div className="robot-line line-two"></div>

                    </div>


                    {/* SKIRT */}

                    <div className="robot-skirt">

                        <div></div>

                        <div></div>

                        <div></div>

                    </div>


                    <div className="robot-base"></div>

                    <div className="hologram-ring"></div>

                </div>


                {/* SECOND MESSAGE BOX */}

                <div className="robot-message second-message">

                    <div className="message-header">
                        AUXILIARY // CORE
                    </div>


                    <div className="message-status">

                        <span></span>

                        ONLINE

                    </div>


                    <div className="message-line"></div>


                    <div className="message-label">
                        {currentFinalMessage.label}
                    </div>


                    <div
                        key={finalMessageIndex}
                        className="message-text"
                    >
                        {currentFinalMessage.text}
                    </div>


                    <div className="message-cursor">
                        _
                    </div>

                </div>

            </div>


            {/* REACTION TEST */}

            <div className="reaction-panel">

                <div className="reaction-header">

                    <span>
                        AYOS // REACTION DIAGNOSTIC
                    </span>

                    <span>
                        MODULE 04
                    </span>

                </div>


                <div className="reaction-content">

                    <div className="reaction-status">
                        {gameMessage}
                    </div>


                    <div className="reaction-box">


                        {/* START */}

                        {gameState === 'idle' && (

                            <button
                                className="reaction-start"
                                onClick={startGame}
                            >
                                INITIALIZE TEST
                            </button>

                        )}


                        {/* WAITING */}

                        {gameState === 'waiting' && (

                            <div className="waiting-message">

                                <span>
                                    WAITING
                                </span>

                                <div className="loading-dots">
                                    . . .
                                </div>

                            </div>

                        )}


                        {/* TARGET */}

                        {gameState === 'ready' && (

                            <button
                                className="reaction-target"
                                onClick={handleTargetClick}
                                style={{
                                    left:
                                        `${targetPosition.x}%`,

                                    top:
                                        `${targetPosition.y}%`
                                }}
                            >
                                +
                            </button>

                        )}


                        {/* RESULT */}

                        {gameState === 'finished' && (

                            <div className="reaction-result">

                                <div className="result-label">
                                    REACTION TIME
                                </div>


                                <div className="result-time">
                                    {reactionTime} MS
                                </div>


                                <div className="result-status">
                                    RESPONSE RECORDED
                                </div>


                                <button
                                    className="reaction-start"
                                    onClick={startGame}
                                >
                                    RETRY
                                </button>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </section>

    );

}

export default SystemTest;