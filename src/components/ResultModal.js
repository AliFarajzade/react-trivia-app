import React from 'react';

import ChangeQuestionButton from './changeQuestion.component';

export default function ResultModal({
    changeQuestion,
    lastQuestionStatus,
    correctAnswer,
}) {
    return (
        <div className="result-modal">
            <div className="overlay" />
            <div className="result-modal-content">
                {lastQuestionStatus ? (
                    <h3>
                        <span role="img" aria-label="Correct Answer">
                            👊👊👊
                        </span>
                        <br />
                        YOU WON!
                    </h3>
                ) : (
                    <>
                        <h3>
                            <span role="img" aria-label="Wrong Answer">
                                😟😢😟
                            </span>
                            <br />
                            YOU LOST!
                        </h3>

                        <div className="correct-answer">
                            <small>The correct answer was:</small>
                            <br />
                            <strong>{correctAnswer}</strong>
                        </div>
                    </>
                )}

                <ChangeQuestionButton changeQuestion={changeQuestion} />
            </div>
        </div>
    );
}
