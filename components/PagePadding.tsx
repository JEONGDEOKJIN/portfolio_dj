import React from 'react'

const PagePadding = ({children} : any) => {
  return (
    <div className='flex flex-row items-center h-full  mx-auto px-[10px] py-2 lg:px-[100px]'>{children}</div>
  )
}

export default PagePadding