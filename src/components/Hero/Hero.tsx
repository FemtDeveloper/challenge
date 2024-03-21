import Image from "next/image";
import parse from "html-react-parser";
import { HeroContent } from "@/interfaces/hero";
import { CustomGradientLink } from "../Ui";

interface Props {
  content: HeroContent;
}

const Hero = ({ content }: Props) => {
  const { bgImg, title, img, button } = content;

  return (
    <section className="w-full h-screen relative overflow-hidden flex justify-center items-center">
      <Image
        className="absolute w-full h-full object-cover -z-10 brightness-[.60] lg:brightness-75"
        src={bgImg}
        alt="backround image"
        priority
        width={1440}
        height={800}
      />
      <div className="max-w-wrapper flex flex-col lg:flex-row mt-[30px] w-full justify-between items-center gap-[33px] px-4 lg:px-0">
        <div className="left-content flex flex-col justify-center gap-[15px] -mt-[30px]">
          <h2 className="text-center text-[32px] lg:text-left lg:text-[48px] leading-normal">
            {parse(title)}
          </h2>
          <div className="hidden lg:flex">
            <CustomGradientLink
              gradient="orange"
              title={button.title}
              path={button.path}
            />
          </div>
        </div>
        <div className="right-content  flex flex-col items-center lg:items-stretch gap-[70px] lg:gap-0">
          <Image
            src={img}
            alt="image"
            width={854}
            height={568}
            className="rounded-2xl object-cover w-full h-[340px] lg:w-[450px] lg:h-[450px]"
          />
          <div className="flex lg:hidden">
            <CustomGradientLink
              gradient="orange"
              title={button.title}
              path={button.path}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
