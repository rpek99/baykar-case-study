const JoinUs = () => {
    return (
        <div className='relative w-full py-24 px-8 bg-background-rgba' id="joinus">
            <div className='max-w-[1400px] mx-auto grid md:grid-cols-2 items-center sm:pl-12 px-2 pt-8 bg-white w-full rounded-[36px] shadow-slate-400 shadow-[0px_5px_18px_0px]'>
                <div className='flex flex-col pb-72 sm:pb-0'>
                    <p className='text-black font-roboto font-bold text-4xl sm:text-6xl sm: mt-2 sm:text-start text-center'>
                        Why join us                 
                    </p>
                    <div className="pt-8 flex justify-start gap-3">
                        <img src="assets/icons/join_us_icon.png" className="w-4 h-4" alt="join_text"/>
                        <p className='text-black text-l font-roboto text-start'>
                            Est et in pharetra magna adipiscing ornare aliquam.
                        </p>
                    </div>
                    <div className="pt-2 flex justify-start gap-3">
                        <img src="assets/icons/join_us_icon.png" className="w-4 h-4" alt="join_text"/>
                        <p className='text-black text-l font-roboto text-start'>
                            Tellus arcu sed consequat ac velit ut eu blandit.
                        </p>
                    </div>
                    <div className="pt-2 flex justify-start gap-3">
                        <img src="assets/icons/join_us_icon.png" className="w-4 h-4" alt="join_text"/>
                        <p className='text-black text-l font-roboto text-start'>
                            Ullamcorper ornare in et egestas dolor orci.
                        </p>
                    </div>
                    <div className="w-[450px] text-center sm:text-start py-6">
                        <button className='border-2 border-coffe-rgba text-coffe-rgba md:w-[200px] w-[160px] rounded-md font-medium my-8 py-3 hover:scale-105 duration-200'>
                            Sign up now
                        </button>     
                    </div>
                </div>
                <div className='absolute mx-auto sm:pl-[45%] translate-y-[60%] sm:translate-y-0'>
                    <img src="/assets/join_us.png" className="relative w-[600px]" alt="join_us" />
                </div>
            </div>
        </div>
    )
}

export default JoinUs;