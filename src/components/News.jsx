import chicken from '../assets/firstfood.png';
import stakee from '../assets/stake.png';
import sushi from '../assets/sushi.png';
const News = () => {
    return (  
        <div className="px-[20px] mt-[20px] font-monts">
            <div className="flex flex-col justify-center items-center"><p className="text-[13px] text-[#F7941D] bg-[#FFD4A1] p-[5px] rounded-[5px]">LATEST BLOG</p>
            <p className="text-center text-[35px] font-bold px-[30px]">Our Latest Foods News</p></div>
            <div className="flex flex-col md:flex-row justify-evenly items-center w-full gap-y-[20px] md:gap-x-[10px] md:mt-[20px]">
                <div className='w-[60%] md:w-[33%] h-[270px] rounded-[10px] overflow-hidden relative shadow-xl'>
                    <img src={ chicken } className='object-cover mt-[-80px]'/>
                    <div className='absolute bottom-0 bg-white p-[10px]'>
                        <p className='text-[10px] text-gray-500'>Jan 15 2024</p>
                        <p className="text-[14px] font-semibold">Lorem ipsum dolor sit amet consectetur</p>
                        <hr className='py-[5px]'/>
                        <div className='flex flex-row justify-between items-center'>
                            <p className="text-[14px] font-semibold">$35.00</p>
                            <p className="bg-[#F7941D] px-[10px] py-[5px] rounded-full text-[10px] text-white font-semibold cursor-pointer">Read More</p>
                        </div>
                    </div>
                </div>
                <div className='w-[60%] md:w-[33%] h-[270px] rounded-[10px] overflow-hidden relative shadow-xl'>
                    <img src={ stakee } className='object-cover mt-[-80px]'/>
                    <div className='absolute bottom-0 bg-white p-[10px]'>
                        <p className='text-[10px] text-gray-500'>Jan 15 2024</p>
                        <p className="text-[14px] font-semibold">Lorem ipsum dolor sit amet consectetur</p>
                        <hr className='py-[5px]'/>
                        <div className='flex flex-row justify-between items-center'>
                            <p className="text-[14px] font-semibold">$25.00</p>
                            <p className="bg-[#F7941D] px-[10px] py-[5px] rounded-full text-[10px] text-white font-semibold cursor-pointer">Read More</p>
                        </div>
                    </div>
                </div>
                <div className='w-[60%] md:w-[33%] h-[270px] rounded-[10px] overflow-hidden relative shadow-xl'>
                    <img src={ sushi } className='object-cover mt-[-40px]'/>
                    <div className='absolute bottom-0 bg-white p-[10px]'>
                        <p className='text-[10px] text-gray-500'>Jan 15 2024</p>
                        <p className="text-[14px] font-semibold">Lorem ipsum dolor sit amet consectetur</p>
                        <hr className='py-[5px]'/>
                        <div className='flex flex-row justify-between items-center'>
                            <p className="text-[14px] font-semibold">$25.00</p>
                            <p className="bg-[#F7941D] px-[10px] py-[5px] rounded-full text-[10px] text-white font-semibold cursor-pointer">Read More</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}
 
export default News;