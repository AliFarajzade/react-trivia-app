import React from 'react';

import shuffle from 'lodash.shuffle';

export default function Question({ validateAnswer, questionObject }) {
    const decodeHtml = htmlStr => {
        var txt = document.createElement('textarea');
        txt.innerHTML = htmlStr;
        return txt.innerHTML;
    };

    const shuffledAnswers = shuffle([
        ...questionObject.incorrect_answers,
        questionObject.correct_answer,
    ]);

    return (
        <div className="question">
            <h2>{decodeHtml(questionObject.question)}</h2>

            {shuffledAnswers.map((answer, index) => {
                const decodedAnswer = decodeHtml(answer);
                return (
                    <button
                        onClick={() => validateAnswer(decodedAnswer)}
                        key={index}
                    >
                        {decodedAnswer}
                    </button>
                );
            })}
        </div>
    );
}
