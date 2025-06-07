import Header from "./Components/header"
import LandingSection from "./Components/landingSection"
import Sidebar from "./Components/sidebar"
import FirstMountain from "./Components/firstMountain"
import SecondMountain from "./Components/secondMountain"
import Portfolio from "./Components/portfolio"
export default function MainBody() {
    return(
        <div className="select-none min-h-screen bg-[#0b0c1b]">
            <Sidebar/>
            <Header/>
            <LandingSection/>
            <FirstMountain/>
            <SecondMountain/>
            <Portfolio/>
        </div>
        )
}