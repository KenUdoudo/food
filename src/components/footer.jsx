import { IoFastFood } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="px-[20px] py-[10px] mt-[40px] bg-black flex flex-row justify-between font-monts">
                <div className="flex flex-row items-center gap-[6px]">
                    <IoFastFood className="text-[#F7941D]" />
                    <p className="text-[18px] text-white font-semibold">FOOD</p>
                </div>
                <div className="hidden md:flex flex-row justify-center items-center gap-x-[20px]">
                    <a href="#" className="text-[13px] text-gray-500">Home</a>
                    <a href="#" className="text-[13px] text-gray-500">About Us</a>
                    <a href="#" className="text-[13px] text-gray-500">Products</a>
                    <a href="#" className="text-[13px] text-gray-500">Contact Us</a>
                </div>
                <div className="flex flex-row items-center space-x-[6px]">
                    <div className="bg-[#F7941D] rounded-full p-[5px]"><FaTelegramPlane className="text-white" /></div>
                    <div className="bg-[#F7941D] rounded-full p-[5px]"><RiInstagramFill className="text-white"/></div>
                    <div className="bg-[#F7941D] rounded-full p-[5px]"><FaTwitter className="text-white"/></div>
                    <div className="bg-[#F7941D] rounded-full p-[5px]"><FaFacebook className="text-white"/></div>
                </div>
        </div>
    );
}
 
export default Footer;