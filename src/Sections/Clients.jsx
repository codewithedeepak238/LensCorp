
export const Clients = () => {
  return (
    <div className="bg-[#272e5c] py-[4%] text-center text-white">
        <div className="flex flex-col items-center">
            <h3 className="mb-[3%] text-3xl">By the numbers</h3>
            <div className="flex">
                <div className="flex flex-col px-[100px] border-r-[2px] border-white"><span className="text-4xl font-[500] mb-[2%]">15<span className="text-sky-500 font-[300]">+</span></span> <span className="text-[18px]">Solutions for<br/> Global crises</span></div>
                <div className="flex flex-col px-[100px] border-r-[2px] border-white"><span className="text-4xl font-[500] mb-[2%]">10<span className="text-sky-500 font-[300]">+</span></span> <span className="text-[18px]">University<br/> Collaborations</span></div>
                <div className="flex flex-col px-[100px]"><span className="text-4xl font-[500] mb-[2%]">25<span className="text-sky-500 font-[300]">+</span></span> <span className="text-[18px]">Employees<br/> Worldwide</span></div>
            </div>
        </div>
    </div>
  )
}
