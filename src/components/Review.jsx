import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Review = () => {
    const swiperRef = useRef([]); // To hold references to each SwiperSlide

    const data = [
        {
            img: 'https://printify.com/pfh/media/robert-voltaire-RIZV7QXV.png',
            name: 'Robert A. Voltaire',
            store: 'Store link',
            start: 5,
            review: 'Printify has been an incredible service for us musicians unable to keep large amount of inventory...'
        },
        {
            img: 'https://printify.com/pfh/media/quinten-barney-CHC7B3FG.png',
            name: 'Jane Doe',
            store: 'Store link',
            start: 4,
            review: "We chose Printify because of their offerings as well as their incredibly low prices..."
        },
        {
            img: 'https://printify.com/pfh/media/nikki-TJP4NANB.png',
            name: 'Nikki',
            store: 'Store link',
            start: 5,
            review: "Printify has been a amazing partner to work with as we grow our business..."
        },
        {
            img: 'https://printify.com/pfh/media/spencer-brett-kyle-NLHTAZDT.png',
            name: 'Spencer, Brett, and Kyle',
            store: 'Store link',
            start: 5,
            review: "Using Printify has been a great experience. Customer service is always very quick to respond..."
        }
    ];

    useEffect(() => {
        swiperRef.current.forEach((slide, i) => {
            gsap.fromTo(
                slide, 
                { opacity: 0, y: 50 },
                { 
                    opacity: 1,
                    y: 0,
                    duration: 1, 
                    ease: 'power3.out',
                    delay:0.2 *i,
                    scrollTrigger: {
                        trigger: slide,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    return (
        <div className='bg-[#F7F7F7] mt-20'>
            <div className='w-[90%] md:w-[84%] lg:w-[90%] xl:w-[70%] mx-auto py-20'>
                <div className='flex items-center gap-3 flex-col lg:flex-row'>
                    <h1 className='font-semibold text-3xl lg:text-4xl lg:w-[30%]'>Trusted by over 8M sellers around the world</h1>
                    <p className='text-gray-500 lg:w-[30%] text-center lg:text-start'>
                        Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
                    </p>
                </div>

                <div className='mt-20 overflow-hidden'>
                    <Swiper
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mySwiper"
                    >
                        {data.map((e, i) => (
                            <SwiperSlide 
                                key={i} 
                            >
                                <div  ref={(el) => swiperRef.current[i] = el} className='bg-white p-8 rounded-s-3xl'>
                                    <div className='flex items-center gap-5 pb-5'>
                                        <img className='w-16 rounded-2xl' src={e.img} alt={e.name} />
                                        <div>
                                            <h1 className='font-bold text-2xl whitespace-nowrap'>{e.name}</h1>
                                            <p className='text-green-500'>{e.store}</p>
                                            <p className='text-yellow-500 font-semibold'>{e.start} / 5</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-600 text-[16px]'>{e.review}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Review;
