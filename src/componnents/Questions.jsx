import { useEffect, useState } from 'react'
import axios from 'axios'
import { useTriviaStore, useIndex, useFinish } from './store/zuStand';
import Answers from './Answers';
import style from "./style.module.css"
import { useColorStore } from './store/zuStand';
import Summary from './Summary';
export default function Questions() {
    const [load, setLoad] = useState(false);

    const isFinish = useFinish((state) => state.isFinish);


    const color = useColorStore((state) => state.color);
    const indexQuestions = useIndex ((state) => state.indexQuestions);

    const setTrivia = useTriviaStore((state) => state.setTrivia);
    const questions = useTriviaStore((state) => state.questions);
    const answers = useTriviaStore((state) => state.answers);

    useEffect(() => {
            setTrivia(); 
        }, []);

    useEffect(() => {
    console.log({indexQuestions});
         },[indexQuestions])
         
    return         (
         !isFinish?     <main className={`flex flex-wrap justify-center items-center ${style.animate} `}>
    {questions[indexQuestions] &&
        <div
            className={` font-bold bg-slate-100 px-2 text-center flex flex-col justify-around items-center border-slate-700 border-t-8 text-yellow-400 p-3 m-12 
        sm:w-full sm:min-w-3.5 md:w-1/2 lg:w-1/3 xl:w-1/4 
        sm:h-auto md:h-96 lg:h-96 xl:h-96 ${style.grow}`}
            style={{ color: color }}
        >
            <h1>{questions[indexQuestions]}</h1>
            <Answers answers={answers[indexQuestions]} index={0} color={color}/>
        </div>
        }
    </main>: <Summary/>
    )
    }

    // <main className={`flex flex-wrap justify-center items-center ${style.animate}`}>
    //     {questions &&
    //         questions.map((question, index) => {
    //             return (
    //                 <div
    //                     key={index}
    //                     className="font-bold bg-slate-100 px-2 text-center flex flex-col justify-around items-center border-slate-700 border-t-8 text-yellow-400 p-3 m-3 
    //             sm:w-full sm:min-w-3.5  md:w-1/2 lg:w-1/3 xl:w-1/4 
    //             sm:h-auto md:h-96 lg:h-96 xl:h-96"
    //                     style={{ color: color }}
    //                 >
    //                     <h1>{question}</h1>
    //                     <Answers answers={answers[index]} index={index} />
    //                 </div>
    //             );
    //         })}
    // </main>