import React, {useState} from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className={'sticky top-0 z-50 w-full'}>
            <div className='flex justify-between items-center h-[70px] max-w-[1400px] mx-auto px-4 text-coffe-rgba'>
                <button>
                    <h1 className='w-full text-3xl font-bold'>Collers</h1>
                </button>
                <ul className='hidden md:flex font-poppins'>
                    <li className='p-4 rounded-md text-[18px] hover:scale-105 duration-200'>
                        <button className='py-2'>Products</button> 
                    </li>
                    <li className='p-4 rounded-md text-[18px] hover:scale-105 duration-200'>
                        <button className='py-2'>Solutions</button>
                    </li>
                    <li className='p-4 rounded-md text-[18px] hover:scale-105 duration-200'>
                        <button className='py-2'>Pricing</button>
                    </li>
                    <li className='p-4 rounded-md text-[18px] hover:scale-105 duration-200'>
                        <button className='py-2'>Resources</button>
                    </li>
                    <li className='p-4 rounded-md text-[18px] hover:scale-105 duration-200'>
                        <button className='py-2'>Log In</button>
                    </li>
                    <li className='p-4 rounded-md text-[18px]'>
                        <button className='border-2 border-coffe-rgba  md:w-[160px] w-[160px] rounded-md font-medium py-2 hover:scale-105 duration-200'>
                            Sign up now
                        </button>
                    </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {<button><img className='w-[40px]' src='/assets/icons/menu_scale.png' alt="menu"/></button>}      
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r  bg-second-background ease-in-out duration-500 block md:hidden' : 'fixed left-[-100%]'}>
                    <ul className='p-4 font-poppins text-xl'>
                        <li className='p-4 border-b border-gray-600 hover:scale-110 ease-in-out duration-200'>
                            <button>Products</button>
                        </li>
                        <li className='p-4 border-b border-gray-600 hover:scale-110 ease-in-out duration-200'>
                            <button>Solutions</button>
                        </li> 
                        <li className='p-4 border-b border-gray-600 hover:scale-110 ease-in-out duration-200'>
                            <button>Pricing</button>
                        </li>
                        <li className='p-4 border-b border-gray-600 hover:scale-110 ease-in-out duration-200'>
                            <button >Log In</button>
                        </li>
                        <li className='pt-4 hover:scale-110 ease-in-out duration-200'>
                            <button className='border-2 border-coffe-rgba  md:w-[160px] w-[160px] rounded-md font-medium py-1'>
                                Sign up now
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;