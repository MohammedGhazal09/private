import Header from "./Components/header"
import LandingSection from "./Components/landingSection"
import Sidebar from "./Components/sidebar"
import FirstMountain from "./Components/firstMountain"
import SecondMountain from "./Components/secondMountain"
import Portfolio from "./Components/portfolio"
import PortfolioItems from "./Components/subComponents/portfolioItems";
import Contact from "./Components/contact/contact";

export default function MainBody() {
    return(
        <div className="select-none min-h-screen bg-[#0b0c1b] snap-y snap-mandatory overflow-x-hidden overflow-y-scroll h-screen">
            <Sidebar/>
            
            <section className="relative bg-[#0b0c1b] snap-start ">
                <Header/>
                <LandingSection/>
            </section>
            
            <section className="h-screen snap-start">
                <FirstMountain/>
            </section>
            
            <section className="h-screen snap-start">
                <SecondMountain/>
            </section>
            
            <section className="snap-start">
                <Portfolio/>
            </section>
            
            <PortfolioItems/>

            <section className="h-screen snap-start">
                <Contact/>
                </section>
        </div>
    )
}