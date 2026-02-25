import './App.css'
import {HeroSection} from "./components/HeroSection.tsx";
import Starfield from "./components/Starfield.tsx";
import {InfoSection} from "./components/InfoSection.tsx";
import {ExperienceSection} from "./components/ExperienceSection.tsx";

function App() {

  return (
      <div className="min-h-screen text-slate-200 font-sans selection:bg-purple-500/30">
        <HeroSection></HeroSection>
        <InfoSection></InfoSection>
        <Starfield></Starfield>
          <ExperienceSection></ExperienceSection>

      </div>
  )
}

export default App
