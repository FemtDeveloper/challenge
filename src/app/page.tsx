import { Hero } from "@/components/Hero";
import { ChevronUpIcon } from "@/components/Icons";
import { HeroContent } from "@/interfaces/hero";

const HERO_CONTENT: HeroContent = {
  bgImg: "/images/hero/background.jpeg",
  img: "/images/hero/fox.jpeg",
  title:
    "Save the <span className='font-medium bg-gradient-to-r from-[#61d803] to-[#1A6A2B] text-transparent bg-clip-text'>planet</span> <br/><span className='font-bold text-[34px] lg:text-[44px]'>just in 10 minutes</span>",
  button: {
    path: "/",
    title: "Get started",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen relative w-full flex-col items-center justify-between">
      <Hero content={HERO_CONTENT} />
      <button className="absolute hidden lg:block z-10 bottom-14 animate-bounce">
        <ChevronUpIcon />
      </button>
    </main>
  );
}
