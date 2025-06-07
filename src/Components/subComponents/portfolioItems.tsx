import plashoe from "../../assets/Imgs/plashoe.webp";
import myAssist from "../../assets/Imgs/myAssist.webp";

interface PortfolioItem {
  title: string;
  description: string;
  img: string;
  demoLink: string;
}

export default function PortfolioItems() {
  const portfolioContent: PortfolioItem[] = [
    {
      title: "PLASHOE",
      description:
        "Responsive and modern e-commerce website for selling shoes, built using React and Tailwind CSS. It features a clean UI, product listings, detailed pages, and smooth navigation for a seamless and user-friendly shopping experience across all devices.",
      img: plashoe,
      demoLink: "https://ecommerce-theta-lemon.vercel.app/",
    },
    {
      title: "MyAssist",
      description:
        "Responsive AI-powered chatbot website built with React, Tailwind CSS, and Context API. It features light/dark theme switching, smooth UI, and real-time interaction, offering users a simple and modern interface to communicate with an intelligent assistant.",
      img: myAssist,
      demoLink: "https://myassist-eosin.vercel.app/",
    },
  ];

  return (
    <div className="w-full snap-start snap-y snap-mandatory overflow-x-hidden scrollbar-hide bg-[#0a192f]">
      {portfolioContent.map((item: PortfolioItem, index: number) => (
        <div key={index} className={`snap-start snap-y snap-mandatory w-full flex flex-wrap justify-center items-center gap-x-[3%] h-screen snap-center`}>
          <img
            src={item.img}
            alt={`${item.title}`}
            className={`h-[30%] aspect-[3/2] rounded-2xl`}
          />
          <div className={`max-[803px]:items-center flex flex-col justify-center gap-y-[20px] pb-[50px] tracking-widest z-10`}>
            <h2 className=" text-5xl font-semibold text-white">{item.title}</h2>
            <p className="max-[803px]:text-center max-[450px]:px-24 text-gray-400 w-[450px] text-wrap ">{item.description}</p>
            <a
              href={item.demoLink}
              className=" py-[7px] px-[50px] bg-[#f8a301] rounded-xl text-center w-[200px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
