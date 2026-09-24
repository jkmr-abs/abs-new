import { ChevronLeft, ChevronRight, Compass, Monitor, PenTool } from 'lucide-react';
import { useState } from 'react';
import SectionBlock from '../../../components/SectionBlock';

const serviceSlides = [
  {
    index: '01',
    label: 'Brand strategy',
    title: 'Find the <em>signal.</em>',
    description: 'We turn ambition into a clear point of view, giving every decision a meaningful direction.',
    icon: Compass,
  },
  {
    index: '02',
    label: 'Digital experiences',
    title: 'Make it <em>useful.</em>',
    description: 'We shape intuitive digital products and platforms that make complex things feel simple.',
    icon: Monitor,
  },
  {
    index: '03',
    label: 'Art direction',
    title: 'Give it a <em>feeling.</em>',
    description: 'We create distinctive visual systems that help brands show up with confidence and clarity.',
    icon: PenTool,
  },
];

function ServiceContentSlider({ activeIndex, onSelect }) {
  const service = serviceSlides[activeIndex];
  const Icon = service.icon;

  const selectPrevious = () => onSelect((activeIndex - 1 + serviceSlides.length) % serviceSlides.length);
  const selectNext = () => onSelect((activeIndex + 1) % serviceSlides.length);

  return (
    <div data-component="ServiceContentSlider" className="relative z-10 max-w-[520px] self-start lg:self-auto">
      <div data-element="SectionLabel" className="mb-[18px] flex items-center gap-[11px] text-[11px] font-medium uppercase tracking-[0.16em] text-abs-muted lg:mb-[27px] lg:text-xs">
        <span data-element="SectionIndex" className="font-display text-[11px] tracking-[0.02em] text-abs-orange">02</span>
        <i className="block h-px w-[27px] shrink-0 bg-abs-orange opacity-70" />
        <span>OUR SERVICES</span>
        <i className="block h-px w-[27px] shrink-0 bg-abs-orange opacity-70" />
      </div>
      <h2 data-element="ServiceTitle" className="max-w-[620px] font-display text-[clamp(38px,10vw,56px)] font-medium leading-[0.98] tracking-[-0.075em] text-abs-text [&_em]:not-italic [&_em]:text-abs-orange lg:text-[clamp(42px,4.8vw,70px)]">From first thought<br />to <em>full feeling.</em></h2>
      <p data-element="ServiceDescription" className="my-[18px] max-w-[400px] text-xs leading-[1.55] text-abs-muted lg:my-[22px] lg:text-sm lg:leading-[1.7]">We bring strategy, design and technology together under one roof. No hand-offs. No lost-in-translation moments. Just work that lands.</p>
      <div data-element="ServiceSlideMeta" className="mb-4 flex items-center gap-3 border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.14em] text-abs-orange lg:mb-5 lg:pt-5">
        <Icon data-element="ServiceSlideIcon" size={21} strokeWidth={1.5} />
        <span data-element="ServiceSlideIndex">{service.index}</span>
        <span className="h-px w-5 bg-abs-orange/60" />
        <span data-element="ServiceSlideLabel">{service.label}</span>
      </div>
      <h3 data-element="ServiceSlideTitle" className="max-w-[520px] font-display text-[clamp(25px,4vw,42px)] font-medium leading-[0.98] tracking-[-0.07em] text-abs-text [&_em]:not-italic [&_em]:text-abs-orange" dangerouslySetInnerHTML={{ __html: service.title }} />
      <p data-element="ServiceSlideDescription" className="my-[14px] max-w-[400px] text-xs leading-[1.55] text-abs-muted lg:my-[18px] lg:text-sm lg:leading-[1.65]">{service.description}</p>
      <div data-component="ServiceSliderControls" className="flex items-center gap-3">
        <button data-action="ServicePreviousButton" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-abs-orange/55 text-abs-orange transition hover:bg-abs-orange hover:text-abs-ink" aria-label="Previous service" onClick={selectPrevious}><ChevronLeft size={16} /></button>
        <button data-action="ServiceNextButton" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-abs-orange/55 text-abs-orange transition hover:bg-abs-orange hover:text-abs-ink" aria-label="Next service" onClick={selectNext}><ChevronRight size={16} /></button>
        <span data-element="ServiceSlideIndicator" className="ml-2 text-[10px] tracking-[0.12em] text-abs-muted">{service.index} / {String(serviceSlides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

function ServiceVisual({ activeIndex }) {
  return (
    <div data-component="ServiceImagePlaceholder" className="relative h-full min-h-[295px] overflow-hidden border border-white/[0.12] bg-[linear-gradient(140deg,rgba(255,255,255,0.035),rgba(255,103,29,0.045)),#111318] shadow-[0_0_2.8rem_rgba(255,103,29,0.13)] lg:h-[min(64vh,600px)] lg:min-h-[460px]">
      <div className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-abs-orange/60 shadow-[0_0_35px_rgba(255,103,29,0.25)]" />
      <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-px w-[82%] -translate-x-1/2 -translate-y-1/2 rotate-[-32deg] bg-abs-orange/35" />
      <div className="absolute left-1/2 top-1/2 h-[82%] w-px -translate-x-1/2 -translate-y-1/2 rotate-[32deg] bg-white/10" />
      <div className="absolute left-1/2 top-1/2 flex h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-abs-orange/15 blur-xl" />
      <div className="absolute bottom-[12%] left-[12%] right-[12%] flex items-end justify-between">
        {serviceSlides.map((service, index) => <span key={service.index} className={`h-1 w-[18%] transition ${index === activeIndex ? 'bg-abs-orange shadow-[0_0_12px_#ff671d]' : 'bg-white/20'}`} />)}
      </div>
    </div>
  );
}

function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const primaryContent = <ServiceContentSlider activeIndex={activeIndex} onSelect={setActiveIndex} />;

  return (
    <SectionBlock id="service" number="02" sectionLabel="OUR SERVICES" title="" description="" primaryContent={primaryContent}>
      <ServiceVisual activeIndex={activeIndex} />
    </SectionBlock>
  );
}

export default ServiceSection;
