import facebook from "../assets/Imgs/Facebook.webp";
import github from "../assets/Imgs/github.webp";
import linkedin from "../assets/Imgs/LinkedInImg.webp";
import mail from "../assets/Imgs/gmail.webp";
import headerStyle from '../style/header.module.css'
export default function Header() {

    return(
        <header id="home" className={`${headerStyle.header} relative flex justify-between py-[30px] mx-[10%] z-[3]`}>
            <h2 style={{fontFamily: "Rough Script, cursive"}} className={`${headerStyle.logo} text-xl font-semibold text-white`}>Mohammed Wael</h2>
            <ul className="flex gap-5 ">
                <li>
                    <a href="https://www.facebook.com/profile.php?id=61567582160653" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" className="w-[25px] h-[25px] rounded-full" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Mohammed-Wael-dev" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className="w-[25px] h-[25px] rounded-full" />
                    </a>
                </li>
                <li>
                    <a href="mailto:mohwael.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={mail} alt="Email" className="w-[25px] h-[25px] rounded-full" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/mohammed-wael-react/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="w-[25px] h-[25px] rounded-full" />
                    </a>
                </li>
            </ul>
        </header>
    )
}