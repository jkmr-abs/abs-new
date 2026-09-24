import { ArrowDownRight } from 'lucide-react';
import SectionBlock from '../../../components/SectionBlock';

function ExpertiseVisual() {
  return (
    <div data-component="ExpertiseImagePlaceholder" className="relative h-full min-h-[295px] overflow-hidden border border-white/[0.12] bg-[#0b0d11] shadow-[0_0_2.8rem_rgba(255,103,29,0.13)] lg:h-[min(64vh,600px)] lg:min-h-[460px]">
      <div className="absolute bottom-[16%] left-[10%] right-[10%] top-[16%] grid grid-cols-[1.14fr_0.86fr] grid-rows-2 gap-2">
        <div className="relative row-span-2 overflow-hidden border border-white/[0.12] bg-[linear-gradient(170deg,rgba(255,255,255,0.02),rgba(255,103,29,0.11))]">
          <div className="absolute bottom-[15%] left-[13%] h-[48%] w-[48%] rounded-full border border-abs-orange/70 shadow-[0_0_28px_rgba(255,103,29,0.25)]" />
          <ArrowDownRight className="absolute bottom-[10%] right-[10%] text-abs-orange" size={22} />
        </div>
        <div className="relative overflow-hidden border border-abs-orange bg-abs-orange">
          <div className="absolute left-[18%] top-[22%] h-[55%] w-[55%] rounded-full border border-abs-ink/50" />
          <div className="absolute bottom-[18%] left-[18%] h-px w-[64%] rotate-45 bg-abs-ink/50" />
        </div>
        <div className="relative overflow-hidden border border-white/[0.12] bg-white/[0.035]">
          <div className="absolute bottom-[18%] left-[13%] flex h-[45%] items-end gap-1"><i className="h-[35%] w-1 bg-abs-orange/40" /><i className="h-[70%] w-1 bg-abs-orange/60" /><i className="h-[52%] w-1 bg-abs-orange/80" /><i className="h-full w-1 bg-abs-orange" /></div>
          <div className="absolute right-[14%] top-[23%] h-[42%] w-[25%] rounded-full border border-white/20" />
        </div>
      </div>
      <div className="absolute bottom-[10%] left-[10%] right-[10%] flex gap-2"><span className="h-px flex-1 bg-abs-orange/60" /><span className="h-px w-[18%] bg-white/20" /><span className="h-px w-[8%] bg-white/20" /></div>
    </div>
  );
}

function ExpertiseSection() {
  return (
    <SectionBlock id="expertise" number="03" sectionLabel="OUR EXPERTISE" title="<span class='whitespace-nowrap'>Technologies That</span><br />Power <em>Ideas</em>" description="We combine modern technologies to build scalable and high-performance solutions.">
      <ExpertiseVisual />
    </SectionBlock>
  );
}

export default ExpertiseSection;
