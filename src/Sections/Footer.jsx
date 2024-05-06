import { Link } from "react-router-dom"
import logo from "../assets/nav_logo.webp"

export const Footer = () => {
  return (
    <div className="footer mt-[5%]">
        <div className="flex items-top justify-between px-[7%] py-[3%]">
            <div className="flex flex-col">
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <p>Tomorrow's Vision, Today!</p>
                <div className="flex justify-between text-2xl mt-[25%]">
                    <i class="fa-brands fa-facebook hover:text-sky-600 cursor-pointer"></i>
                    <i class="fa-brands fa-instagram hover:text-sky-600 cursor-pointer"></i>
                    <i class="fa-brands fa-linkedin hover:text-sky-600 cursor-pointer"></i>
                    <i class="fa-brands fa-discord hover:text-sky-600 cursor-pointer"></i>
                    <i class="fa-brands fa-x-twitter hover:text-sky-600 cursor-pointer"></i>
                </div>
            </div>
            <div className="flex flex-col footer_link">
                <h3 className="font-[500] mb-[25%] tracking-wider">SITEMAP</h3>
                <Link to="/" className="pb-[6%] text-m"><span>MakeMyWeb.</span></Link>
                <Link to="/" className="pb-[6%] text-m"><span>Sevices</span></Link>
                <Link to="/" className="pb-[6%] text-m"><span>Products</span></Link>
                <Link to="/" className="pb-[6%] text-m"><span>Blogs</span></Link>
                <Link to="/" className="pb-[6%] text-m"><span>Life at LENS</span></Link>
            </div>
            <div className="flex flex-col footer_link">
                <h3 className="font-[500] mb-[15%] tracking-wider">CONNECT</h3>
                <a href="tel:+15179300792" className="pb-[6%] text-m"><span>+1-517-9300-792</span></a>
                <a href="tel:+919990736796" className="pb-[6%] text-m"><span>+91-9990-736-796</span></a>
                <a href="mailto:solutions@lenscorp.ai" className="pb-[6%] text-m"><span>solutions@lenscorp.ai</span></a>
            </div>
        </div>
        <div className="bg-[#272e5c] flex justify-between px-[7%] py-[2.5%] text-white tracking-wide">
            <p><span className="text-gray-500">2023</span> LENS, Inc. <span className="text-gray-500">All rights reserved.</span></p>
            <p><span className="pr-[10px]">Code of conduct</span> <span>Sustainability Goals</span></p>
        </div>
    </div>
  )
}
