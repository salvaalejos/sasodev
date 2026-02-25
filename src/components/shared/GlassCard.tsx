export const GlassCard = ({ children, className = "" }) => (
    <div className={`
          bg-slate-900/40 backdrop-blur-md border border-slate-700/50 
            rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] 
          hover:border-purple-500/30 ${className}`}>
        {children}
    </div>
);
