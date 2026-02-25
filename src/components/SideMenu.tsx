import { User, Briefcase, Code, Layers, GraduationCap } from 'lucide-react';

// Definimos los tipos de los props
interface SideMenuProps {
    activeSection: string;
    scrolled: boolean;
}

export const SideMenu = ({ activeSection, scrolled }: SideMenuProps) => {
    // Función local para hacer el scroll suave
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Arreglo de configuración del menú
    const navItems = [
        { id: 'profile', icon: User, label: 'Profile' },
        { id: 'experience', icon: Briefcase, label: 'Experience' },
        { id: 'projects', icon: Code, label: 'Projects' },
        { id: 'skills', icon: Layers, label: 'Skills' },
        { id: 'education', icon: GraduationCap, label: 'Education' }
    ];

    return (
        <div className={`fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 hidden sm:block ${scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
            <div className="flex flex-col gap-2 sm:gap-3 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 p-1.5 sm:p-2 rounded-full shadow-[0_0_25px_rgba(0,0,0,0.5)]">
                {navItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="relative group p-2 sm:p-3 rounded-full transition-all flex items-center justify-center"
                            aria-label={`Go to ${item.label}`}
                        >
                            {/* Fondo del ícono activo */}
                            <div className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive ? 'bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/50 scale-100' : 'scale-0'}`}></div>

                            {/* Ícono */}
                            <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-colors duration-300 ${isActive ? 'text-cyan-300' : 'text-slate-500 group-hover:text-slate-300'}`} />

                            {/* Tooltip (Etiqueta al pasar el mouse) */}
                            <div className="absolute left-full ml-4 px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-xs font-medium text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-xl">
                                {item.label}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};