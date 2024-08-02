import React from 'react'

interface ShimmerButtonProps {
    title?: string;
    icon: React.ReactNode;
    handleClick?: (id:string) => void;
    otherClasses?: string;
    position: string;
}

const ShimmerButton:React.FC<ShimmerButtonProps> = ({
    title, icon, handleClick, otherClasses, position
}) => {
  return (
    // @ts-ignore
    <button className="relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10" onClick={handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-slate-950 bg-slate-50 px-7 text-sm font-medium dark:text-white text-black-100 backdrop-blur-3xl gap-2 ${otherClasses}`}>
            {position == 'left' && icon}
            {title}
            {position == 'right' && icon}
        </span>
    </button>
  )
}

export default ShimmerButton