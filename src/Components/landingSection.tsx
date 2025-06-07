import personalImg from "../assets/Imgs/personalImg.webp";
import scroll from "../assets/Imgs/scroll.webp";
import landingSectionStyle from '../style/landingSection.module.css'

import Marquee from "react-fast-marquee";
export default function LandingSection() {
    return(
        <div className="relative h-full min-h-full w-full">
            <div className={`${landingSectionStyle.landingConainer} flex justify-between px-[10%] items-center`}>
                <div className={`${landingSectionStyle.landingSection} text-white`}>
                    <h3 style={{textShadow: "1px 1px 0 0 #2a1249"}}className=" text-3xl mb-[40px] text-[#583686] font-semibold tracking-[10px] uppercase">Mohammed Wael</h3>
                    <h2 className="text-5xl font-bold tracking-widest mb-[20px]">Front-End Developer |</h2>
                    <h2 className="text-5xl font-bold tracking-widest">ReactJS Specialist</h2>
                    <div className={`${landingSectionStyle.btnContainer} flex gap-x-[30px] mt-[40px]`}>
                        <a href="#portfolio" className="border border-white rounded-[5px] p-[15px] font-semibold duration-[0.8s] hover:bg-[#583686] hover:text-white hover:text-[1.05rem]">See the Latest Works</a>
                        <a href="#Contact" className="bg-white text-black rounded-[5px] p-[15px] font-semibold duration-[0.8s] hover:bg-[#583686] hover:border hover:border-white hover:text-white hover:text-[1.05rem]">Contact Me</a>
                    </div>
                    <a href="#skills" className={`${landingSectionStyle.scroll} block w-[50px] h-[50px]`}>
                        <img className="mt-[40px]" src={scroll} alt="scroll"/>
                    </a>
                </div>
                <div className={`${landingSectionStyle.personalImg} relative max-w-fit z`}>
                    <div className="absolute w-[100%] h-[500px] bg-[#2a1249] rounded-[20px] top-[70px]"></div>
                    <img src={personalImg} className="w-[500px] relative " alt="personalImg"/>
                </div>
            </div>
            <Marquee direction="left" speed={100} gradient={false} 
            className="uppercase absolute top-[50%]">
                    <span className={`${landingSectionStyle.marquee} text-[18rem] font-bold tracking-[50px] mx-[50px] text-[#141429]`}>Mohammed Wael</span>
            </Marquee>
        </div>
    )
}