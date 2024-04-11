import { sleep } from "@/lib/utils";
import Image from "next/image";

export default async function Home() {
  
  // console.log("before sleep(5000)")
  await sleep(5000) // 5초 동안 기다렸다가 실행해라
  // console.log("after sleep(5000)")

  // throw new Error("에어랴~")

  return (
    <>
      <div>home</div>
    </>

  );
}
