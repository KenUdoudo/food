import ricechicken from '../assets/Subject(6).png';
import barbchicken from '../assets/Subject(5).png';
import salad from '../assets/Subject(4).png';
import stake from '../assets/Subject(3).png';
const Popular = () => {
    return (  
        <div className="px-[20px] py-[40px] mt-[20px] bg-[#E9E9E9]">
            <p className="text-center text-[35px] font-bold">Our Popular Foods Menu</p>
            <div className="flex flex-col gap-[10px] justify-center items-center">
                <div className='w-full flex flex-row gap-[10px] items-center'>
                    <div className='flex flex-col justify-center items-center w-[50%] '>
                        <img src={ ricechicken } className='z-[1] w-[170px]'/>
                        <div className='flex flex-col justify-center items-center bg-white w-full h-[180px] relative text-center rounded-[15px] mt-[-80px] shadow-lg'>
                           <div className='absolute bottom-4'><p className="text-[17px] font-semibold">Rice/Chicken/Lime</p>
                            <p className="text-center text-[13px] px-[30px] text-gray-500">Chicken</p>
                            <p className='font-semibold'>$25</p></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[50%] '>
                        <img src={ barbchicken } className='z-[1] w-[170px]'/>
                        <div className='flex flex-col justify-center items-center bg-white w-full h-[180px] relative text-center rounded-[15px] mt-[-80px] shadow-lg'>
                           <div className='absolute bottom-4'><p className="text-[17px] font-semibold">Barbecue Chicken</p>
                            <p className="text-center text-[13px] px-[30px] text-gray-500">Chicken</p>
                            <p className='font-semibold'>$90</p></div>
                        </div>
                    </div>
                </div>


                <div className='w-full flex flex-row gap-[10px] items-center'>
                    <div className='flex flex-col justify-center items-center w-[50%] '>
                        <img src={ salad } className='z-[1] w-[170px]'/>
                        <div className='flex flex-col justify-center items-center bg-white w-full h-[180px] relative text-center rounded-[15px] mt-[-80px] shadow-lg'>
                           <div className='absolute bottom-4'><p className="text-[17px] font-semibold">Salad</p>
                            <p className="text-center text-[13px] px-[30px] text-gray-500">Vegetable</p>
                            <p className='font-semibold'>$20</p></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[50%] '>
                        <img src={ stake } className='z-[1] w-[170px]'/>
                        <div className='flex flex-col justify-center items-center bg-white w-full h-[180px] relative text-center rounded-[15px] mt-[-80px] shadow-lg'>
                           <div className='absolute bottom-4'><p className="text-[17px] font-semibold">Stake</p>
                            <p className="text-center text-[13px] px-[30px] text-gray-500">Meat</p>
                            <p className='font-semibold'>$50</p></div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
}
 
export default Popular;