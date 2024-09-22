import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);
const MakeMoney = () => {

    useEffect(() =>{
        gsap.set(['.makeh1','.makep',".makediv", '.makebtn','.makep2'], {opacity:0})
        gsap.fromTo('.contentdiv',{
            x: 700,
            opacity: 0,
            duration: 2,
            ease: 'back.inOut',
        },{
            x: 0,
            opacity: 1,
            duration:2,
            ease: 'back.inOut',
            scrollTrigger: {
                trigger: '.contentdiv',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            onComplete:() => {
                gsap.fromTo('.makeh1', {
                    y: -50,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.out'
                });
        
                // Paragraph animation (makep)
                gsap.fromTo('.makep', {
                    y: -50,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    delay: 0.2,
                    ease: 'power2.out'
                });
        
                // Box animation (makediv)
                gsap.fromTo('.makediv', {
                    scale: 0.8,
                    opacity: 0,
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    delay: 0.4,
                    ease: 'elastic.out(1, 0.75)'
                });
        
                // Button animation (makebtn)
                gsap.fromTo('.makebtn', {
                    y: 30,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    delay: 0.6,
                    ease: 'power2.out',
                });
        
                // Text animation (makep2)
                gsap.fromTo('.makep2', {
                    y: 30,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    delay: 0.8,
                    ease: 'power2.out'
                });
            }
        })

       

    },[])
  return (
    <div className='flex items-center lg:items-end my-20 flex-col lg:flex-row'>
        <div className='contentdiv bg-[#203741] text-white xl:p-24 lg:p-14 p-10 rounded-tl-xl rounded-bl-xl'>
            <h1 className='makeh1 font-semibold text-4xl'>Make Money, Risk-Free</h1>
            <p className='py-6 makep'>You pay for fulfillment only when you make a sale</p>
            <div className='makediv bg-[#17262B] p-6 rounded-xl py-6'>
                <div className='flex items-center justify-between'>
                    <h6>You sell a t-shirt</h6>
                    <p>$ 30</p>
                </div>
                <div className='flex items-center justify-between border-b-2 py-6'>
                    <h6>You pay for its production</h6>
                    <p>$ 12</p>
                </div>
                <div className='flex items-center justify-between text-green-500 pt-4'>
                    <h6>Your profit</h6>
                    <p>$ 18</p>
                </div>
            </div>
                <button className='makebtn bg-[#18C75A] px-4 py-2 rounded-lg my-10'>Start selling</button>
                <p className='text-gray-400 makep2'>100% Free to use · 900+ Products · Largest print network</p>
        </div>
        <div className='z-10 flex items-center justify-center lg:items-start lg:justify-start'>
            <img className='lg:w-[90%] w-[75%] md:w-[60%]' src="/assets/makeMoney.png" alt="" />
        </div>
    </div>
  )
}

export default MakeMoney