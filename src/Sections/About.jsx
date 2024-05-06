import { AboutCard } from "../Components"

export const About = () => {
  return (
    <div className="about-section py-[5%] bg-[#fcfbf7;]">
        <div className="flex flex-col items-center">
            <h1 className="text-[54px] font-[600]">About Us</h1>
            <div className="underline mb-[5%]"></div>
            <AboutCard/>
        </div>
    </div>
  )
}
