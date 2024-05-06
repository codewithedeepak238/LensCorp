import { useState } from "react"

export const AccordianCard = ({ele}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(()=>!open)
    }
  return (
    <div className="mx-[3%]">
        <div onClick={handleOpen} className="flex justify-between items-center border-[1px] border-black my-[1%] px-[4%] py-[2.5%] rounded-[10px] select-none">{ele.ques} <span class={`material-symbols-outlined ${open?"rotate-180":""} arrow`}>expand_more</span></div>
        <div className="text-gray-500 accordian my-[3%]">
          <p className={`accordian ${open?"block":"hidden"}`}>{ele.ans}</p>
        </div>
    </div>
  )
}
