
export const Blogs = () => {
    return (
        <div className="py-[5%] service-section bg-[#fcfbf7] blog-section">
            <div className="flex flex-col items-center text-center">
                <h2 className="font-[500] text-2xl">OUR BLOGS</h2>
                <div className="underline-2 mb-[2%]"></div>
                <p className="text-[3.6rem] px-[20%]">Inhouse Mindscape</p>
                <div className="blog-grid w-[70%] text-left">
                    <div className="grid-1 relative">
                        <div className="overflow-hidden blog-card blog-card-red m-[1rem] bg-white rounded-[20px] p-[5%] relative z-40">
                            <div className="floating-box">
                                <p className="text-xl text-rose-500 mb-[1.5rem]">New!</p>
                                <p className="text-[27px] mb-[1.5rem] descprtion">The Evolution of AI in Games</p>
                                <div className="px-[3%] bg-[#fff6cd] rounded-[15px] py-[8%]">
                                    <p className="text-gray-500">The integration of artificial intelligence (AI) within the gaming industry has been a remarkable journey, marked by continual innovation. Read our latest blog to dive deep into the fascinating history of AI in games and discover the evolution that continues to shape the future of play!...</p>
                                    <div className="yellow_box1 z-0"></div>
                                </div>
                            </div>
                            <p className="hidden-text hidden flex items-center text-rose-500 bottom-[5%] absolute">Read more <span class="material-symbols-outlined text-[15px]">keyboard_double_arrow_right</span></p>
                        </div>
                        <div className="overflow-hidden blog-card blog-card-blue m-[1rem] bg-white rounded-[20px] p-[5%] relative z-40">
                            <div className="floating-box">
                                <p className="text-xl text-gray-500 mb-[1.5rem]">April 18, 2024</p>
                                <p className="text-[27px] mb-[1.5rem] descprtion">Unmasking the Misconceptions of Artificial Intelligence in the Workplace</p>
                                <div className="px-[3%] bg-[#e2f2ff] rounded-[15px] py-[8%]">
                                    <p className="text-gray-500">The rise of Artificial Intelligence (AI) has sparked both excitement and apprehension. Many professionals are unsure how AI impacts their work....</p>
                                </div>
                            </div>
                            <p className="hidden-text hidden flex items-center text-rose-500 bottom-[5%] absolute">Read more <span class="material-symbols-outlined text-[15px]">keyboard_double_arrow_right</span></p>
                        </div>
                        <div className="overflow-hidden blog-card blog-card-pink m-[1rem] bg-white rounded-[20px] p-[2%] realtive z-40 grid-lg col-span-2">
                            <div className="floating-box">
                                <p className="text-xl text-gray-500 mb-[1.5rem]">April 11, 2024</p>
                                <p className="text-[27px] mb-[1.5rem] descprtion">The Rise of Deepfakes: Friend or Foe</p>
                                <div className="px-[2%] bg-[#ffeceb] rounded-[15px] py-[4%]">
                                    <p className="text-gray-500">Deepfakes are no longer science fiction. Check out our latest blog to gain a deeper understanding of this powerful technology and its far-reaching implications....</p>
                                </div>
                            </div>
                            <p className="hidden-text hidden flex items-center text-rose-500 bottom-[5%] absolute">Read more <span class="material-symbols-outlined text-[15px]">keyboard_double_arrow_right</span></p>
                        </div>
                    </div>
                </div>
                <button className="button-1 mt-[1%] px-[1%] py-[0.6%] font-[500] hover:px-[1.5%] hover:bg-black hover:text-white border-[1px] border-black bg-transparent text-black text-[18px] rounded-[9px] flex justify-center items-center gap-[15px]">Explore More <i class="fa-solid fa-arrow-right text-[12px] hidden arrow"></i></button>
            </div>
        </div>
    )
}
