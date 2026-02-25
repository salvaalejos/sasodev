import {SectionTitle} from "./shared/SectionTitle.tsx";
import {Database, Layers, Network, Server, Smartphone, Terminal} from "lucide-react";
import {GlassCard} from "./shared/GlassCard.tsx";
import {Badge} from "./shared/Badge.tsx";

export const StackSection = () => {
    return (
        <section className={"my-12"}>
            <SectionTitle icon={Layers} title="Technical Arsenal" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <GlassCard>
                    <div className="flex items-center gap-3 mb-6">
                        <Smartphone className="text-purple-400 w-6 h-6" />
                        <h4 className="text-xl font-bold text-white">Frontend & Mobile</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Badge color="purple">React (Advanced)</Badge>
                        <Badge>Flutter</Badge>
                        <Badge>Tailwind CSS</Badge>
                        <Badge>JavaScript</Badge>
                        <Badge>HTML5 / CSS3</Badge>
                    </div>
                </GlassCard>

                <GlassCard>
                    <div className="flex items-center gap-3 mb-6">
                        <Terminal className="text-cyan-400 w-6 h-6" />
                        <h4 className="text-xl font-bold text-white">Backend & APIs</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Badge color="purple">Java (Advanced)</Badge>
                        <Badge>Python</Badge>
                        <Badge>FastAPI</Badge>
                        <Badge>Flask</Badge>
                        <Badge>PHP</Badge>
                        <Badge>Dart</Badge>
                    </div>
                </GlassCard>

                <GlassCard>
                    <div className="flex items-center gap-3 mb-6">
                        <Database className="text-cyan-400 w-6 h-6" />
                        <h4 className="text-xl font-bold text-white">Databases & Data</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Badge>PostgreSQL</Badge>
                        <Badge>PostGIS</Badge>
                        <Badge>MySQL</Badge>
                        <Badge>SQL</Badge>
                        <Badge>Pandas (ETL)</Badge>
                    </div>
                </GlassCard>

                <GlassCard>
                    <div className="flex items-center gap-3 mb-6">
                        <Server className="text-purple-400 w-6 h-6" />
                        <h4 className="text-xl font-bold text-white">Cloud & DevOps</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Badge color="cyan">AWS</Badge>
                        <Badge>Linux (Admin)</Badge>
                        <Badge>DigitalOcean</Badge>
                        <Badge>VPS</Badge>
                        <Badge>Nginx</Badge>
                        <Badge>Docker</Badge>
                    </div>
                </GlassCard>

                <GlassCard>
                    <div className="flex items-center gap-3 mb-6">
                        <Network className="text-cyan-400 w-6 h-6" />
                        <h4 className="text-xl font-bold text-white">Networking & Telecom</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Badge>Subnetting</Badge>
                        <Badge>Router Config</Badge>
                        <Badge>LAN / WAN</Badge>
                        <Badge>Protocols</Badge>
                        <Badge>Logistics</Badge>
                    </div>
                </GlassCard>

            </div>
        </section>
    )
}