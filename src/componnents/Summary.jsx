import React from 'react'
import { useFinish, useTriviaStore } from './store/zuStand';

export default function Summary({ inCorrect }) {
    const isCorrects = useTriviaStore((state) => state.isCorrects); //the number's answer that was right
    const lenghQuestions = useTriviaStore((state) => state.lenghQuestions); //the number's answer that was right
    const setTrivia = useTriviaStore((state) => state.setTrivia);
    const setIsFinish = useFinish((state) => state.setIsFinish);

    const restart = () => {
        setTrivia();
        setIsFinish();
    }
    return (
        <main className={`flex flex-wrap justify-center items-center `}>
            <div
                className="font-bold bg-slate-100 px-2 text-center flex flex-col justify-around items-center border-slate-700 border-t-8 text-yellow-400 p-3 m-3 
        sm:w-full sm:min-w-3.5 md:w-1/2 lg:w-1/3 xl:w-1/4 
        sm:h-auto md:h-96 lg:h-96 xl:h-96"
            >
                Your correct answers is:{isCorrects} <br />
                and Your incorrect answers is: {lenghQuestions - isCorrects}
                <div className="cursor-pointer bg-slate-700 w-5/6 hover:bg-slate-500 text-yellow-400 m-1 min-w-1/2 
                flex justify-center items-center font-medium py-2 px-4 rounded"
                    onClick={() => restart()}>Play Again ?</div>

            </div>

        </main>
    )
}
