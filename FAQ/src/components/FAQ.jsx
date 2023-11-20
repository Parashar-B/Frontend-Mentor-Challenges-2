import data from '../assets/data.json'
import Accordion from "./Accordion";

export default function FAQ(){

    return(
        <div className="w-[53%] h-[60%] bg-white rounded-[30px] flex items-center drop-shadow-[0_20px_15px_#1d1e35]">
            <div className="w-[50%] h-full rounded-tl-[29px] rounded-bl-[29px] relative">
                <div className="h-full overflow-hidden">
                    <img 
                        src={'/images/bg-pattern-desktop.svg'}
                        alt={'img'}
                        className="scale-[200%] translate-x-[-22rem] translate-y-[-4rem]"
                    />
                </div>
                <div className=" absolute top-[14%] z-10  overflow-hidden">
                    <img
                        src={'/images/woman-online-desktop.svg'}
                        alt={'img'}
                        className="w-[500px] translate-x-[-5.6rem]"
                    />
                </div>
                <div className="absolute top-[41%] z-40">
                    <img
                        src={'/images/box-desktop.svg'}
                        alt={'img'}
                        className="translate-x-[-5.8rem]"
                    />
                </div>
            </div>
            <div className="w-[50%] h-[90%] py-[1rem]">
                <div className="h-[20%] flex items-center">
                    <h1 className="text-[2.2rem] font-bold text-[#1d1e35]">FAQ</h1>
                </div>
                <div className="h-[80%] py-[1rem] pr-[8rem]">
                    {
                        data.map((item, index)=>{
                            return <Accordion key={index} qaObj={item}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}