import facebook from "../assets/Imgs/Facebook.webp";
import github from "../assets/Imgs/github.webp";
import linkedin from "../assets/Imgs/LinkedInImg.webp";
import mail from "../assets/Imgs/gmail.webp";
import sidebarStyle from "../style/sidebar.module.css";
import { useState, useEffect, useRef } from "react";


export default function Sidebar() {
  const [sidebaropen, setSidebar] = useState<boolean | null>(null);
  const sidebarStyleRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null); // Add button ref

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebaropen && 
                sidebarRef.current && 
                buttonRef.current && 
                !sidebarRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)) {
                setSidebar(false);
            }
        };

        if (sidebaropen) {
            document.addEventListener('mousedown', handleClickOutside);

        }
        
        if (sidebaropen) {
            sidebarStyleRef.current?.classList.add('z-20');
        } else {
          setTimeout(() => {
            sidebarStyleRef.current?.classList.remove('z-20');
          }, 700);
        }
        

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebaropen]);

    const handleToggle = () => {
        setSidebar(prev => prev === null ? true : !prev);
    };


    return(
        <>
            <div ref={buttonRef} onClick={handleToggle} className={`${sidebarStyle.sidebarBtn} fixed top-[20px] left-[3%] rounded-full flex flex-col items-center justify-center w-[50px] h-[50px] gap-y-[3px] cursor-pointer z-30 bg-white`}>
                <div className={`${sidebaropen ? `hidden`:null} duration-[0.3s] w-[20px] h-[2px] bg-black`}></div>
                <div className={`${sidebaropen ? `rotate-[-45deg]`:`rotate-[0deg]`} duration-[0.5s] w-[20px] h-[2px] bg-black`}></div>
                <div className={`${sidebaropen ? `rotate-[45deg] translate-y-[-5px]`:`rotate-[-0deg]`} duration-[0.5s] w-[20px] h-[2px] bg-black`}></div>
            </div>

            <div ref={sidebarStyleRef} className={`${sidebarStyle.sidebarContainer} flex fixed w-[99%] h-screen`}>
                <div ref={sidebarRef}
                    className={`${
                        sidebaropen === null 
                            ? sidebarStyle.initialBox 
                            : sidebaropen 
                                ? sidebarStyle.openBox 
                                : sidebarStyle.closeBox
                    } fixed bg-white`}>
                    <ul className={`${!sidebaropen ? 'hidden' : null} ${sidebarStyle.sidebarTxt} flex flex-col justify-center items-center h-full gap-y-[20px]`}>
                        <li>
                            <a onClick={() => setSidebar(false)} href="#home" className="text-[30px] font-semibold hover:text-[32px] hover:duration-[0.5s]">Home</a>
                        </li>
                        <li>
                            <a onClick={() => setSidebar(false)} href="#skills" className="text-[30px] font-semibold hover:text-[32px] hover:duration-[0.5s]">Skills</a>
                        </li>
                        <li>
                            <a onClick={() => setSidebar(false)} href="#portfolio" className="text-[30px] font-semibold hover:text-[32px] hover:duration-[0.5s]">Portfolio</a>
                        </li>
                        <li>
                            <a onClick={() => setSidebar(false)} href="#Contact" className="text-[30px] font-semibold hover:text-[32px] hover:duration-[0.5s]">Contact</a>
                        </li>
                        <li className="absolute top-[95%] flex gap-x-[20px]">
                        <a href="https://www.facebook.com/profile.php?id=61567582160653" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" className="w-[25px] h-[25px] rounded-full" />
                        </a>
                        <a href="https://github.com/Mohammed-Wael-dev" target="_blank" rel="noopener noreferrer">
                         <img src={github} alt="GitHub" className="w-[25px] h-[25px] rounded-full bg-black" />
                        </a>
                        <a href="mailto:mohwael.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={mail} alt="Email" className="w-[25px] h-[25px] rounded-full" />
                        </a>
                        <a href="https://www.linkedin.com/in/mohammed-wael-react/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="w-[25px] h-[25px] rounded-full" />
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}