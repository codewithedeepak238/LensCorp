
export const Service = () => {
  return (
    <div className="overflow-hidden service-section py-[2%] bg-[#fcfbf7;]">
        <div className="flex flex-col items-center">
            <h2 className="font-[600] text-2xl">SERVICES</h2>
            <div className="underline-2 mb-[4%]"></div>
            <p className="text-[3.6rem] mb-[5%]">We provide Artificial Intelligence Services</p>
            <div className="grid grid-cols-2 gap-[20px] relative">
                <div className="bg-main-green z-0"></div>
                <div className="w-[450px] h-[360px] px-[8%] py-[3%] rounded-[12px] service-card bg-white hover:bg-transparent hover:border-emerald-500 border-[1px] z-40">
                    <div className="flex flex-col items-between">
                        <div className="flex items-center relative">
                            <span className="text-8xl font-[500] text-slate-400/50">0</span>
                            <span className="text-8xl font-[500] text-slate-400/50 moving-text-1">1</span>
                            <div className="absolute left-[20%] text-3xl font-[600] text-emerald-500 moving-text">Biometrics</div>
                        </div>
                        <div className="mt-[12%]">
                            <p className="text-left text-[1.1rem] font-[600] text-slate-500 leading-[30px]">Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-main-blue z-0"></div>
                <div className="w-[450px] h-[360px] px-[8%] py-[3%] rounded-[12px] service-card bg-white hover:bg-transparent hover:border-sky-500 border-[1px] z-40">
                    <div className="flex flex-col items-between">
                        <div className="flex items-center relative">
                            <span className="text-8xl font-[500] text-slate-400/50">0</span>
                            <span className="text-8xl font-[500] text-slate-400/50 moving-text-2">2</span>
                            <div className="absolute left-[24%] text-3xl font-[600] text-sky-500 moving-text2">Image Analysis</div>
                        </div>
                        <div className="mt-[12%]">
                            <p className="text-left text-[1.1rem] font-[600] text-slate-500 leading-[30px]">Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-main-red z-0"></div>
                <div className="w-[450px] h-[360px] px-[8%] py-[3%] rounded-[12px] service-card bg-white hover:bg-transparent hover:border-rose-500 border-[1px] z-40">
                    <div className="flex flex-col items-between">
                        <div className="flex items-center relative">
                            <span className="text-8xl font-[500] text-slate-400/50">0</span>
                            <span className="text-8xl font-[500] text-slate-400/50 moving-text-3">3</span>
                            <div className="absolute left-[26%] top-[25%] text-3xl font-[600] text-rose-500 moving-text3">Cross-Media Translation</div>
                        </div>
                        <div className="mt-[12%]">
                            <p className="text-left text-[1.1rem] font-[600] text-slate-500 leading-[30px]">Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-main-orange z-0"></div>
                <div className="w-[450px] h-[360px] px-[8%] py-[3%] rounded-[12px] service-card bg-white hover:bg-transparent hover:border-amber-500 border-[1px] z-40">
                    <div className="flex flex-col items-between">
                        <div className="flex items-center relative">
                            <span className="text-8xl font-[500] text-slate-400/50">0</span>
                            <span className="text-8xl font-[500] text-slate-400/50 moving-text-4">4</span>
                            <div className="absolute left-[26%] top-[25%] text-3xl font-[600] text-amber-500 moving-text4">3D Modelling and Design.</div>
                        </div>
                        <div className="mt-[12%]">
                            <p className="text-left text-[1.1rem] font-[600] text-slate-500 leading-[30px]">We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
