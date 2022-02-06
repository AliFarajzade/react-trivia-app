import React from 'react';

export default function Scoreboard({ rightAnswers, wrongAnswers }) {
    return (
        <div className="scoreboard">
            <div className="wrong">
                <strong>{wrongAnswers}</strong>
                <span>wrong</span>
            </div>
            <div className="correct">
                <strong>{rightAnswers}</strong>
                <span>correct</span>
            </div>
        </div>
    );
}
