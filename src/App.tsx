import { useEffect, useState } from 'react';
import './App.css'
import { HeroSection } from "./components/HeroSection.tsx";
import Starfield from "./components/Starfield.tsx";
import { InfoSection } from "./components/InfoSection.tsx";
import { ExperienceSection } from "./components/ExperienceSection.tsx";
import { ProjectsSection } from "./components/ProjectsSection.tsx";
import { StackSection } from "./components/StackSection.tsx";
import { EducationSection } from "./components/EducationSection.tsx";
import { NavBar } from "./components/NavBar.tsx";
import { SideMenu } from "./components/SideMenu.tsx";

function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 150);

            const sections = ['home', 'profile', 'experience', 'projects', 'skills', 'education'];
            let current = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 250 && rect.bottom >= 250) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen text-slate-200 font-sans selection:bg-purple-500/30 scroll-smooth">

            <Starfield/>

            <NavBar scrolled={scrolled} />
            <SideMenu activeSection={activeSection} scrolled={scrolled} />

            {/* ¡AQUÍ ESTÁ LA SOLUCIÓN! Envolvemos el contenido en este main */}
            <main className="max-w-6xl mx-auto px-6 w-full pb-20">
                <div id="home"><HeroSection/></div>
                <div id="profile"><InfoSection/></div>
                <div id="experience"><ExperienceSection/></div>
                <div id="projects"><ProjectsSection/></div>
                <div id="skills"><StackSection/></div>
                <div id="education"><EducationSection/></div>
            </main>

        </div>
    )
}

export default App