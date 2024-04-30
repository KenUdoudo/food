import spag from '../assets/Subject.png';
import orange from '../assets/Subject(1).png';
const Welcome = () => {
    return (  
        <div className="px-[20px] lg:px-[50px] mt-[40px] font-monts lg:flex flex-row lg:justify-center lg:items-center lg:gap-[100px]">
            <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-left space-y-[14px] lg:w-[60%]">
                <p className="text-[13px] text-[#F7941D] bg-[#FFD4A1] p-[5px] rounded-[5px]">WELCOME TO OUR RESTAURANT</p>
                <p className="text-[35px] lg:text-[50px] font-bold">Delicious Foods <br />For Every Occasion <br />And Festival</p>
                <p className="text-[16px] text-gray-500">Delicious foods for every occasion and festival Delicious foods <br /> for every occasion and festival</p>
                <p className="bg-[#F7941D] px-[20px] py-[10px] rounded-full text-[14px] text-white font-semibold cursor-pointer">Order Now</p>
            </div>
            <div className='hidden lg:block lg:w-[40%] relative'>
            <img src={ spag } className='z-[3] top-[-80px] w-[300px]'/>
            <img src={ orange } className='absolute w-[100px] z-[-1] top-[-80px] right-[40px]'/>
            <img src={ orange } className='absolute w-[100px] bottom-[0px] left-[-90px] transform -rotate-45'/>
            </div>
        </div>
    );
}
 
export default Welcome;