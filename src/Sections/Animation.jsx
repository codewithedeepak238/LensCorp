import vectorai from "../assets/vectorAi.webp"
import underline from "../assets/underline2.svg"

export const Animation = () => {
  return (
    <div className="main-anima bg-[#fcfbf7] text-white text-center">
        <div className="main-anima-int">
            <div className="w-[33%] mt-[4rem]">
                <img className="ml-[5rem]" src={vectorai} alt="" />
            </div>
            <div className="w-[33%] mt-[4rem] flex flex-col justify-center items-center">
                <div className="text-6xl font-[500] flex justify-center gap-[8px]">Meet 
                <div className="flex flex-col animated-text">Tru-AI <img className="w-[170px] mt-[2%]" src={underline} alt="underline" /></div></div>
                <p className="text-2xl pt-[3%]">Design. Create. Deploy.</p>
                <p className="text-xl py-[3%]">_____ <span className="animated-text font-[500]">the Future of AI | Power to EDIT</span></p>
                <p>Based On Your Website & Traffic Trends, Tru-AI Optimises Your Website</p>
                <button className="button-1 mt-[8%] px-[4%] py-[2%] font-[500] hover:px-[5%] hover:bg-white hover:text-black border-[1px] border-white bg-transparent text-white text-[18px] rounded-[9px] flex justify-center items-center gap-[15px]">Learn More <i class="fa-solid fa-arrow-right text-[12px] hidden arrow"></i></button>
            </div>
            <div className="w-[33%] mt-[4rem] flex justify-end">
                <video autoPlay loop className="video-box">
                    <source src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    </div>
  )
}
