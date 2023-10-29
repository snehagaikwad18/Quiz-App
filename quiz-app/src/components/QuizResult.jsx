import React from 'react'
import Qiuz from './Qiuz'
const QuizResult = (props) => {
    return ( 
        <>
        <div className='w-full h-[70%] rounded-2xl bg-yellow-100 font-bold  flex justify-center items-center'>
            <div className=' text-black'>

                <h1 className='mb-[15%] text-5xl'>Your Score is : {props.score}</h1>
                <h1 className='text-5xl'>total score is: {props.TotalScore}</h1>
            </div>

           

        </div>
        <div className='flex items-center justify-center text-white'>
            <button className='w-full h-14 rounded-lg bg-orange-600 text-xl font-bold ' onClick={props.tryAgan}>TRY  AGAIN</button>
        </div>
        </>
    )
}

export default QuizResult
