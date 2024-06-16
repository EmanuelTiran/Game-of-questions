import React from 'react';

export default function Answer({ answer, correctAnswer, selectedAnswer, isAnswerCorrect ,color}) {
  let backgroundColor = '#334155';
  if (selectedAnswer === answer) {
    backgroundColor = isAnswerCorrect ? 'green' : 'red';
  }

  return (
    <p
      className="cursor-pointer bg-slate-700 w-5/6 hover:bg-slate-500 text-yellow-400 m-1 min-w-1/2 
      flex justify-center items-center font-medium py-2 px-4 rounded"
      style={{ backgroundColor, color: color }}
    >
      {answer}
    </p>
  );
}
