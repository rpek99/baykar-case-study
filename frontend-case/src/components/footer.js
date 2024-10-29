const Footer = () => {
    return (
        <div className="text-slate-300 bg-blue-background p-16">
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-neutral-600 pb-12">
                <div className="flex flex-col items-center md:items-start gap-4 pb-12 md:pb-0">
                    <p className="text-white">
                        Product
                    </p>
                    <button className="hover:scale-105 duration-200">
                        Pricing
                    </button>
                    <button className="hover:scale-105 duration-200">
                        Overview
                    </button>
                    <button className="hover:scale-105 duration-200">
                        Browse
                    </button>
                    <button className="hover:scale-105 duration-200">
                        Accessibility
                    </button>
                    <button className="hover:scale-105 duration-200">
                        Five
                    </button>
                </div>
                <div className="flex flex-col items-center md:items-start gap-4 pb-12 md:pb-0">
                    <p className="text-white">
                        Solutions
                    </p>
                    <button className="hover:scale-105 duration-200">
                        Brainstorming
                    </button>
                    <button className="hover:scale-105 duration-200">
                        Ideation
                    </button>
                    <button className="hover:scale-105 duration-200">
                        Wireframing
                    </button>
                    <button className="hover:scale-105 duration-200">
                        Research
                    </button>
                    <button className="hover:scale-105 duration-200">
                        Design
                    </button>
                </div>
                <div className="flex flex-col items-center md:items-start gap-4 pb-12 md:pb-0">
                    <p className="text-white">
                        Support
                    </p>
                    <button className="hover:scale-105 duration-200">
                        Contact Us
                    </button>
                    <button className="hover:scale-105 duration-200">
                        Developers
                    </button>
                    <button className="hover:scale-105 duration-200">
                        Documentation
                    </button>
                    <button className="hover:scale-105 duration-200">
                        Integration
                    </button>
                    <button className="hover:scale-105 duration-200">
                        Reports
                    </button>
                </div>
                <div className="flex flex-col items-center md:items-start gap-4">
                    <p className="text-white">
                        Get the app
                    </p>
                    <img src="/assets/icons/app_store.png" alt="app_store" className="hover:scale-105 duration-200 h-10 w-32" />
                    <img src="/assets/icons/google_play.png" alt="app_store" className="hover:scale-105 duration-200 h-10 w-34" />
                    <p className="pt-2">
                        Follow Us
                    </p>
                    <div className="grid grid-cols-5 gap-2">
                        <img src="/assets/icons/youtube.png" alt="youtube" className="hover:scale-105 duration-200 h-8 w-8" />
                        <img src="/assets/icons/facebook.png" alt="facebook" className="hover:scale-105 duration-200 h-8 w-8" />
                        <img src="/assets/icons/twitter.png" alt="twitter" className="hover:scale-105 duration-200 h-8 w-8" />
                        <img src="/assets/icons/instagram.png" alt="instagram" className="hover:scale-105 duration-200 h-8 w-8" />
                        <img src="/assets/icons/linkedin.png" alt="linkedin" className="hover:scale-105 duration-200 h-8 w-8" />
                    </div>  
                </div>
            </div>
            <div className="pt-12 grid grid-cols-1 md:grid-cols-2 justify-between gap-4 md:gap-0">
                <p className="flex justify-center md:justify-start">Collers @ 2023. All rights reserved.</p>
                <div className="flex justify-center md:justify-end">
                    <button className="hover:scale-105 duration-200 px-4">Terms</button>
                    <button className="hover:scale-105 duration-200 px-4">Privacy</button>
                    <button className="hover:scale-105 duration-200 px-4">Contact</button>
                    <button className="flex gap-2 hover:scale-105 duration-200 px-4">
                        <img src="/assets/icons/footer_en.png" alt="footer_en" className="md:object-cover h-6 w-6" />
                        <p className="content-center">EN</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer;