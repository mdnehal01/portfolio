"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { projects } from '@/data';
import React from 'react'
import { useRouter } from 'next/navigation';
import { BsGithub } from "react-icons/bs";
import { Share2Icon } from "lucide-react";

const RecentProjectsType2 = () => {
    const router = useRouter();
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>
                A small section of {'  '}
                <span className='text-purple'>Recent Projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-16 md:gap-40 mt-10'>
                {projects.map(({id, title, des, img, iconLists, link, liveLink}) => (
                    <CardContainer key={id} className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-purple/70 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        {des}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src={img}
                          height="1000"
                          width="1000"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-20">
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href="https://twitter.com/mannupaaji"
                          target="__blank"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                          <Link href={link} title="Github"/>
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          <Link href="" title="Visit"/>
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                ))}
            </div>
        </div>
    )
}

export default RecentProjectsType2;