"use client"
import React from 'react'
import ShimmerButton from './ui/ShimmerButton'
import { MacbookScroll } from './ui/MacScroll'
import { FaLocationArrow } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import { BsGithub } from 'react-icons/bs'
import { BiLink } from 'react-icons/bi'

const OneMusix = () => {
    const router = useRouter();
    return (
        <div className='flex flex-col'>
            <div className="sm:-mt-0 -mt-[420px] md:scale-100 scale-150 md:h-[2250px] h-[1500px] overflow-hidden relative">
                <MacbookScroll title="Developer and founder of One Musix app." src="/oneMusix.png"/>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <ShimmerButton handleClick={()=>{router.push('https://onemusix.vercel.app/')}} title="Visit" icon={<BiLink/>} position='left'/>
                <ShimmerButton handleClick={()=>{router.push('https://github.com/mdnehal01/musix')}} title="Github" icon={<BsGithub/>} position='left'/>
            </div>
        </div>
  )
}

export default OneMusix;