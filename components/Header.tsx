"use client"

import React, { use, useEffect, useRef, useState } from 'react'
import PagePadding from './PagePadding'
import { cn } from '@/lib/utils'
import NavItem from './elements/NavItem'
import Image from 'next/image'
import RandomButton from './elements/RandomButton'


const Header = ({children} : any) => {
  const [isScrolled, setIsScrolled] = useState(false)

  // const headerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    console.log('scrolling 이벤트발생 ✅✅✅ ');

    const srcollValue = window.scrollY;
    setIsScrolled(srcollValue > 0)
  }

  useEffect( () => {
    window.addEventListener("scroll", handleScroll)

    // 이벤트 리스너 제거
    return () =>{
      window.removeEventListener("scroll", handleScroll)
    }
  } , [])

  return (
    <header  className='relative w-full h-full items-center '> 

        <section className={ cn('sticky top-0 left-0 z-10 h-[100px]   ', isScrolled ? 'bg-white/70 backdrop-blur-md text-gray-900 shadow-md' : ""  )}>      
          <PagePadding>
              <nav className='flex w-[33.333%] cursor-pointer text-[14px] font-[600] '>
                  <NavItem 
                    hrefLink='https://tropical-trouser-a8d.notion.site/5fe2f6f3f2bd448c9d4cee3c59185f35?v=ab8fecd13c0c4d56a98d0bf30b19eadc' 
                    text='Dev wiki' />  
                
                  <NavItem 
                    hrefLink='https://github.com/JEONGDEOKJIN' 
                    text='Github' />  

                  <NavItem 
                    hrefLink='https://deokjin.gitbook.io/dj/' 
                    text='Blog' />  
              </nav>
              
              <article className='flex w-[33.333%] items-center justify-center'>
                  <Image
                    alt='logo'
                    width={100}
                    height={100}
                    className='object-cover'
                    src={"/jeong-logo.png"}
                    />
              </article>
              
              <article className='flex w-[33.333%] '>
                <RandomButton 
                  desc = {'Surprise me'} 
                  icon = {'🌟'}
                  />
              </article>
          </PagePadding>
        </section>


        <section className='relative'>
          {children} 
        </section>

    </header>
  )
}

export default Header
