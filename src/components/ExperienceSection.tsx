import { SectionTitle } from "./shared/SectionTitle.tsx";
import {
    BriefcaseIcon,
    ShieldCheck,
    TrendingDown,
    Zap,
    Server,
    Code,
    Terminal,
    Users,
    Globe,
    GraduationCap,
    Database,
    TrendingUp,
    Handshake
} from "lucide-react";
import { GlassCard } from "./shared/GlassCard.tsx";
import { Metric } from "./shared/Metric.tsx";
import { FeatureItem } from "./shared/FeaturedItem.tsx";
import { Badge } from "./shared/Badge.tsx";

export const ExperienceSection = () => {
    return (
        <section className="my-12">
            <SectionTitle icon={BriefcaseIcon} title="Experience" />

            <div className="space-y-8">
                {/* ORVION TECHNOLOGIES */}
                <GlassCard>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Co-Founder & Lead Developer</h3>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-purple-400 text-lg font-medium">Orvion Technologies</span>
                                <Badge color="slate">Software & Tech Consulting</Badge>
                            </div>
                        </div>
                        <Badge color="purple">2023 - Present</Badge>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <Metric icon={TrendingUp} value="60%" label="More Production" />
                        <Metric icon={Server} value="VPS" label="Migration" />
                        <Metric icon={Zap} value="SaaS" label="Full Stack Build" />
                        <Metric icon={ShieldCheck} value="Linux" label="Prod Security" />
                    </div>

                    {/* Details */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="font-semibold text-cyan-300 flex items-center gap-2 border-b border-slate-700/50 pb-2">
                                <Database className="w-5 h-5" /> Caballo de Hierro SaaS
                            </h4>
                            <FeatureItem icon={Code} text="Built a comprehensive Full Stack platform (Web & Mobile) for survey management and analysis." />
                            <FeatureItem icon={Terminal} text="Automated report generation using Python (Pandas + OpenPyXL)." />
                            <FeatureItem icon={TrendingDown} text="Optimized infrastructure: Migrated from Hostinger VPS to DigitalOcean Droplet." />
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-cyan-300 flex items-center gap-2 border-b border-slate-700/50 pb-2">
                                <Server className="w-5 h-5" /> Production Environments
                            </h4>
                            <FeatureItem icon={Terminal} text="Ubuntu Server administration, configuring Nginx & Gunicorn." />
                            <FeatureItem icon={ShieldCheck} text="Implemented essential security protocols (Firewall, secure SSH)." />
                            <FeatureItem icon={Zap} text="Incident diagnosis and resolution through advanced log analysis." />
                        </div>
                    </div>
                </GlassCard>

                {/* STUDENT COUNCIL (CEITM) */}
                <GlassCard>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Partnerships Coordinator</h3>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-purple-400 text-lg font-medium">Student Council (ITM)</span>
                                <Badge color="slate">Concejal</Badge>
                            </div>
                        </div>
                        <Badge color="cyan">2025 - Present</Badge> {/* Le agregué el badge para que se vea simétrico con la otra tarjeta */}
                    </div>

                    {/* Nuevas Metrics para el CEITM */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <Metric icon={Handshake} value="+4" label="New Partnerships" />
                        <Metric icon={TrendingDown} value="-25%" label="Event Costs" />
                    </div>

                    {/* Details */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <FeatureItem icon={Users} text="Managed multidisciplinary teams and institutional logistics." />
                        <FeatureItem icon={Globe} text="Facilitated partnerships and sponsorships with the private sector." />
                        <FeatureItem icon={GraduationCap} text="Coordinated academic and technological innovation events." />
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}