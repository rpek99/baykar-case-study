const Collection = () => {
    return (
        <div className='w-full pt-10 pb-20 items-center' id="collection">
            <div className='flex flex-col md:pt-10 px-10 sm:px-16 relative'>
                <p className='text-black font-roboto font-bold text-4xl sm:text-6xl sm: mt-2 sm:text-start text-center'>
                    Grow your collection                  
                </p>
                <p className='text-black text-l pt-8 font-roboto sm:text-start text-center'>
                    Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                    Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                </p>
            </div>
            <div className="absolute translate-y-40 pt-5 sm:pt-0 sm:translate-y-20">
                <img src="assets/collection_back.png" className="w-full" alt="collection_back_image_1"/>
            </div>
            <div className='flex flex-col md:flex-row md:pt-10 justify-between relative'>
               <div className="pt-4 sm:pt-0 text-black flex overflow-x-scroll scrollbar-hide sm:flex-none sm:overflow-x-visible sm:grid px-10 sm:px-16">
                    <button className='flex min-w-[250px] sm:min-w-[200px] px-2 sm:px-2 justify-between bg-white w-[200px] h-[50px] rounded-md font-medium py-3 text-slate-800 hover:scale-105 duration-200 shadow-slate-200 shadow-[0px_4px_6px_0px]'>
                        <img src="assets/icons/collection_1.png" className="w-6 h-6" alt="collection_icon"/>
                        <p>Bibendum tellus</p>
                        <img src="assets/icons/collection_2.png" className="w-6 h-6" alt="collection_icon"/>
                    </button>
                    <button className='flex min-w-[250px] sm:min-w-[200px] px-8 sm:px-2  justify-start gap-2 w-[200px] h-[50px] rounded-md font-medium my-4 text-slate-800 hover:scale-105 duration-200'>
                        <img src="assets/icons/collection_3.png" className="w-6 h-6" alt="collection_icon"/>
                        <p>Cras eget</p>
                    </button>
                    <button className='flex min-w-[250px] sm:min-w-[200px] px-8 sm:px-2  justify-start gap-2 w-[200px] h-[50px] rounded-md font-medium my-4 text-slate-800 hover:scale-105 duration-200'>
                        <img src="assets/icons/collection_4.png" className="w-6 h-6" alt="collection_icon"/>
                        <p>Dolor pharetra</p>
                    </button>
                    <button className='flex min-w-[250px] sm:min-w-[200px] px-8 sm:px-2  justify-start gap-2 w-[200px] h-[50px] rounded-md font-medium my-4 text-slate-800 hover:scale-105 duration-200'>
                        <img src="assets/icons/collection_5.png" className="w-6 h-6" alt="collection_icon"/>
                        <p>Amet, fringilla</p>
                    </button>
                    <button className='flex min-w-[250px] sm:min-w-[200px] px-8 sm:px-2  justify-start gap-2 w-[200px] h-[50px] rounded-md font-medium my-4 text-slate-800 hover:scale-105 duration-200'>
                        <img src="assets/icons/collection_6.png" className="w-6 h-6" alt="collection_icon"/>
                        <p>Amet nibh</p>
                    </button>
                    <button className='flex min-w-[250px] sm:min-w-[200px] px-8 sm:px-2  justify-start gap-2 w-[200px] h-[50px] rounded-md font-medium my-4 text-slate-800 hover:scale-105 duration-200'>
                        <img src="assets/icons/collection_7.png" className="w-6 h-6" alt="collection_icon"/>
                        <p>Sed velit</p>
                    </button>
               </div>
               <div className="px-16">
                    <img src="assets/collection_image.png" className="w-[100%]" alt="collection_image"/>
               </div>
            </div>
        </div>
    )
}

export default Collection;