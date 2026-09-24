function Logo() {
  return (
    <a className="inline-flex items-center gap-2.5 font-display text-[21px] font-semibold tracking-[-0.08em]" href="#home" aria-label="ABS home">
      <span className="flex h-[21px] -skew-x-[18deg] items-center gap-0.5">
        <span className="h-[11px] w-1 bg-abs-orange/55" />
        <span className="h-[17px] w-1 bg-abs-orange/80" />
        <span className="h-[21px] w-1 bg-abs-orange" />
      </span>
      <span>ABS<span className="text-abs-orange">.</span></span>
    </a>
  );
}

export default Logo;
