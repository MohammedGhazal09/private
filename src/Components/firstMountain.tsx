import mountains from '../assets/Imgs/mountains.webp';
import planets from '../assets/Imgs/planets.webp';
import mountainStyle from '../style/mountain.module.css';
import useScrollTrigger from '../hooks/scrollTrigger';

import { useRef,useEffect } from 'react';
export default function FirstMountain() {
    const [ref, isVisible] = useScrollTrigger();
    const firstMountainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleScroll = () => {
            if (firstMountainRef.current) {
                // const top = firstMountainRef.current.getBoundingClientRect().top;
                // const windowHeight = window.innerHeight;
                // firstMountainRef.current.style.transform = `translateX(${top}px)`;
            }
        };
        console.log(ref.current);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <div id='skills' ref={ref} className={`${mountainStyle.firstMountainContainer} relative w-full h-screen bg-[url(/src/assets/Imgs/stars.webp)] overflow-x-hidden`}>
            <div ref={firstMountainRef} className={`${isVisible ? mountainStyle.starsContainer: 'hidden'}`}>
                <img loading='lazy' src={planets} alt="planets" className='z-1 px-[50px]'/>
                <h2 className="text-white text-center w-full text-[8vw] font-bold z-1 mb-[5%]">My Skills</h2>
            </div>
            <img loading='lazy' src={mountains} alt="mountains" className="absolute bottom-0 object-contain z-0"/>
        </div>
    )
}