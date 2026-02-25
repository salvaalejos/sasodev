import type {LucideIcon} from "lucide-react";

type MetricProps = {
    icon: LucideIcon;
    value: string;
    label: string;
};


export const Metric = ({ icon: Icon, value, label } : MetricProps) => (
    <div className="flex flex-col items-center justify-center p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl text-center">
        <Icon className="w-6 h-6 text-purple-400 mb-2" />
        <span className="text-2xl font-bold text-white mb-1">{value}</span>
        <span className="text-xs text-slate-400 uppercase tracking-wider">{label}</span>
    </div>
);