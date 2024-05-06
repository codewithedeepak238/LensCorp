import { SolutionCard } from "../Components"
import { Vision } from "./Vision"
import { Blogs } from "./Blogs"
import { Questions } from "./Questions"
import { Clients } from "./Clients"
import green from "../assets/green.webp"
import blue from "../assets/blue.webp"
import red from "../assets/red.webp"
import yellow from "../assets/yellow.webp"
import { Contact } from "./Contact"
const data = [
    {
        img: green,
        heading: "Exclusive Rights",
        desc: "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.",
        clname: "green_box",
        br: "emerald-500"
    },
    {
        img: blue,
        heading: "Research Drivens",
        desc: "We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.",
        clname: "blue_box",
        br:"sky-500"
    },
    {
        img: red,
        heading: "Plug-and-Play",
        desc: "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.",
        clname: "red_box",
        br: "rose-500"
    },
    {
        img: yellow,
        heading: "Lifetime Support",
        desc: "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.",
        clname: "yellow_box",
        br:"amber-500"
    },
]

export const Solution = () => {
    return (
        <div className="overflow-hidden service-section bg-[#fcfbf7]">
            <div className="flex flex-col items-center text-center">
                <h2 className="font-[500] text-2xl">WHY CHOOSE LENS</h2>
                <div className="underline-2 mb-[4%]"></div>
                <p className="text-[3.6rem] mb-[2%] px-[20%] ">AI-driven solutions backed by science</p>
                <p className="text-gray-500 text-[20px] mb-[2%] px-[20%]">Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.</p>
                <div className="flex mb-[5%] text-[18px] items-center justify-between gap-[70px] text-[17px]">
                    <div className="text-left">
                        <div className="my-[5px]"><i class="fa-solid fa-check pr-[5px]"></i> State-of-the-art solutions</div>
                        <div className="my-[5px]"><i class="fa-solid fa-check pr-[5px]"></i> Fast & Efficient</div>
                        <div className="my-[5px]"><i class="fa-solid fa-check pr-[5px]"></i> No extra computation fee</div>
                        <div className="my-[5px]"><i class="fa-solid fa-check pr-[5px]"></i> No licensing fee</div>
                    </div>
                    <div className="text-left">
                        <div className="my-[5px]"><i class="fa-solid fa-check pr-[5px]"></i> Lifetime support & upgrades</div>
                        <div className="my-[5px]"><i class="fa-solid fa-check pr-[5px]"></i> Plug-and-Play</div>
                        <div className="my-[5px]"><i class="fa-solid fa-check pr-[5px]"></i> 24x7 Progress Monitoring</div>
                        <div className="my-[5px]"><i class="fa-solid fa-check pr-[5px]"></i> Incremental Updates</div>
                    </div>
                </div>
                <div className="flex px-[5%]">
                    {data.map((ele, i)=>{return <div className="relative h-[435px] w-[354px]">
                        <div className={`${ele.clname} z-0`}></div>
                        <SolutionCard ele={ele} key={i} />
                        </div>})}
                </div>
            </div>
            <div>
                <Vision/>
                <Blogs/>
                <Clients/>
                <Questions/>
                <Contact/>
            </div>
        </div>
    )
}
