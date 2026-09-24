import { ChevronDown } from 'lucide-react';

function SectionBlock({ id, number, eyebrow, title, description, children, action, className = '' }) {
  return (
    <section id={id} className={`relative h-screen w-screen snap-start snap-always ${className}`}>
      <div className="mx-auto grid h-full w-[88vw] grid-cols-1 grid-rows-[auto_1fr] items-center gap-6 py-[92px] lg:w-[89vw] lg:grid-cols-2 lg:grid-rows-1 lg:gap-[clamp(36px,7vw,124px)] lg:py-[76px] lg:pb-5">
        <div className="relative z-10 max-w-[520px] self-start lg:self-auto">
          <div className="mb-[18px] flex items-center gap-[11px] text-[10px] font-medium uppercase tracking-[0.16em] text-abs-muted lg:mb-[27px]">
            <span className="font-display text-[11px] tracking-[0.02em] text-abs-orange">{number}</span>
            <i className="block h-px w-[27px] bg-abs-orange opacity-70" />
            {eyebrow}
          </div>
          <h2 className="max-w-[620px] font-display text-[clamp(41px,12vw,62px)] font-medium leading-[0.98] tracking-[-0.075em] text-abs-text [&_em]:not-italic [&_em]:text-abs-orange lg:text-[clamp(45px,5.55vw,83px)]" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="my-[18px] max-w-[400px] text-xs leading-[1.55] text-abs-muted lg:my-[29px] lg:mb-[31px] lg:text-sm lg:leading-[1.7]">{description}</p>
          {action}
        </div>
        <div className="min-w-0 h-full lg:h-auto" aria-label={`${eyebrow} visual placeholder`}>
          {children}
        </div>
      </div>
      <div className="absolute bottom-[27px] left-[5.5vw] hidden items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-abs-muted/55 lg:flex">
        <span>Scroll to explore</span><ChevronDown className="animate-float text-abs-orange" size={14} />
      </div>
    </section>
  );
}

export default SectionBlock;
