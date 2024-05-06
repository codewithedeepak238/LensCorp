
export const Vision = () => {
    return (
        <div className="py-[5%] service-section bg-[#fcfbf7]">
            <div className="flex flex-col items-center text-center">
                <h2 className="font-[500] text-2xl mt-[6%]">OUR VISION</h2>
                <div className="underline-2 mb-[2%]"></div>
                <p className="text-[3.6rem] mb-[2%] px-[20%] ">AI for Social Good</p>
                <p className="text-gray-500 text-[20px] mb-[2%] px-[20%]">Explainable AI (XAI) is an emerging subject of machine learning research that refers to strategies that try to provide transparency to typically opaque AI models and their predictions.</p>
                <div className="flex flex-col justify-center items-center w-[50%]">
                    <div className="vision-card text-left">
                        <div className="main-text">
                            <h3 className="text-[27px] font-[600] mt-[15%]">Diversity & Fairness</h3>
                            <p className="text-gray-500 mt-[10%]">When training our AI models, we consider ethical and social implications of algorithm-based decision making. Our solutions use high-quality and fairly-represented data sets to eliminate human cognitive biases.</p>
                        </div>
                        <div><span class="material-symbols-outlined text-4xl border-[5px] border-gray-500 rounded-[50%] w-[55px] h-[55px] text-center text-gray-800">groups</span>
                            <span className="vertical-line"></span>
                        </div>
                    </div>
                    <div className="vision-card text-left">
                        <div></div>
                        <div><span class="material-symbols-outlined text-4xl border-[5px] border-gray-500 rounded-[50%] w-[55px] h-[55px] text-center text-gray-800">fingerprint</span>
                            <span className="vertical-line"></span>
                        </div>
                        <div className="main-text">
                            <h3 className="text-[27px] font-[600] mt-[15%]">Regulatory<br/> Compliance</h3>
                            <p className="text-gray-500 mt-[10%]">Working with clients globally, LENS acknowledges applicable data privacy regulations, such as the GDPR, HIPAA and others, in all our solutions handling sensitive data. We also ensure our algorithms allow for the required level of decision-making transparency and explainability.</p>
                        </div>
                    </div>
                    <div className="vision-card text-left">
                        <div className="main-text">
                            <h3 className="text-[27px] font-[600] mt-[15%]">Code of Ethics</h3>
                            <p className="text-gray-500 mt-[10%]">LENS believes in a just, non-violent world of equality and fairness. We prize democratic values, civil liberties and open and informed debate. When used to further these values, algorithm-based decision-making models can continue to make the world a safer, better place for everyone.</p>
                        </div>
                        <div><span class="fa-solid fa-scale-balanced text-3xl border-[5px] border-gray-500 rounded-[50%] w-[55px] h-[55px] text-center text-gray-800"></span>
                            <span className="vertical-line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
