import React, { useState } from 'react';
import { useFinish, useIndex, useIndexCorrect, useTriviaStore } from './store/zuStand';
import { useColorStore } from './store/zuStand';
import Summary from './Summary';
import Answer from './Answer';

export default function Answers({ answers, index,color }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const setIsFinish = useFinish((state) => state.setIsFinish);

  const correctAnswers = useTriviaStore((state) => state.correctAnswers);
  const isCorrects = useTriviaStore((state) => state.isCorrects);
  const setIsCorrects = useTriviaStore((state) => state.setIsCorrects);
  const indexQ = useIndex((state) => state.indexQuestions);
  const setIndex = useIndex((state) => state.setIndex);

  const checkAnswers = (answer, correctAnswer) => {
    if (correctAnswer === answer) {
      setIsCorrects(isCorrects + 1);
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  function pauseForOneSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }

  const checkIndex = (indexQ) => {
    if (indexQ + 1 < 10) setIndex(indexQ + 1);
    else {
      setIsFinish();
      setIndex(0);
    }
  };

  return (
    <div>
      {answers.map((answer, i) => (
        <div
          key={i}
          onClick={async () => {
            setSelectedAnswer(answer);
            await pauseForOneSecond();
            checkAnswers(answer, correctAnswers[indexQ]);
            checkIndex(indexQ);
          }}
        >
          <Answer
            answer={answer}
            correctAnswer={correctAnswers[indexQ]}
            selectedAnswer={selectedAnswer}
            isAnswerCorrect={isAnswerCorrect}
            color={color}
          />
        </div>
      ))}
    </div>
  );
}
