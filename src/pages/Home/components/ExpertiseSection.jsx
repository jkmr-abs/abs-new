import { ArrowDownRight } from 'lucide-react';
import ActionLink from '../../../components/ActionLink';
import SectionBlock from '../../../components/SectionBlock';

function ExpertiseVisual() {
  return (
    <div className="relative h-full min-h-[295px] overflow-hidden border border-white/[0.12] bg-[#0b0d11] shadow-[0_0_2.8rem_rgba(255,103,29,0.13)] lg:h-[min(64vh,600px)] lg:min-h-[460px]">
      <div className="absolute left-[15px] right-[15px] top-[15px] z-10 flex justify-between text-[7px] uppercase tracking-[0.13em] text-white/45 lg:left-[23px] lg:right-[23px] lg:top-5 lg:text-[9px]"><span>Areas of focus / 03</span><span>Selected signals</span></div>
      <div className="absolute bottom-[57px] left-[6%] right-[6%] top-[57px] grid grid-cols-[1.14fr_0.86fr] grid-rows-2 gap-2 lg:bottom-[90px] lg:left-[8%] lg:right-[8%] lg:top-[83px]">
        <div className="relative row-span-2 flex flex-col justify-end overflow-hidden border border-white/[0.12] bg-[linear-gradient(170deg,rgba(255,255,255,0.02),rgba(255,103,29,0.11))] p-3.5 pb-[17px] lg:p-[17px] lg:pb-[26px]"><span className="absolute left-3.5 top-3.5 text-[6px] tracking-[0.13em] text-white/55 lg:text-[8px]">01 / CULTURE</span><strong className="font-display text-[21px] font-normal leading-[0.93] tracking-[-0.07em] lg:text-[clamp(22px,2.2vw,34px)]">Make<br /><em className="not-italic text-abs-orange">meaning</em></strong><ArrowDownRight className="absolute bottom-[17px] right-[17px] text-abs-orange" size={20} /></div>
        <div className="relative flex flex-col justify-between overflow-hidden border border-abs-orange bg-abs-orange p-3.5 text-abs-ink lg:p-[17px]"><span className="text-[6px] tracking-[0.13em] text-abs-ink/60 lg:text-[8px]">02 / FUTURE</span><strong className="font-display text-[21px] font-normal leading-[0.93] tracking-[-0.07em] lg:text-[clamp(22px,2.2vw,34px)]">Stay<br />curious<span>.</span></strong></div>
        <div className="relative flex flex-row items-end gap-1.5 overflow-hidden border border-white/[0.12] bg-white/[0.035] p-3.5 pb-[17px] lg:gap-[15px] lg:p-[17px] lg:pb-[18px]"><span className="absolute left-3.5 top-3.5 text-[6px] tracking-[0.13em] text-white/55 lg:text-[8px]">03 / CRAFT</span><div className="absolute left-3.5 top-6 flex h-[25px] items-end gap-[3px]"><i className="h-[9px] w-1 bg-abs-orange/40" /><i className="h-[18px] w-1 bg-abs-orange/60" /><i className="h-[13px] w-1 bg-abs-orange/80" /><i className="h-[25px] w-1 bg-abs-orange" /></div><strong className="ml-auto font-display text-[21px] font-normal leading-[0.93] tracking-[-0.07em] lg:text-[clamp(22px,2.2vw,34px)]">Details<br />matter.</strong></div>
      </div>
      <div className="absolute bottom-[17px] right-[6%] left-[6%] flex justify-end text-[7px] tracking-[0.08em] text-white/40 lg:bottom-[25px] lg:right-[8%] lg:left-[8%] lg:justify-between lg:text-[9px]"><span className="hidden lg:block">We work at the intersection of</span><b className="font-normal text-abs-orange-soft">culture / technology / design</b></div>
    </div>
  );
}

function ExpertiseSection({ onNavigate }) {
  return (
    <SectionBlock id="expertise" number="03" eyebrow="How we think" title="Curious by nature.<br /><em>Precise by design.</em>" description="We look sideways before we look forward. The best answers often live between disciplines, industries and the obvious next step." action={<ActionLink onClick={() => onNavigate('client')}>Our point of view</ActionLink>}>
      <ExpertiseVisual />
    </SectionBlock>
  );
}

export default ExpertiseSection;
