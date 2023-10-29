import React, { useState } from 'react'
import { QuizData } from './Quizdata'
import QuizResult from './QuizResult'


const Qiuz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clickedOpetion, setClickedOption] = useState(0)
    const [toggle, setToggle] = useState(false)
    const [showResult, setShowResult] = useState(false)

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }

        setClickedOption(0)
    }
    const updateScore = () => {
        if (clickedOpetion === QuizData[currentQuestion].answer) {
            setScore(score + 1)
        }
    }

    const result = () => {
        setShowResult(true);

    }

    const funtryagain=()=>{
        setCurrentQuestion(0)
        setScore(0)
        setClickedOption(0)
        setShowResult(false)
    }
    return (
        <div className='h-screen w-screen  bg-black flex justify-center items-center'>
            <div className='h-[90%] w-[50%] p-5 space-y-5 '>
                {
                    showResult ? (<QuizResult score={score} TotalScore={QuizData.length} tryAgan={funtryagain} />) : (
                        <>

                            <div className='h-[15%] w-full bg-orange-200 text-center flex justify-center items-center gap-3 text-xl font-bold'>

                                {<>
                                    <span>
                                        {currentQuestion + 1}.
                                    </span>

                                    <span>
                                        {
                                            QuizData[currentQuestion].question
                                        }
                                    </span>
                                </>}

                            </div>
                            {
                                QuizData[currentQuestion].options.map((options, i) => {
                                    return (
                                        <div key={i} className={`h-[10%] w-full text-lg font font-semibold  rounded-xl flex justify-center items-center hover:bg-orange-200 hover:text-black ${clickedOpetion == i + 1 ? 'bg-orange-600' : 'bg-yellow-100'} `}>

                                            <button className='h-[10%] w-full' onClick={
                                                () => { setClickedOption(i + 1); setToggle(true); }
                                            }>

                                                {options}
                                            </button>
                                        </div>


                                    )
                                })
                            }
                            <div className='flex items-center justify-center font-bold'>
                                {
                                    currentQuestion < QuizData.length - 1 ? <button className='text-white h-14 rounded-md w-full bg-orange-600' onClick={changeQuestion}>NEXT</button>
                                        : <button className='text-white h-14 w-full bg-orange-600 rounded-md' onClick={result} >SUBMIT</button>
                                }

                            </div>
                        </>
                    )}
            </div>

        </div>
    )
}

export default Qiuz
