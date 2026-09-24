import { Asterisk } from 'lucide-react';
import SectionBlock from '../../../components/SectionBlock';

function TeamVisual() {
  return (
    <div className="relative h-full min-h-[295px] overflow-hidden border border-white/[0.12] bg-[linear-gradient(145deg,rgba(255,103,29,0.09),transparent_46%),#101216] shadow-[0_0_2.8rem_rgba(255,103,29,0.13)] lg:h-[min(64vh,600px)] lg:min-h-[460px]">
      <div className="absolute left-[15px] right-[15px] top-[15px] z-10 flex justify-between text-[7px] uppercase tracking-[0.13em] text-white/45 lg:left-[23px] lg:right-[23px] lg:top-5 lg:text-[9px]"><span>The people / 018</span><span>Always becoming</span></div>
      <div className="absolute bottom-[43px] left-[9%] right-[9%] top-12 overflow-hidden bg-[radial-gradient(ellipse_at_51%_30%,rgba(255,171,128,0.31),transparent_17%),linear-gradient(160deg,#26242a,#111216_63%)] lg:bottom-[61px] lg:left-[13%] lg:right-[13%] lg:top-[57px] before:absolute before:left-[-10%] before:top-[24%] before:h-px before:w-[120%] before:rotate-[-32deg] before:bg-white/10 before:content-[''] after:absolute after:left-[-10%] after:top-[62%] after:h-px after:w-[120%] after:rotate-[-32deg] after:bg-white/10 after:content-['']">
        <div className="absolute left-[46%] top-[16%] aspect-[0.82] w-[26%] -translate-x-1/2 rounded-[48%_46%_42%_44%] bg-[linear-gradient(130deg,#bd795d,#542e2a_75%)] shadow-[22px_-13px_0_-2px_#221f24]" />
        <div className="absolute bottom-[-20%] left-1/2 h-[62%] w-[63%] -translate-x-1/2 rounded-[50%_50%_0_0] bg-[linear-gradient(100deg,#292c35,#101116_70%)]" />
        <div className="absolute right-[13%] top-[45%] aspect-square w-[16%] rounded-full border border-abs-orange shadow-[0_0_25px_rgba(255,103,29,0.35)]" />
        <span className="absolute bottom-2.5 left-2.5 text-[7px] uppercase leading-[1.4] tracking-[0.1em] text-white/65 lg:bottom-[17px] lg:left-[17px] lg:text-[9px]">A collective<br />of specialists</span>
      </div>
      <div className="absolute bottom-[15px] left-[10%] right-[10%] flex items-end justify-between text-[9px] leading-[1.45] text-white/50 lg:bottom-[22px] lg:left-[14%] lg:right-[14%]"><span>Designers, strategists,<br />developers &amp; dreamers.</span><span className="text-abs-orange"><Asterisk size={24} /></span></div>
    </div>
  );
}

function TeamSection() {
  return (
    <SectionBlock id="team" number="05" eyebrow="The studio" title="Small enough to<br /><em>care more.</em>" description="A close-knit collective with big-agency range. We bring the right minds to every challenge, and stay close from day one to done.">
      <TeamVisual />
    </SectionBlock>
  );
}

export default TeamSection;
