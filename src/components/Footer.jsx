import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { navItems } from './navigation';

function Footer({ onNavigate }) {
  return (
    <section id="footer" data-section-component="GlobalFooter" className="flex h-screen w-screen snap-start snap-always flex-col justify-between bg-[radial-gradient(circle_at_75%_75%,rgba(255,103,29,0.1),transparent_26rem),#08090c] pb-[22px] pt-[88px] md:pb-[30px] md:pt-[111px]">
      <div className="mx-auto grid w-[88vw] grid-cols-1 justify-items-end text-[9px] uppercase tracking-[0.14em] text-abs-muted/55 md:w-[89vw]">
        <span>Let’s make something matter.</span>
      </div>

      <div className="mx-auto grid w-[88vw] grid-cols-1 gap-12 md:w-[89vw] md:gap-0">
        <div data-component="FooterContactBlock">
          <div data-element="FooterSectionLabel" className="mb-[21px] flex items-center gap-[11px] text-[11px] font-medium uppercase tracking-[0.16em] text-abs-muted md:text-xs">
            <span className="font-display text-[11px] tracking-[0.02em] text-abs-orange">06</span>
            <i className="block h-px w-[27px] shrink-0 bg-abs-orange opacity-70" />
            <span>Get in touch</span>
            <i className="block h-px w-[27px] shrink-0 bg-abs-orange opacity-70" />
          </div>
          <h2 className="font-display text-[54px] font-medium leading-[0.98] tracking-[-0.075em] text-abs-text md:text-[clamp(52px,7vw,104px)]">
            Have a good<br /><em className="not-italic text-abs-orange">feeling?</em>
          </h2>
          <a className="mt-[23px] inline-flex items-center gap-2 border-b border-abs-orange pb-[7px] text-[13px] text-abs-orange-soft md:mt-[35px]" href="mailto:hello@abs.studio">
            hello@abs.studio <ArrowUpRight size={18} className="text-abs-orange" />
          </a>
        </div>
      </div>

      <div className="mx-auto grid w-[88vw] grid-cols-1 gap-10 md:w-[89vw] md:grid-cols-[minmax(130px,0.7fr)_minmax(0,1.3fr)] md:items-end md:gap-8 lg:gap-[clamp(55px,7vw,110px)]">
        <div data-component="FooterBrandBlock" className="flex flex-col items-start gap-3 md:self-start">
          <Logo />
          <span className="text-[10px] leading-[1.6] text-abs-muted md:text-[11px]">45 Walker Street<br />New York, NY 10013</span>
        </div>
        <div data-component="FooterResourceGrid" className="grid grid-cols-2 gap-8">
          <div data-component="FooterQuickLinks" className="flex min-w-[90px] flex-col gap-3">
            <span data-element="FooterResourceLabel" className="mb-1.5 text-[9px] uppercase tracking-[0.14em] text-abs-orange">Quick links</span>
            {navItems.map((item) => <button className="inline-flex w-max items-center gap-[7px] bg-transparent p-0 text-xs text-abs-muted transition hover:text-abs-orange" key={item.id} onClick={() => onNavigate(item.id)}>{item.label}</button>)}
          </div>
          <div data-component="FooterSocialLinks" className="flex min-w-[90px] flex-col gap-3">
            <span data-element="FooterResourceLabel" className="mb-1.5 text-[9px] uppercase tracking-[0.14em] text-abs-orange">Elsewhere</span>
            <a className="inline-flex w-max items-center gap-[7px] text-xs text-abs-muted transition hover:text-abs-orange" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
            <a className="inline-flex w-max items-center gap-[7px] text-xs text-abs-muted transition hover:text-abs-orange" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </div>

      <div data-component="FooterLegalBar" className="mx-auto grid w-[88vw] grid-cols-2 items-start gap-2 border-t border-white/[0.13] pt-[15px] text-[7px] tracking-[0.08em] text-[#858b96] md:w-[89vw] md:items-center md:pt-[21px] md:text-[9px]">
        <span>© 2024 Abstract Business System. All rights reserved.</span>
        <div className="flex flex-row items-center justify-end gap-4 text-right">
          <a className="transition hover:text-abs-orange" href="#privacy">Privacy policy</a>
          <a className="transition hover:text-abs-orange" href="#terms">Terms &amp; conditions</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
