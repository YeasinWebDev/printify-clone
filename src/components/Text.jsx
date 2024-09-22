import React from 'react'

const Text = () => {
    const data =[
        {
            img:'/assets/t-1.svg',
            text:'Higher Profits',
            para:'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.'
        },
        {
            img:'/assets/t-2.svg',
            text:'Robust Scaling',
            para:'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.'
        },
        {
            img:'/assets/t-3.svg',
            text:'Best Selection',
            para:'With 900+ products and top quality brands, you can choose the best products for your business.'
        }
    ]
  return (
    <div className='flex items-center justify-center gap-10 my-20 flex-wrap'>
        {data.map((item, index) => (
            <div key={index} className="text-item md:w-[14rem] lg:w-[30%] lg:my-20">
                <img className='w-[10rem]' src={item.img} alt={item.text}/>
                <h3 className='font-semibold py-4 text-2xl'>{item.text}</h3>
                <p>{item.para}</p>
            </div>
        ))}
    </div>
  )
}

export default Text