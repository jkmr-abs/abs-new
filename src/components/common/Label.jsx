function Label({ number, label, className = '' }) {
  return (
    <div data-element="SectionLabel" className={`mb-[18px] flex min-h-[17px] items-center gap-[11px] text-[11px] font-medium uppercase tracking-[0.16em] text-abs-muted lg:mb-[27px] lg:min-h-[19px] lg:text-xs ${className}`}>
      {number && <span data-element="SectionIndex" className="font-display text-[11px] tracking-[0.02em] text-abs-orange">{number}</span>}
      <i className="block h-px w-[27px] shrink-0 bg-abs-orange opacity-70" />
      <span>{label}</span>
      <i className="block h-px w-[27px] shrink-0 bg-abs-orange opacity-70" />
    </div>
  );
}

export default Label;
