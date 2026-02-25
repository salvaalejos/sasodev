import {SectionTitle} from "./shared/SectionTitle.tsx";
import {GlassCard} from "./shared/GlassCard.tsx";
import {
    BriefcaseIcon,
    Cloud,
    Code,
    ExternalLink, GraduationCap,
    Layout,
    MapPin, PlaneTakeoff,
    Server,
    Smartphone,
    Terminal, TrendingDown, TrendingUp,
    Users, Zap
} from "lucide-react";
import {Badge} from "./shared/Badge.tsx";
import {FeatureItem} from "./shared/FeaturedItem.tsx";

export const ProjectsSection = () => {
    return (
        <section className={"my-12"}>
            <SectionTitle icon={Code} title="Featured Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Meta Portfolio Project */}
                <GlassCard className="flex flex-col group relative">
                    <div className="h-32 bg-gradient-to-r from-slate-900/80 to-purple-900/40 rounded-xl mb-6 flex items-center justify-center border border-slate-700/50 group-hover:border-purple-500/50 transition-colors relative overflow-hidden">
                        <div className="absolute inset-0 bg-noise opacity-10"></div>
                        <BriefcaseIcon className="w-12 h-12 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-white">Portfolio made with React</h3>
                        <Badge color="cyan">Live</Badge>
                    </div>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                        The interactive web application you are currently browsing.
                    </p>
                    <div className="space-y-2 mb-6">
                        <FeatureItem icon={Code} text="Built entirely with modern React and interactive Canvas styling." />
                        <FeatureItem icon={Layout} text="Responsive Glassmorphism UI using Tailwind CSS." />
                    </div>

                    <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-slate-800">
                        <div className="flex flex-wrap gap-2">
                            <Badge>React</Badge> <Badge>Tailwind</Badge>
                        </div>
                        <a target="_blank" href="https://github.com/salvaalejos/sasodev" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium self-start">
                            See more <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </GlassCard>

                {/* UniRoom */}
                <GlassCard className="flex flex-col group relative">
                    <div className="h-32 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl mb-6 flex items-center justify-center border border-slate-700/50 group-hover:border-cyan-500/50 transition-colors relative overflow-hidden">
                        <div className="absolute inset-0 bg-noise opacity-10"></div>
                        <Smartphone className="w-12 h-12 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-white">UniRoom</h3>
                        <Badge color="purple">In Dev</Badge>
                    </div>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                        Mobile application for secure university housing rentals.
                    </p>
                    <div className="space-y-2 mb-6">
                        <FeatureItem icon={Code} text="Clean Architecture in Flutter for maximum scalability." />
                        <FeatureItem icon={MapPin} text="NextJS REST API with PostgreSQL" />
                        <FeatureItem icon={Cloud} text="Firebase (Auth/Push) & AWS S3 integration." />
                    </div>

                    <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-slate-800">
                        <div className="flex flex-wrap gap-2">
                            <Badge>React-Native</Badge> <Badge>NextJS</Badge> <Badge>PostgresSQL</Badge>
                        </div>
                        <a target="_blank" href="https://github.com/salvaalejos/uniroom" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium self-start">
                            See more <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </GlassCard>

                {/* Subscriptions */}
                <GlassCard className="flex flex-col group relative">
                    <div className="h-32 bg-gradient-to-r from-slate-800/80 to-purple-900/30 rounded-xl mb-6 flex items-center justify-center border border-slate-700/50 group-hover:border-purple-500/50 transition-colors">
                        <Users className="w-12 h-12 text-cyan-300 drop-shadow-[0_0_10px_rgba(216,180,254,0.5)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Subscription Manager</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                        Desktop client architecture following MVC and OOP principles.
                    </p>
                    <div className="space-y-2 mb-6">
                        <FeatureItem icon={Terminal} text="Java (Swing) frontend with structured JSON data handling." />
                        <FeatureItem icon={Server} text="PHP RESTful Backend for user & membership operations." />
                    </div>

                    <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-slate-800">
                        <div className="flex flex-wrap gap-2">
                            <Badge>Java (Swing)</Badge> <Badge>PHP</Badge> <Badge>MVC</Badge>
                        </div>
                        <a target="_blank" href="https://github.com/salvaalejos/suscripcionesPHP" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium self-start">
                            See more <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </GlassCard>

                {/* Simio */}
                <GlassCard className="flex flex-col group relative">
                    <div className="h-32 bg-gradient-to-r from-cyan-900/30 to-slate-800/80 rounded-xl mb-6 flex items-center justify-center border border-slate-700/50 group-hover:border-cyan-500/50 transition-colors">
                        <PlaneTakeoff className="w-12 h-12 text-slate-300 drop-shadow-[0_0_10px_rgba(148,163,184,0.5)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Airport Logistics Sim</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                        Discrete event simulation model for passenger flows in an airport terminal using SIMIO.
                    </p>
                    <div className="space-y-2 mb-6">
                        <FeatureItem icon={TrendingDown} text="Identified bottlenecks in Check-in & Security." />
                        <FeatureItem icon={Zap} text="Evaluated optimization & improvement scenarios." />
                    </div>

                    <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-slate-800">
                        <div className="flex flex-wrap gap-2">
                            <Badge color="slate">SIMIO</Badge> <Badge color="slate">Data Analysis</Badge>
                        </div>
                    </div>
                </GlassCard>

                {/*CEITM-Web*/}
                <GlassCard className="flex flex-col group relative">
                    <div className="h-32 bg-gradient-to-r from-red-800 to-red-950 rounded-xl mb-6 flex items-center justify-center border border-slate-700/50 group-hover:border-cyan-500/50 transition-colors">
                        <GraduationCap className="w-12 h-12 text-gray-400 drop-shadow-[0_0_10px_rgba(148,163,184,0.5)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">CEITM - Web Platform</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                        Web platform for managing academic and administrative processes for the ITM council and for students, this include easy management for scholarships ,
                         news, events, transparency, and for the admin part the platform have, an easy dashboard divided per roles, example if you're new, you can't edit the users.
                    </p>
                    <div className="space-y-2 mb-6">
                        <FeatureItem icon={TrendingUp} text="Better performance" />
                        <FeatureItem icon={Zap} text="Easy to use for students" />
                    </div>

                    <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-slate-800">
                        <div className="flex flex-wrap gap-2">
                            <Badge color="purple">React</Badge> <Badge color="purple">Python - FastAPI</Badge> <Badge color="cyan">Docker</Badge>
                            <Badge color="cyan">PostgresSQL</Badge>
                        </div>
                        <a href={"https://ceitm.ddnsking.com"} target="_blank" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium self-start">
                            See live <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </GlassCard>

            </div>
        </section>
    )
}