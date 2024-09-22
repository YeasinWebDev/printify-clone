import React from 'react'

const Hero = () => {
    const text = [
        '100% Free to use',
        '900+ High-Quality Products',
        'Largest global print network'
    ]
    
    return (
        <div
            className='relative flex items-center justify-center flex-col md:flex-row h-[500px] w-full bg-cover bg-center my-20'
            style={{ backgroundImage: "url('/assets/background.svg')" }}
        >
            {/* Left Side: Text Section */}
            <div className='flex flex-col gap-6 z-10 mt-20 md:mt-0'>
                <h1 className='font-bold text-black text-3xl lg:text-6xl w-full md:w-[80%] space-y-4'>
                    Create and sell custom products
                </h1>
                <div className='flex flex-col gap-2'>
                    {text.map((item, index) => (
                        <div key={index} className='flex items-center gap-3'>
                            <img src='/assets/right.svg' alt='check icon' />
                            <span className='text-gray-600 font-semibold'>{item}</span>
                        </div>
                    ))}
                </div>
                <div className='flex items-center gap-3'>
                    <button className='bg-[#39B75D] px-7 py-3 text-white rounded-sm font-semibold hover:bg-green-600 whitespace-nowrap'>
                        Start for free
                    </button>
                    <button className='px-7 py-3 border-[1px] border-gray-600 font-semibold rounded-sm flex items-center gap-2 whitespace-nowrap'>
                        <img className='w-5' src='/assets/play.svg' alt='play icon' /> How it works?
                    </button>
                </div>
                <p className='text-[#39B75D] font-semibold whitespace-nowrap'>
                    Trusted by over 8M sellers around the world
                </p>
            </div>

            {/* Right Side: Image Section */}
            <div className='relative h-full md:w-[50%] w-full'>
                <img
                    src="/assets/shirt.png"
                    alt="Shirt"
                    className="absolute top-[20%] left-[30%] lg:left-[10%] mx-auto h-[150px] md:h-[200px] lg:h-[400px] "
                />
                <img
                    src="/assets/logo.webp"
                    alt="Logo"
                    className="absolute top-[90%] md:top-[40%] left-[50%] md:left-[64%] lg:left-[60%] lg:top-[60%] xl:left-[60%] 2xl:left-[49%] transform -translate-x-1/2 -translate-y-1/2 lg:w-[120px] lg:h-[120px] w-[80px] h-[80px] object-contain"
                />
            </div>
        </div>
    )
}

export default Hero;
