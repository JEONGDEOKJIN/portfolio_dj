import React from 'react'
import Image from 'next/image'

const MarqueeItem = ({desc} : any) => {
  return (
    <>
          <section className="relative  bg-blue-300 ml-10 w-[273px] h-[340px]  rounded-[24px] " >
            
            <figure className='relative  top-0 h-full  w-full'>
              <Image 
                fill
                alt="marquee item"
                className="rounded-[24px] object-cover "
                src={"/img/daldam music - 밥.jpeg"}
              />
              <div className='w-full h-full bg-black rounded-[24px] saturate-50 opacity-30 absolute top-0' ></div>
            </figure>
            
            <article>{desc}</article>  


          </section>
    </>
  )
}

export default MarqueeItem