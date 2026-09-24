import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { navItems } from './navigation';

function Footer({ onNavigate }) {
  return (
    <section id="footer" className="flex h-screen w-screen snap-start snap-always flex-col justify-between bg-[radial-gradient(circle_at_75%_75%,rgba(255,103,29,0.1),transparent_26rem),#08090c] pb-[22px] pt-[88px] md:pb-[30px] md:pt-[111px]">
      <div className="mx-auto grid w-[88vw] grid-cols-1 justify-items-end text-[9px] uppercase tracking-[0.14em] text-abs-muted/55 md:w-[89vw]"><span>Let’s make something matter.</span></div>
      <div className="mx-auto grid w-[88vw] grid-cols-1 gap-12 pb-5 md:w-[89vw] md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-[clamp(55px,9vw,150px)] md:pb-[30px]">
        <div>
          <div className="mb-[21px] flex items-center gap-[11px] text-[10px] font-medium uppercase tracking-[0.16em] text-abs-muted"><span className="font-display text-[11px] tracking-[0.02em] text-abs-orange">06</span><i className="block h-px w-[27px] bg-abs-orange opacity-70" />Get in touch</div>
          <h2 className="font-display text-[54px] font-medium leading-[0.98] tracking-[-0.075em] text-abs-text md:text-[clamp(52px,7vw,104px)]">Have a good<br /><em className="not-italic text-abs-orange">feeling?</em></h2>
          <a className="mt-[23px] inline-flex items-center gap-2 border-b border-abs-orange pb-[7px] text-[13px] text-abs-orange-soft md:mt-[35px]" href="mailto:hello@abs.studio">hello@abs.studio <ArrowUpRight size={18} className="text-abs-orange" /></a>
        </div>
        <div className="mt-0 grid grid-cols-2 gap-[50px] pb-[5px] md:gap-[clamp(55px,9vw,150px)]">
          <div className="flex min-w-[90px] flex-col gap-3"><span className="mb-1.5 text-[9px] uppercase tracking-[0.14em] text-abs-muted/45">Explore</span>{navItems.map((item) => <button className="inline-flex w-max items-center gap-[7px] bg-transparent p-0 text-xs text-abs-muted transition hover:text-abs-orange" key={item.id} onClick={() => onNavigate(item.id)}>{item.label}</button>)}</div>
          <div className="flex min-w-[90px] flex-col gap-3"><span className="mb-1.5 text-[9px] uppercase tracking-[0.14em] text-abs-muted/45">Elsewhere</span><a className="inline-flex w-max items-center gap-[7px] text-xs text-abs-muted transition hover:text-abs-orange" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a className="inline-flex w-max items-center gap-[7px] text-xs text-abs-muted transition hover:text-abs-orange" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a></div>
        </div>
      </div>
      <div className="mx-auto grid w-[88vw] grid-cols-2 items-center gap-3 border-t border-white/[0.13] pt-[15px] text-[7px] tracking-[0.08em] text-[#858b96] md:w-[89vw] md:grid-cols-3 md:pt-[21px] md:text-[9px]">
        <div className="flex items-center gap-2.5 md:gap-[22px]"><div><Logo /></div><span className="text-[7px] leading-[1.5] md:text-[8px]">45 Walker Street<br />New York, NY 10013</span></div>
        <span className="col-span-2 text-left md:col-span-1 md:text-center">© 2024 ABS Studio. All rights reserved.</span>
        <span className="col-start-2 row-start-1 text-right">New York · London · Everywhere</span>
      </div>
    </section>
  );
}

export default Footer;
