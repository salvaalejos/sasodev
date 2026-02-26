import {Download, Mail, Phone, MapPin, Instagram} from "lucide-react";

export const HeroSection = () => {
    return (
        <header className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-600/20 rounded-full blur-[80px] -z-10"></div>

            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-white">
                Salvador Alejos Soria
            </h1>
            <p className="text-xl sm:text-2xl font-light text-cyan-200 mb-8 max-w-2xl flex flex-col sm:flex-row items-center justify-center gap-2">
                <span>Computer Systems Engineering Student</span>
                <span className="hidden sm:inline text-slate-500">|</span>
                <span>Freelance Developer</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base text-slate-400 mb-10">
                <a href="https://maps.app.goo.gl/tHqioMEZidFAfur48" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                    <MapPin className="w-4 h-4 text-purple-400" /> Morelia, Michoacán
                </a>
                <a href="mailto:alejossalvador@gmail.com" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-purple-400" /> alejossalvador@gmail.com
                </a>
                <a href="https://wa.me/4381126867" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-purple-400" /> 438 112 6867
                </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="https://wa.me/4381126867"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#22bf5b] text-white px-6 py-3 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] cursor-pointer"
                >
                    <Phone className="w-5 h-5" />
                    WhatsApp
                </a>
                <a href="https://drive.google.com/file/d/15vpSn9Manb6x_2NA2BhWJwCNETVmg2cP/view?usp=sharing" target="_blank" className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-400 text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                    <Download className="w-5 h-5" /> Download CV
                </a>
                <div className="flex gap-2">
                    <a href="https://www.instagram.com/saalvaalejos" target="_blank" className="flex items-center justify-center w-12 h-12 bg-slate-800/50 hover:bg-pink-600 border border-slate-700 backdrop-blur-sm rounded-full transition-all text-white hover:border-pink-400 hover:shadow-[0_0_15px_rgba(211,34,138,0.5)]">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </header>
    );
};