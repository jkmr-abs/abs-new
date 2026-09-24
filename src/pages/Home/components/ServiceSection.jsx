import { ArrowUpRight } from 'lucide-react';
import SectionBlock from '../../../components/SectionBlock';

function ServiceVisual() {
  const services = ['Brand strategy', 'Digital experiences', 'Art direction', 'Motion & 3D'];

  return (
    <div className="relative h-full min-h-[295px] overflow-hidden border border-white/[0.12] bg-[linear-gradient(140deg,rgba(255,255,255,0.035),rgba(255,103,29,0.045)),#111318] shadow-[0_0_2.8rem_rgba(255,103,29,0.13)] lg:h-[min(64vh,600px)] lg:min-h-[460px]">
      <div className="absolute left-[15px] right-[15px] top-[15px] z-10 flex justify-between text-[7px] uppercase tracking-[0.13em] text-white/45 lg:left-[23px] lg:right-[23px] lg:top-5 lg:text-[9px]"><span>Our practice / 004</span><span>01 — 04</span></div>
      <div className="absolute left-[8%] right-[8%] top-[57px] lg:left-[9%] lg:right-[12%] lg:top-[98px]">
        {services.map((service, index) => (
          <div className={`flex h-12 items-center gap-[15px] border-b text-[15px] font-display tracking-[-0.04em] transition lg:h-[68px] lg:text-[clamp(15px,1.5vw,21px)] ${index === 0 ? 'border-abs-orange pl-2.5 text-abs-text' : 'border-white/[0.12] text-white/55'}`} key={service}>
            <span className="self-start pt-1.5 font-sans text-[9px] tracking-[0.06em] text-abs-orange">0{index + 1}</span><span>{service}</span>{index === 0 && <ArrowUpRight className="ml-auto text-abs-orange" size={18} strokeWidth={1.5} />}
          </div>
        ))}
      </div>
      <div className="absolute bottom-[18px] left-[8%] text-[9px] leading-[1.5] text-white/40 lg:bottom-[38px] lg:left-[9%] lg:text-[11px]">One connected team.<br />Every angle considered.</div>
    </div>
  );
}

function ServiceSection() {
  return (
    <SectionBlock id="service" number="02" eyebrow="What we do" title="From first thought<br />to <em>full feeling.</em>" description="We bring strategy, design and technology together under one roof. No hand-offs. No lost-in-translation moments. Just work that lands.">
      <ServiceVisual />
    </SectionBlock>
  );
}

export default ServiceSection;
