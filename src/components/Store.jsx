import React, { useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const Store = () => {
    const img = [
        '/assets/b-logo-1.svg',
        '/assets/b-logo-2.svg',
        '/assets/b-logo-3.svg',
        '/assets/b-logo-4.svg',
        '/assets/b-logo-5.svg',
        '/assets/b-logo-6.svg',
    ];

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.store',
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
    
        tl.fromTo('.heroimg', 
            { y: -100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: 'back.inOut' }
        );
        
        tl.fromTo('.logo-1, .logo-2,  .logo-5, .logo-6 ,.logo-3, .logo-4', 
            { y: -100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.5, ease: 'back.inOut', stagger: 0.3 }
        );
    }, []);
    

    return (
        <div className=' relative flex items-center justify-center flex-col pt-20'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Connect your store</h1>
            <p className='text-gray-600 text-center py-2'>
                Printify easily integrates with major e-commerce platforms and marketplaces
            </p>


            <div className='relative mt-40 store h-[30vh]'>
                <img 
                    className='heroimg bg-[#18C75A] text-white p-10 rounded-3xl relative flex items-center justify-center md:w-[150px] w-[120px] h-[120px] md:h-[150px]' 
                    src="/assets/white.logo.svg" 
                    alt="Hero" 
                />

                <div className='absolute inset-0 flex items-center justify-center z-20'>
                    <img className='logo-1 hover:scale-110 transition-all duration-300 cursor-pointer w-[100px] h-[100px] shadow-xl p-6 bg-white rounded-2xl object-fit absolute -top-[120px] -left-[130px]' src={img[0]} alt="Logo 1" />
                    <img className='logo-2 hover:scale-110 transition-all duration-300 cursor-pointer w-[100px] h-[100px] shadow-xl p-6 bg-white rounded-2xl object-fit absolute -top-[120px] -right-[130px]' src={img[1]} alt="Logo 2" />
                    <img className='logo-3 hover:scale-110 transition-all duration-300 cursor-pointer w-[100px] h-[100px] shadow-xl p-6 bg-white rounded-2xl object-fit absolute top-[140px] -left-[150px]' src={img[2]} alt="Logo 3" />
                    <img className='logo-4 hover:scale-110 transition-all duration-300 cursor-pointer w-[100px] h-[100px] shadow-xl p-6 bg-white rounded-2xl object-fit absolute top-[140px] -right-[150px]' src={img[3]} alt="Logo 4" />
                    <img className='logo-5 hover:scale-110 transition-all duration-300 cursor-pointer w-[100px] h-[100px] shadow-xl p-6 bg-white rounded-2xl object-fit absolute top-[20px] -right-[180px]' src={img[4]} alt="Logo 5" />
                    <img className='logo-6 hover:scale-110 transition-all duration-300 cursor-pointer w-[100px] h-[100px] shadow-xl p-6 bg-white rounded-2xl object-fit absolute top-[20px] -left-[180px]' src={img[5]} alt="Logo 6" />
                </div>
            </div>
        </div>
    );
};

export default Store;
