function Logo({ className = '', size = 'default' }) {
  const sizeStyles = size === 'large'
    ? {
      mark: 'h-12 md:h-14',
      name: 'text-[19px] md:text-[22px]',
      descriptor: 'text-[9px] md:text-[10px]',
    }
    : {
      mark: 'h-10 md:h-12',
      name: 'text-[17px] md:text-[19px]',
      descriptor: 'text-[8px] md:text-[9px]',
    };

  return (
    <a className={`inline-flex items-center gap-3 ${className}`} href="#home" aria-label="Abstract Business Systems home">
      <img className={`${sizeStyles.mark} w-auto object-contain`} src="/logo.svg" alt="" aria-hidden="true" />
      <span className="flex flex-col font-display leading-none">
        <span className={`${sizeStyles.name} font-medium tracking-[-0.06em] text-abs-text`}>Abstract</span>
        <span className={`mt-1 ${sizeStyles.descriptor} font-medium tracking-[0.13em] text-abs-orange`}>Business Systems</span>
      </span>
    </a>
  );
}

export default Logo;
