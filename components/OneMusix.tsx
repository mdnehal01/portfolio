"use client"
import React from 'react'
import ShimmerButton from './ui/ShimmerButton'
import { MacbookScroll } from './ui/MacScroll'
import { FaLocationArrow } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'

const OneMusix = () => {
    const router = useRouter();
    return (
        <div className='flex flex-col'>
            <div className="lg:-mt-44 sm:-mt-20 -mt-60 md:scale-100 scale-150 h-[2250px] overflow-hidden relative">
                <MacbookScroll title="Developer and founder of One Musix app." src="/oneMusix.png"/>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <ShimmerButton handleClick={()=>{router.push('https://onemusix.vercel.app/')}} title="Visit" icon={<FaLocationArrow/>} position='left'/>
                <ShimmerButton handleClick={()=>{router.push('https://github.com/mdnehal01/musix')}} title="Github" icon={<FaLocationArrow/>} position='left'/>
            </div>
        </div>
  )
}

export default OneMusix;