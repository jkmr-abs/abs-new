function Logo({ className = '' }) {
  return (
    <a className={`inline-flex items-center gap-3 ${className}`} href="#home" aria-label="Abstract Business Systems home">
      <img className="h-10 w-auto object-contain md:h-12" src="/logo.svg" alt="" aria-hidden="true" />
      <span className="flex flex-col font-display leading-none">
        <span className="text-[17px] font-medium tracking-[-0.06em] text-abs-text md:text-[19px]">Abstract</span>
        <span className="mt-1 text-[8px] font-medium tracking-[0.13em] text-abs-orange md:text-[9px]">Business Systems</span>
      </span>
    </a>
  );
}

export default Logo;
