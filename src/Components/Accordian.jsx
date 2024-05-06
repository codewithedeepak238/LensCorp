import { AccordianCard } from "./AccordianCard"
const data = [
    {
        ques: "Do I need to sign a contract?",
        ans: "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions.After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract."
    },
    {
        ques: "How do we ensure quality of deliverables?",
        ans: "We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks."
    },
    {
        ques: "How do I begin collobration?",
        ans: "Please contact us at solutions@lenscorp.ai. We usually respond within 24 Hrs."
    },
]
const data2 = [
    {
        ques: "What services do we offer?",
        ans: "We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you."
    },
    {
        ques: "How do you ensure your privacy?",
        ans: "We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy."
    },
    {
        ques: "How can I pay for the services?",
        ans: "We split the entire project into multiple milestones.We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime."
    }
]

export const Accordian = () => {
    return (
        <div className="grid grid-cols-2 w-[100%]">
            <div className="flex flex-col text-left">
                {
                    data.map((ele, i) => <AccordianCard ele={ele} key={i}/>)
                }
            </div>
            <div className="flex flex-col text-left">
                {
                    data2.map((ele, i) => <AccordianCard ele={ele} key={i}/>)
                }
            </div>
        </div>
    )
}
