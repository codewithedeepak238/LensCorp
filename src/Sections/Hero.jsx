import { Link } from "react-router-dom"
import backgroud from "../assets/background_main.webp"

export const Hero = () => {
    return (
        <div className="w-[100%] h-[100vh] hero-section relative">
            <div className="w-[100%] h-[100%]">
                <img className="w-[100%] h-[100%] object-fit object-cover" src={backgroud} alt="" />
            </div>
            <div className="absolute w-[30rem] floating-text">
                <h1 className="text-[64px] font-[600] leading-[70px]">We are at the<br/> forefront of AI</h1>
                <p className="text-xl font-[500] pt-[7%]">From Conserving Wildlife to Automatically Generating Caricatures– <span className="font-[700]">We Do It All</span></p>
                <button className="button-1 mt-[6%] px-[6%] py-[2%] font-[500] hover:px-[7%] hover:bg-white hover:text-black border-[1px] border-black bg-black text-white text-[21px] rounded-[9px]">Learn More</button>
            </div>
        </div>
    )
}
