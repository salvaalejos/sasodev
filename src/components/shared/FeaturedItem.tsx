import type {LucideIcon} from "lucide-react";

type FeaturedItemProps = {
    icon: LucideIcon;
    text: string;
};


export const FeatureItem = ({ icon: Icon, text } : FeaturedItemProps) => (
    <div className="flex items-start gap-3">
        <div className="mt-1 p-1 bg-cyan-500/10 rounded border border-cyan-500/20 shrink-0">
            <Icon className="w-4 h-4 text-cyan-400" />
        </div>
        <span className="text-sm text-slate-300 leading-relaxed">{text}</span>
    </div>
);