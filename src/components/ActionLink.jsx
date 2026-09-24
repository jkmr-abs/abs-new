import { ArrowUpRight } from 'lucide-react';

function ActionLink({ children, onClick }) {
  return (
    <button className="group inline-flex items-center gap-3.5 bg-transparent text-xs font-medium tracking-[0.02em] text-abs-text" onClick={onClick}>
      {children}
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-abs-orange/55 text-abs-orange transition group-hover:rotate-45 group-hover:bg-abs-orange group-hover:text-abs-ink">
        <ArrowUpRight size={16} />
      </span>
    </button>
  );
}

export default ActionLink;
