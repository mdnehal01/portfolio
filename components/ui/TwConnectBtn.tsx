import React from 'react'

interface TwConnectBtnProps {
    handleClick: () => void;
    icon:React.ReactNode;
}

const TwConnectBtn:React.FC<TwConnectBtnProps> = ({handleClick, icon}) => {
  return (
    <button onClick={handleClick} className="dark:bg-slate-800 bg-white no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  dark:text-white text-black-100 inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full dark:bg-zinc-950 bg-zinc-50 py-0.5 px-4 ring-1 ring-white/10 ">
    {icon}
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/50 dark:via-purple via-violet-700 to-emerald-400/50 transition-opacity duration-500 group-hover:opacity-40" />
</button>
  )
}

export default TwConnectBtn