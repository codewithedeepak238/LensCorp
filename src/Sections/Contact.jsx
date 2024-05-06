import map from "../assets/map.webp"

export const Contact = () => {
  return (
    <div className="flex items-center justify-between">
        <div className="contact-box-1">
            <h2 className="text-7xl font-[600] mb-[7%] contact-heading">Get in touch with us</h2>
            <p className="text-l mb-[6%]">Send your enquiry now!</p>
            <div className="flex justify-between bg-[#ededed] pl-[5%] pr-[1%] py-[1%] rounded-[50px] w-[80%]">
                <input type="email" placeholder="Enter email address" className="bg-transparent text-[14px]" required/>
                <button type="submit" className="rounded-[50px] bg-[#272e5c] text-white h-[100%] py-[2%] px-[5%]">Request Demo</button>
            </div>
        </div>
        <div className="contact-box-2">
            <img src={map} alt="location map"/>
        </div>
    </div>
  )
}
