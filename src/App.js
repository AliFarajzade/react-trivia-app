import React, { useState } from 'react';
import Question from './components/Question';
import CategorySelector from './components/CategorySelector';
import ResultModal from './components/ResultModal';
import Scoreboard from './components/Scoreboard';

import useFetchData from './components/useFetchData';

import ChangeQuestionButton from './components/changeQuestion.component';

import Loader from './components/Loader';

import './App.css';

export default function App() {
    const [questionTypeID, setQuestionTypeID] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);

    const [rightAnswers, setRightAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);

    const [isPlaying, setIsPlaying] = useState(true);

    const [lastQuestionStatus, setLastQuestionStatus] = useState(null);

    const changeQuestionType = childData => {
        setQuestionTypeID(childData);
    };

    const { data, isLoading, error } = useFetchData(
        `${
            questionTypeID === null
                ? `https://opentdb.com/api.php?amount=1`
                : `https://opentdb.com/api.php?amount=1&category=${questionTypeID}`
        }`,
        questionNumber
    );

    const changeQuestion = () => {
        setQuestionNumber(prevState => prevState + 1);
        setIsPlaying(true);
    };

    const validateAnswer = childData => {
        if (childData === data.correct_answer) {
            setRightAnswers(prevState => prevState + 1);
            setLastQuestionStatus(true);
        } else {
            setWrongAnswers(prevState => prevState + 1);
            setLastQuestionStatus(false);
        }

        setIsPlaying(false);
    };

    return (
        <div className="app">
            {/* show the result modal ----------------------- */}
            {!isPlaying && (
                <ResultModal
                    lastQuestionStatus={lastQuestionStatus}
                    changeQuestion={changeQuestion}
                    correctAnswer={data.correct_answer}
                />
            )}

            {/* question header ----------------------- */}
            <div className="question-header">
                <CategorySelector changeQuestionType={changeQuestionType} />
                <Scoreboard
                    rightAnswers={rightAnswers}
                    wrongAnswers={wrongAnswers}
                />
            </div>

            {/* the question itself ----------------------- */}

            {isLoading ? (
                <div className="question-main">
                    <Loader />
                </div>
            ) : (
                <div className="question-main">
                    {error && <h3>{error}</h3>}
                    {data && (
                        <Question
                            validateAnswer={validateAnswer}
                            questionObject={data}
                        />
                    )}
                </div>
            )}

            {/* question footer ----------------------- */}
            <div className="question-footer">
                <ChangeQuestionButton changeQuestion={changeQuestion} />
            </div>
        </div>
    );
}
