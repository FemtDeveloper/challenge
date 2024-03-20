import Link from "next/link";

type Props = {
  title: string;
  path: string;
  gradient: "blue" | "orange";
};

const CustomGradientLink = ({ gradient, path, title }: Props) => {
  const colorgradients = {
    blue: "from-[#0000ff] to-[#0000aa]",
    orange: "from-[#F5C974] to-[#F4545E]",
  };

  return (
    <Link
      href={path}
      aria-label="get started"
      className={`py-3 px-7 text-white text-base font-medium bg-gradient-to-t ${colorgradients[gradient]} rounded-full drop-shadow-dark`}
    >
      {title}
    </Link>
  );
};

export default CustomGradientLink;
