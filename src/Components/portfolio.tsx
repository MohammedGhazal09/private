import PortfolioItems from "./subComponents/portfolioItems";
// import useScrollTrigger from "../hooks/scrollTrigger";
export default function Portfolio() {
  // const [ref, isVisible] = useScrollTrigger();
  return (
    <div className="h snap-y snap-mandatory">
      <div className="max-[801px]:hidden sticky top-0 flex flex-col w-full gap-y-[10px] py-[50px]">
        <h2 className="text-6xl text-[#f8a301] font-bold text-center">
          Featured Works
        </h2>
        <div className={`w-full h-[8px] bg-white my-[20px]`}></div>
      </div>
      <PortfolioItems/>
    </div>
  );
}
