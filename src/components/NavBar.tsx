import { Github, Linkedin } from 'lucide-react';

interface NavBarProps {
    scrolled: boolean;
}

export const NavBar = ({ scrolled }: NavBarProps) => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 h-25 flex justify-between items-center">

                {/* LOGO AREA */}
                <button
                    onClick={() => scrollToSection('home')}
                    className="h-12 cursor-pointer hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all rounded-xl hover:bg-[rgba(168,85,247,0.1)]"
                >
                    <img src="/src/images/logo-sasodev.png" alt="SaSoDev Logo" className="h-full w-auto object-contain" />
                </button>

                {/* REDES SOCIALES */}
                <div className="flex gap-5 items-center">
                    <a href="https://linkedin.com/in/salvaalejos" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/salvaalejos" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </nav>
    );
};