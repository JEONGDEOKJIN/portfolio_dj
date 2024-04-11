"use client"
import {GridLoader} from "react-spinners"

import React from 'react'

const Errormessage = () => {
  return (

    <>
    <div className="w-full h-full flex flex-col my-20 flex-wrap items-center gap-5 ">
      <GridLoader  color="#36d7b7" />
      <div className="font-[600] text-[50px]">Oops!</div>
      <div >잠시 후 다시 확인해주세요!</div>
    </div>

    </>
  )
}

export default Errormessage