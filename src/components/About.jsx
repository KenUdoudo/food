import { FaAward } from "react-icons/fa6";
import { GiKnifeFork } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import spag from '../assets/Subject.png';
const About = () => {
    return (  
        <div className="mt-[20px] px-[20px] flex flex-col justify-center items-center font-monts">
            <img src={ spag } className='z-[-10] top-[-80px] w-[170px] md:w-[210px] lg:hidden'/>
            <p className="text-center text-[35px] font-bold">About The Company</p>
            <div className="flex flex-col md:flex-row gap-[30px] md:gap-[10px] mt-[20px]">
                <div className="flex flex-col justify-center items-center space-y-[10px]">
                    <div className="bg-[#FFD4A1] rounded-full p-[15px]"><FaAward className="text-[#F7941D] h-[45px] w-[45px]"/></div>
                    <p className="text-[17px] font-semibold">More Than 10 Years</p>
                    <p className="text-center text-[13px] px-[30px] text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores magni molestiae accusantium, vel tempora deleniti eos dolorem doloremque illo atque dolor nemo distinctio reiciendis? Fuga odit assumenda ipsum? Eveniet, in.</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-[10px]">
                    <div className="bg-[#FFD4A1] rounded-full p-[15px]"><GiKnifeFork className="text-[#F7941D] h-[45px] w-[45px]"/></div>
                    <p className="text-[17px] font-semibold">Cutting-Edge infrastructure</p>
                    <p className="text-center text-[13px] px-[30px] text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores magni molestiae accusantium, vel tempora deleniti eos dolorem doloremque illo atque dolor nemo distinctio reiciendis? Fuga odit assumenda ipsum? Eveniet, in.</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-[10px]">
                    <div className="bg-[#FFD4A1] rounded-full p-[15px] text-gray-500"><MdFastfood className="text-[#F7941D] h-[45px] w-[45px]"/></div>
                    <p className="text-[17px] font-semibold text-center">Discover Our Acclaimed Products</p>
                    <p className="text-center text-[13px] px-[30px] text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores magni molestiae accusantium, vel tempora deleniti eos dolorem doloremque illo atque dolor nemo distinctio reiciendis? Fuga odit assumenda ipsum? Eveniet, in.</p>
                </div>
            </div>
            <p className="bg-[#F7941D] px-[20px] py-[10px] rounded-full text-[14px] text-white font-semibold cursor-pointer mt-[30px]">Read More</p>
        </div>
    );
}
 
export default About;