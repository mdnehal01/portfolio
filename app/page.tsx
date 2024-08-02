import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MacScrollTheme from "@/components/MacScrollTheme";
import OneMusix from "@/components/OneMusix";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { MacbookScroll } from "@/components/ui/MacScroll";
import ShimmerButton from "@/components/ui/ShimmerButton";
import { ModeToggle } from "@/components/ui/ThemeToggle";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FaAirbnb, FaLocationArrow } from "react-icons/fa6";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto 
      sm:px-10 px-5
    ">
      <div className="max-w-7xl w-full">
        <ModeToggle/>
        <FloatingNav
          navItems={navItems}
        />
        <Hero/>

        <OneMusix/>

        <Grid/>
        
      </div>
    </main>
  );
}
