import productJson from "../products.json";

const ProductSection = () => {
    return (
        <div className='w-full py-16 px-8 bg-blue-background relative' id="products">
            <div className='max-w-[1120px] mx-auto grid md:grid-cols-2 py-10'>
                <div className='mx-full text-[40px] sm:text-[50px] text-center sm:text-start'>
                    <h1>The best of the best</h1>   
                </div>
                <div className='mx-full sm:text-end text-center'>
                    <button className='border-2 border-slate-300 text-slate-300 text-[18px] md:w-[220px] w-[250px] rounded-md font-medium my-4 py-3 hover:scale-105 duration-200'>
                        Sign up now
                    </button>                 
                </div>
            </div>
            <div className='relative max-w-[1140px] mx-auto grid md:grid-cols-3 md:gap-8 gap-24 font-poppins'>
                {productJson.map((data) => (
                    <div key={data.id} className='w-full shadow-slate-600 shadow-[0px_10px_20px_2px] flex flex-col rounded-lg hover:scale-105 duration-300 bg-blue-background text-neutral-300'>
                        <img src={data.image} alt="product" className="md:object-cover mx-full rounded-t-lg h-56 w-128" />
                        <h2 className='text-2xl font-bold text-start px-8 py-4 text-white'>{data.title}</h2>
                        <p className='text-[17px] text-neutral-300 px-8'>{data.desc}</p>
                        <a className='flex justify-center' target="_blank" rel="noreferrer" href={data.sourceCodeUrl}>
                            <button className='flex justify-center gap-2 bg-blue-background border-2 border-white w-[80%] rounded-md font-medium my-8 py-3 text-violet-50 hover:scale-105 duration-200'>
                                <img src="assets/icons/product_icon.png" className="w-6 h-6" alt="product_icon"/>
                                <p>Buy Now</p>
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductSection;