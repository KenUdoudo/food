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
        <div className="bg-[#E9E9E9] px-[20px] py-[10px] flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-[6px]">
                <IoFastFood className="text-[#F7941D]" />
                <p className="text-[18px] font-semibold">FOOD</p>
            </div>
            <div className="flex flex-row items-center gap-[6px]">
                <FiShoppingCart />
                <button onClick={toggleMenu}><HiOutlineMenu className="h-[25px] w-[25px]"/></button>
            </div>
            <div className={isOpen ? "flex flex-col w-[200px] justify-center items-center md:w-auto gap-[10px] absolute right-0 top-[45px] py-[20px] bg-[#E9E9E9] transition-all duration-300 transform origin-top" : "hidden md:flex md:items-center md:w-auto w-full"}>
                <a href="#" className="text-[13px]">Home</a>
                <a href="#" className="text-[13px]">About Us</a>
                <a href="#" className="text-[13px]">Products</a>
                <a href="#" className="text-[13px]">Contact Us</a>
                <div className="flex flex-row items-center space-x-[10px]">
                    <div className="bg-[#F7941D] rounded-full p-[5px]"><FaTelegramPlane className="text-white" /></div>
                    <div className="bg-[#F7941D] rounded-full p-[5px]"><RiInstagramFill className="text-white"/></div>
                    <div className="bg-[#F7941D] rounded-full p-[5px]"><FaTwitter className="text-white"/></div>
                    <div className="bg-[#F7941D] rounded-full p-[5px]"><FaFacebook className="text-white"/></div>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;