import { Accordian } from "../Components"

export const Questions = () => {
  return (
    <div className="py-[5%] service-section bg-[#fcfbf7]">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-[500] text-2xl">GET TO KNOW US</h2>
        <div className="underline-2 mb-[2%]"></div>
        <p className="text-[3.6rem] mb-[2%] px-[20%] ">Frequently Asked Questions</p>
        <div className="w-[85vw]">
          <Accordian/>
        </div>
      </div>
    </div>
  )
}
