import {SectionTitle} from "./shared/SectionTitle.tsx";
import {User} from "lucide-react";
import {GlassCard} from "./shared/GlassCard.tsx";

export const InfoSection = () => {
    return (
        <section className={"my-12"}>
            <GlassCard className="relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center gap-8">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[60px]"></div>
                <div className="flex-1">
                    <SectionTitle title="About Me" icon={User} />
                    <p className="text-slate-300 leading-relaxed text-lg font-light">
                        Computer Systems Engineer and tech co-founder specializing in Full Stack development,
                        modern web architectures, and Cross-Platform Mobile applications.
                        With hands-on experience managing production environments,
                        <span className="text-cyan-300 font-medium"> networking</span>, and executing cloud
                        infrastructure migrations, I bridge the gap between complex technical requirements and
                        strategic business goals. My core stack includes <span className="text-purple-300 font-medium">
                        React, Python, Java, and Flutter</span>,
                        driven by a constant focus on scalability and operational efficiency.
                    </p>
                </div>

                {/* CONTENEDOR DE LA IMAGEN TIPO RETRATO */}
                <div className="w-48 h-64 sm:w-56 sm:h-72 flex-shrink-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl flex items-end justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)] overflow-hidden relative">
                    {/* Efecto de brillo detrás de ti (opcional) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-0"></div>

                    <img
                        src="/src/images/me.png"
                        alt="Mi perfil"
                        className="w-full h-full object-contain object-bottom drop-shadow-2xl relative z-10"
                    />
                </div>

            </GlassCard>
        </section>
    )
}