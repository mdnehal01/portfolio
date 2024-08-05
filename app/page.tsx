import RecentProjectsType2 from "@/components/RecentProjects3d";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MacScrollTheme from "@/components/MacScrollTheme";
import OneMusix from "@/components/OneMusix";
import RecentProjects from "@/components/RecentProjects";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { MacbookScroll } from "@/components/ui/MacScroll";
import ShimmerButton from "@/components/ui/ShimmerButton";
import { ModeToggle } from "@/components/ui/ThemeToggle";
import { navItems } from "@/data";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FaAirbnb, FaLocationArrow } from "react-icons/fa6";

export default function Home() {

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
        
        <RecentProjects/>

        <RecentProjectsType2/>

      </div>
    </main>
  );
}
