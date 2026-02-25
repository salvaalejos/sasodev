import {SectionTitle} from "./shared/SectionTitle.tsx";
import {Code, User} from "lucide-react";
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
                <div className="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                    <Code className="w-12 h-12 text-cyan-300" />
                </div>
            </GlassCard>
        </section>
    )
}