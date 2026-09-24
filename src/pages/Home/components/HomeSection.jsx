import { Asterisk } from 'lucide-react';
import Button from '../../../components/Button';
import SectionBlock from '../../../components/SectionBlock';

function CircleMark() {
  return (
    <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-abs-orange shadow-[0_0_35px_rgba(255,103,29,0.4),inset_0_0_25px_rgba(255,103,29,0.16)] lg:h-[115px] lg:w-[115px] before:absolute before:left-1/2 before:top-1/2 before:h-px before:w-[154%] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:bg-abs-orange/30 before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:h-px after:w-[154%] after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-45 after:bg-abs-orange/30 after:content-['']">
      <div className="absolute left-1/2 top-1/2 z-10 flex h-[27px] w-[27px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-abs-orange text-abs-ink lg:h-[34px] lg:w-[34px]"><Asterisk size={14} className="lg:hidden" /><Asterisk className="hidden lg:block" size={18} strokeWidth={1.5} /></div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-full min-h-[295px] overflow-hidden border border-white/[0.12] bg-[radial-gradient(circle_at_50%_47%,rgba(255,103,29,0.16),transparent_26%),linear-gradient(112deg,rgba(32,34,39,0.83),rgba(7,8,11,0.92))] shadow-[0_0_2.8rem_rgba(255,103,29,0.13)] lg:h-[min(64vh,600px)] lg:min-h-[460px]">
      <div className="absolute left-1/2 top-1/2 h-[54%] w-[69%] -translate-x-1/2 -translate-y-1/2 rotate-[-24deg] rounded-full border border-white/15" />
      <div className="absolute left-1/2 top-1/2 h-[75%] w-[51%] -translate-x-1/2 -translate-y-1/2 rotate-[63deg] rounded-full border border-abs-orange/50" />
      <div className="absolute left-1/2 top-1/2 h-[30%] w-[84%] -translate-x-1/2 -translate-y-1/2 rotate-[-41deg] rounded-full border border-white/[0.09]" />
      <div className="absolute left-1/2 top-1/2 h-[32%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-abs-orange opacity-30 blur-[70px]" />
      <CircleMark />
      <div className="absolute bottom-[11%] left-[13%] h-px w-[74%] rotate-[-18deg] bg-white/10" />
      <div className="absolute left-[13%] top-[18%] h-[64%] w-px rotate-[18deg] bg-abs-orange/30" />
    </div>
  );
}

function HomeSection({ onNavigate }) {
  return (
    <SectionBlock id="home" number="01" sectionLabel="OUR MOTTO" title="<span class='whitespace-nowrap'>Premium <em>quality.</em></span><br /><span class='whitespace-nowrap'>Affordable <em>prices.</em></span>" description="Clarity in Simplicity. Transparency in Action. We design and deliver thoughtful technology, exceptional teams, and the momentum to move your business forward." action={<div className="space-y-9"><div className="flex flex-wrap gap-3"><Button onClick={() => onNavigate('service')}>what we do</Button><Button variant="outline" icon="down" onClick={() => onNavigate('team')}>Meet the team</Button></div><div className="grid max-w-[520px] grid-cols-3 gap-4 border-t border-white/10 pt-5 lg:gap-6"><div><strong className="font-display text-xl font-medium tracking-[-0.06em] text-abs-text lg:text-2xl">20+</strong><span className="mt-1 block text-[8px] uppercase leading-[1.35] tracking-[0.1em] text-abs-muted lg:text-[9px]">People with purpose</span></div><div><strong className="font-display text-xl font-medium tracking-[-0.06em] text-abs-text lg:text-2xl">12</strong><span className="mt-1 block text-[8px] uppercase leading-[1.35] tracking-[0.1em] text-abs-muted lg:text-[9px]">Years of building better</span></div><div><strong className="font-display text-xl font-medium tracking-[-0.06em] text-abs-orange lg:text-2xl">∞</strong><span className="mt-1 block text-[8px] uppercase leading-[1.35] tracking-[0.1em] text-abs-muted lg:text-[9px]">Possibilities ahead</span></div></div></div>}>
      <HeroVisual />
    </SectionBlock>
  );
}

export default HomeSection;
