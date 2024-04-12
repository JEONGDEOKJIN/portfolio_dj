import Header from '@/components/Header'
import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {

  return (
    <>
    <Header>
        <div>{children}</div>
    </Header>

    </>
  )
}

export default layout