import { HiOutlineMenu } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { IoFastFood } from "react-icons/io5";
import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (  
        <div className="bg-[#E9E9E9] px-[20px] py-[10px] flex flex-row justify-between items-center font-monts">
            <div className="flex flex-row items-center gap-[6px]">
                <IoFastFood className="text-[#F7941D]" />
                <p className="text-[18px] font-semibold">FOOD</p>
            </div>
            <div className="flex flex-row items-center gap-[6px] md:hidden">
                <FiShoppingCart />
                <button onClick={toggleMenu}><HiOutlineMenu className="h-[25px] w-[25px]"/></button>
            </div>
            <div className={isOpen ? "flex flex-col w-[200px] justify-center items-center md:w-auto gap-[10px] absolute right-0 top-[45px] py-[20px] bg-[#E9E9E9] transition-all duration-300 transform origin-top" : "hidden md:flex md:items-center md:w-auto w-full"}>
                <a href="#" className="text-[13px] md:hidden">Home</a>
                <a href="#" className="text-[13px] md:hidden">About Us</a>
                <a href="#" className="text-[13px] md:hidden">Products</a>
                <a href="#" className="text-[13px] md:hidden">Contact Us</a>
                <div className="flex flex-row items-center space-x-[10px] md:hidden">
                    <div className="bg-[#F7941D] rounded-full p-[5px]"><FaTelegramPlane className="text-white" /></div>
                    <div className="bg-[#F7941D] rounded-full p-[5px]"><RiInstagramFill className="text-white"/></div>
                    <div className="bg-[#F7941D] rounded-full p-[5px]"><FaTwitter className="text-white"/></div>
                    <div className="bg-[#F7941D] rounded-full p-[5px]"><FaFacebook className="text-white"/></div>
                </div>
            </div>

            <div className="hidden md:flex flex-row justify-center items-center gap-x-[20px]">
                <a href="#" className="text-[13px] text-gray-500 hover:border-b-[2px] hover:border-[#F7941D] hover:text-black hover:pb-[8px] transition-all duration-300">Home</a>
                <a href="#" className="text-[13px] text-gray-500 hover:border-b-[2px] hover:border-[#F7941D] hover:text-black hover:pb-[8px] transition-all duration-300">About Us</a>
                <a href="#" className="text-[13px] text-gray-500 hover:border-b-[2px] hover:border-[#F7941D] hover:text-black hover:pb-[8px] transition-all duration-300">Products</a>
                <a href="#" className="text-[13px] text-gray-500 hover:border-b-[2px] hover:border-[#F7941D] hover:text-black hover:pb-[8px] transition-all duration-300">Contact Us</a>
            </div>

            <div className="md:flex flex-row items-center gap-[14px] hidden">
                <FiShoppingCart />
                <p className="bg-[#F7941D] px-[20px] py-[10px] rounded-full text-[14px] text-white cursor-pointer">Contact Us</p>
            </div>
        </div>
    );
}
 
export default Navbar;