import React, { useEffect, useRef } from 'react';
import { LuArrowRight } from "react-icons/lu";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
    const textDivRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);
    const productRef = useRef([]);


    useEffect(() => {
        const textDiv = textDivRef.current;
        const heading = headingRef.current;
        const paragraph = paragraphRef.current;
        const button = buttonRef.current;

        gsap.set([heading, paragraph, button], { opacity: 0 });

        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textDiv,
                start: "top 80%", 
                toggleActions: "play none none none",
            }
        });

        
        tl.fromTo(textDiv, 
            { x: '-100%', opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
        )
        
        
        .fromTo(heading, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        )
        .fromTo(paragraph, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        )
        .fromTo(button, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
    }, []);

    useEffect(() =>{
        productRef.current.forEach((p,i) =>{
            gsap.fromTo(p,{
                y: -100 * i,
                opacity: 0,
                duration: 1.5,
                ease: 'back.inOut',
            },{
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'back.inOut',
                scrollTrigger:{
                    trigger:p,
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                }
            })
        })
    },[])


    const data = [{
        img: '/assets/pp-1.webp',
        text: 'Create',
        text2: 'custom products',
        para: 'Easily add your designs to a wide range of products using our free tools'
    },
    {
        img: '/assets/pp-2.webp',
        text: 'Sell',
        text2: 'on ther terms',
        para: 'You choose the products, sale price, and where to sell'
    },
    {
        img: '/assets/pp-3.webp',
        text: 'We handle',
        text2: 'fulfillment',
        para: ' Once an order is placed, we automatically handle all the printing and delivery logistics '
    }
    ]


    return (
        <div className='mt-20 bg-[#F7F7F7] p-4'>
            <div className='w-[90%] md:w-[84%] lg:w-[90%] xl:w-[70%] mx-auto py-10 '>
                <div className='flex items-end flex-col lg:flex-row overflow-hidden'>
                    <img
                        className='w-full lg:w-fit lg:h-[600px] md:h-[400px] h-[200px] object-cover xl:object-fit rounded-xl z-10'
                        src="/assets/product.png"
                        alt=""
                    />
                    <div
                        ref={textDivRef}
                        className='textdiv bg-[#FFFFFF] xl:pt-20 flex items-start justify-start flex-col px-4 md:px-20 lg:px-10 pb-40 rounded-tr-xl rounded-br-xl'
                    >
                        <h1 ref={headingRef} className='font-semibold text-2xl md:text-4xl lg:text-2xl xl:text-4xl py-5 inline-block'>
                            Easily add your design to a <br /> wide range of products
                        </h1>
                        <p ref={paragraphRef} className='text-gray-600 py-5 inline-block'>
                            With our free design tools, you can easily add your custom designs to <br /> t-shirts, mugs, phone cases, and hundreds of other products.
                        </p>
                        <button ref={buttonRef} className='flex items-center gap-3 text-green-500 font-semibold text-lg'>
                            All products <LuArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className='flex flex-wrap gap-10 mt-10 md:mt-0 '>
                    {data.map((item, index) => (
                        <div key={index} className="product-item md:w-[14rem] lg:w-[30%] lg:mt-40"
                        ref={(el) => (productRef.current[index] = el)}
                        >
                            <img className='w-[10rem]' src={item.img} alt={item.text} />
                            <h3 className='uppercase font-bold text-green-600 pt-3'>{item.text}</h3>
                            <h3 className='font-semibold pb-3 text-2xl'> {item.text2}</h3>
                            <p>{item.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;
