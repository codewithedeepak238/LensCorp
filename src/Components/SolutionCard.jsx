

export const SolutionCard = ({ele}) => {
  return (
    <div className={`solution-card hover:bg-transparent hover:border-${ele.br} hover:border-[1px] z-40 bg-white relative text-left py-[10%] px-[8%] h-[100%] rounded-[20px] m-[0.5rem]`}>
        <div className="flex flex-col justify-between h-[100%] w-[100%]">
            <h3 className="text-[27px] font-[600]">{ele.heading}</h3>
            <div className="flex items-center justify-center">
                <img className="w-[138px] h-[138px] object-contain postion-center mt-[5%] mb-[5%]" src={ele.img} alt={ele.heading}/>
            </div>
            <p className="text-gray-500">{ele.desc}</p>
        </div>
    </div>
  )
}
