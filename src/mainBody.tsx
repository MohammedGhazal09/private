import Header from "./Components/header"
import LandingSection from "./Components/landingSection"
import Sidebar from "./Components/sidebar"
import FirstMountain from "./Components/firstMountain"
import SecondMountain from "./Components/secondMountain"
import Portfolio from "./Components/portfolio"
import PortfolioItems from "./Components/subComponents/portfolioItems";

export default function MainBody() {
    return(
        <div className="select-none min-h-screen bg-[#0b0c1b]">
            <Sidebar/>
            
            {/* Home Section */}
            <section className="relative  bg-[#0b0c1b] snap-start snap-always">
                <Header/>
                <LandingSection/>
            </section>
            
            {/* Skills Section */}
            <section className="h-screen snap-start">
                <FirstMountain/>
            </section>
            
            {/* Projects Section */}
            <section className="h-screen snap-start">
                <SecondMountain/>
            </section>
            
            {/* Portfolio Section */}
            <section className=" snap-start">
                <Portfolio/>
            </section>
            <section className="h-screen snap-start">
                <PortfolioItems/>
            </section>
        </div>
    )
}