import scrollJson from "../scroll_data.json"

const ScrollSection = () => {
    return (
        <div className='w-full py-16 relative' id="scroll">
            <div className='max-w-[1400px] mx-auto grid md:grid-cols-2 py-10'>
                <div className='mx-full text-[40px] sm:text-[50px] text-center sm:text-start text-black font-bold'>
                    <h1>Because they love us</h1>   
                </div>
                <div className='mx-full sm:text-end content-center hidden sm:block'>
                    <button className='w-[80px] hover:scale-105 duration-200'>
                        <img src="assets/icons/back_button.png" className="w-12 h-12" alt="back_button"/>
                    </button>   
                    <button className='w-[80px] hover:scale-105 duration-200'>
                        <img src="assets/icons/next_button.png" className="w-12 h-12" alt="next_button"/>
                    </button>                 
                </div>
            </div>
            <div className='absolute inset-8 bg-scroll-background h-[340px] rounded-[36px] translate-y-40' />
            <div className='flex gap-8 font-poppins overflow-x-scroll scrollbar-hide pb-8 relative '>
                {scrollJson.map((data) => (
                    <div key={data.id} className='min-w-[400px] px-8 shadow-slate-400 shadow-[0px_12px_12px_0px] flex-col rounded-xl bg-white text-black mr-4'>
                        <div className="flex justify-start gap-2 w-[80%] font-medium my-8">
                            <img src={data.image} alt="comp_icon" className="md:object-cover h-8 w-8" />
                            <p className="text-slate-600 content-center font-bold text-lg">{data.comp_name}</p>
                        </div>
                        <p className='text-[17px]'>{data.desc}</p>
                        <div className="flex justify-start gap-2 w-[80%] font-medium my-8 py-3">
                            <img src={data.icon} alt="user_icon" className="w-14 h-14"/>
                            <div>
                                <p className="text-slate-900">{data.user_name}</p>
                                <p className="text-slate-400 font-normal text-md">{data.user_title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScrollSection;