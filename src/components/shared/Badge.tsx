export const Badge = ({ children, color = "cyan" }) => {
    const colors = {
        cyan: "bg-cyan-950/50 text-cyan-300 border-cyan-800/50 shadow-[0_0_10px_rgba(6,182,212,0.1)]",
        purple: "bg-purple-950/50 text-purple-300 border-purple-800/50 shadow-[0_0_10px_rgba(168,85,247,0.1)]",
        slate: "bg-slate-800/50 text-slate-300 border-slate-700/50"
    };

    return (
        <span className={`px-3 py-1 text-xs font-medium border rounded-full ${colors[color]}`}>
      {children}
    </span>
    );
};