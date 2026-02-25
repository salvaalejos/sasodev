import { Github, Linkedin } from 'lucide-react';

// Definimos los tipos de los props que recibe el componente
interface NavBarProps {
    scrolled: boolean;
}

export const NavBar = ({ scrolled }: NavBarProps) => {
    // Función local para hacer el scroll suave
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

                {/* LOGO AREA */}
                <div
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => scrollToSection('home')}
                >
                    <div className="w-50 h-20 rounded-xl p-[1px] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex-shrink-0">
                        <div className="w-full h-full rounded-xl flex items-center justify-center overflow-hidden">
                            <img src="/src/images/logo-sasodev.png" alt="SaSoDev Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>

                {/* REDES SOCIALES */}
                <div className="flex gap-4 items-center">
                    <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </nav>
    );
};