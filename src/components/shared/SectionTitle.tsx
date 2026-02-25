import type {LucideIcon} from "lucide-react";

type SectionTitleProps = {
    icon: LucideIcon;
    title: string;
};

export const SectionTitle = ({ icon: Icon, title }: SectionTitleProps) => (
    <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
            {title}
        </h2>
    </div>
);