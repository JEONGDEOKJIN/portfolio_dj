import { sleep } from '@/lib/utils'
import React from 'react'


const page = async (props : any) => {
  
    // console.log("props.params.id : " , props.params.id)
    // console.log("before sleep(5000)")
    await sleep(5000) // 5초 동안 기다렸다가 실행해라
    // console.log("after sleep(5000)")
    // throw new Error("error test")


    return (

    <div>{props.params.id}</div>
  )
}

export default page