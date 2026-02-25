import {SectionTitle} from "./shared/SectionTitle.tsx";
import {Globe, GraduationCap} from "lucide-react";
import {GlassCard} from "./shared/GlassCard.tsx";
import {Badge} from "./shared/Badge.tsx";

export const EducationSection = () => {
    return (
        <section className={"my-12"}>
            <SectionTitle icon={GraduationCap} title="Education & Languages" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="md:col-span-2 flex flex-col justify-center">
                    <div className="relative pl-8 border-l-2 border-purple-500/30 mb-8">
                        <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                        <h4 className="text-xl font-bold text-white mb-1">Computer Systems Engineering</h4>
                        <p className="text-cyan-300 font-medium mb-1">Instituto Tecnológico de Morelia</p>
                        <Badge color="slate">2022 - Present</Badge>
                    </div>

                    <div className="relative pl-8 border-l-2 border-slate-700">
                        <div className="absolute w-4 h-4 bg-slate-600 rounded-full -left-[9px] top-1"></div>
                        <h4 className="text-lg font-bold text-white mb-1">IT Technician</h4>
                        <p className="text-slate-400 mb-1">COBAEM</p>
                        <Badge color="slate">2018 - 2021</Badge>
                    </div>
                </GlassCard>

                <GlassCard className="flex flex-col">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700/50">
                        <Globe className="text-cyan-400 w-6 h-6" />
                        <h4 className="text-xl font-bold text-white">Languages</h4>
                    </div>

                    <div className="space-y-4 flex-grow flex flex-col justify-center">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-200 font-medium">Spanish</span>
                            <Badge color="purple">Native</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-200 font-medium">English</span>
                            <Badge color="cyan">B2</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-200 font-medium">German</span>
                            <Badge color="slate">A1 - A2</Badge>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    )

}