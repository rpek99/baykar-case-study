import hero_data from "../hero_data.json"

const Hero = () => {
    return (
        <div className='relative w-full py-10 px-8' id="hero">
            <div className="mt-[550px] sm:mt-40 h-full absolute inset-0 bg-second-background -skew-y-[26deg] origin-top-right" />
            <div className='max-w-[1400px] mx-auto grid md:grid-cols-2 items-center'>
                <div className='flex flex-col md:pt-20'>
                    <p className='text-black font-roboto font-bold text-6xl sm: mt-2 sm:text-start text-center'>
                        Collectible Sneakers                    
                    </p>
                    <p className='text-black text-l pt-8 font-roboto sm:text-start text-center'>
                        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. 
                        Pharetra, eu imperdiet ipsum ultrices amet.
                    </p>
                    <div className="flex flex-cols-2 justify-center md:justify-start gap-8 w-full relative">
                        <button className='border-2 border-coffe-rgba text-coffe-rgba md:w-[200px] w-[160px] rounded-md font-medium my-8 py-3 hover:scale-105 duration-200'>
                            Sign up now
                        </button>
                        <button className='text-coffe-rgba md:w-[160px] w-[160px] font-medium my-8 flex items-center space-x-2 hover:scale-105 duration-200'>
                            <img src="assets/icons/vector.png" className="w-6 h-6" alt="demo"/>
                            <p>Watch Demo</p>
                        </button>            
                    </div>
                </div>
                <div className='relative w-[450px] mx-auto my-4'>
                    <div className='absolute inset-0 bg-yellow-500 w-[350px] h-[350px] rounded-[36px] translate-x-10 translate-y-10' />
                    <img src="/assets/shoe.png" alt="shoe" className="relative"/>
                </div>
            </div>
            <div className='relative w-full py-[5rem] px-4'>
                <div className='max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8 font-poppins'>
                    {hero_data.map((data) => (
                        <div key={data.id} className='w-[380px] flex flex-col p-4 my-4 rounded-lg text-black sm:text-start text-center'>
                            <div className='relative justify-center md:justify-start flex w-full my-4'>
                                <img src={data.rectangle} alt="rectangle" className='absolute inset-0 w-[40px] h-[40px] rounded-[36px] translate-x-[180px] md:translate-x-10 translate-y-0' />
                                <img src={data.icon} alt="hero_icon"  className="relative w-[70px] h-[70px] "/>
                            </div>
                            <h2 className='text-2xl font-bold py-6'>{data.title}</h2>
                            <p className='text-[16px]'>{data.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero;