import img1 from "../assets/aboutLatest.webp"

export const AboutCard = () => {
  return (
    <div className="hover:scale-105 flex bg-[#e2f2ff] p-[3%] about-card rounded-[9px] w-[80vw] h-[65vh]">
        <div className="py-[4%]">
            <h2 className="text-5xl font-[500]">Welcome To LENS</h2>
            <p className="text-gray-500 pt-[6%] pr-[23%]">We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.</p>
            <button className="button-1 mt-[8%] px-[3%] py-[1.5%] font-[500] hover:px-[4%] hover:bg-black hover:text-white border-[1px] border-black bg-transparent text-black text-[18px] rounded-[9px] flex justify-center items-center gap-[15px]">Learn More <i class="fa-solid fa-arrow-right text-[12px] hidden arrow"></i></button>
        </div>
        <div className="w-[50vw] border-[10px] border-white rounded-[8px] abt-img">
            <img className="object-cover object-center w-[100%] h-[100%] rounded-[6px]" src={img1} alt="" />
        </div>
    </div>
  )
}
