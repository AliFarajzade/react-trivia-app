import React from 'react';

const ChangeQuestionButton = ({ changeQuestion }) => {
    return (
        <button onClick={changeQuestion}>
            Go to next question{' '}
            <span role="img" aria-label="Next Question">
                👉
            </span>
        </button>
    );
};

export default ChangeQuestionButton;
