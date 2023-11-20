import { useState } from 'react'
import data from '../assets/data.json'

export default function Accordion(props){
    const [showAnswer, setShowAnswer] = useState(false);

    return(
        <div className="bg-white py-[0.8rem] border-b-[1px] border-slate-200 pr-[1rem] cursor-pointer"
            onClick={()=>{
                setShowAnswer(!showAnswer);
            }}
        >
            <div className='flex justify-between items-center py-[0.2rem] hover:text-[#f47c57] text-[#1d1e35]'>
                <h1 className={`${showAnswer ? 'font-bold' : 'font-normal'} text-[0.9rem]`}>{props.qaObj.question}</h1>
                <div className=' flex items-center justify-center'>
                    <img
                        src={'/images/down-arrow.svg'}
                        alt={'img'}
                        className={`${showAnswer? 'rotate-180':'rotate-0'}`}
                    />
                </div>
            </div>
            {
                showAnswer ?  
                <div className='py-[0.4rem]'>
                    <p className='text-[0.8rem] text-slate-500'>
                        {props.qaObj.answer}
                    </p>
                </div>
                : 
                <div>
                </div>
            }
        </div>
    )
}