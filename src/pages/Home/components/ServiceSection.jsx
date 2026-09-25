import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import SectionBlock from '../../../components/SectionBlock';

const serviceFeatureStructure = [
  { id: 'feature-1', label: 'Feature content' },
  { id: 'feature-2', label: 'Feature content' },
  { id: 'feature-3', label: 'Feature content' },
];

function ServiceSectionTitle({ children }) {
  return <h2 data-element="ServiceSectionTitle" className="max-w-[620px] font-display text-[clamp(38px,10vw,62px)] font-medium leading-[0.98] tracking-[-0.075em] text-abs-text lg:text-[clamp(45px,5.55vw,83px)]">{children}</h2>;
}

function ServiceSectionDescription({ children }) {
  return <p data-element="ServiceSectionDescription" className="mt-[18px] max-w-[470px] text-xs leading-[1.55] text-abs-muted lg:mt-[24px] lg:text-sm lg:leading-[1.7]">{children}</p>;
}

function ServiceSlideIcon() {
  return <Circle data-element="ServiceSlideIcon" className="mt-0.5 shrink-0 text-abs-orange" size={19} strokeWidth={1.5} />;
}

function ServiceFeatureList() {
  return (
    <ul data-component="ServiceFeatureList" className="mt-6 m-0 list-none p-0 lg:mt-8">
      {serviceFeatureStructure.map((feature) => (
        <li data-component="ServiceSlideFeature" className="flex items-start gap-3 border-b border-white/10 py-3 first:border-t first:border-white/10 lg:gap-4 lg:py-4" key={feature.id}>
          <ServiceSlideIcon />
          <span data-element="ServiceSlideFeatureContent" className="text-xs leading-[1.6] text-abs-text lg:text-sm">{feature.label}</span>
        </li>
      ))}
    </ul>
  );
}

function ServiceContentSlider() {
  return (
    <div data-component="ServiceContentSlider" className="relative z-10 max-w-[560px] self-start lg:self-auto">
      <ServiceSectionTitle>Service section title</ServiceSectionTitle>
      <ServiceSectionDescription>Service section description</ServiceSectionDescription>
      <ServiceFeatureList />
      <div data-component="ServiceSliderControls" className="mt-6 flex items-center justify-between lg:mt-8">
        <button data-action="ServicePreviousButton" className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-abs-muted transition hover:text-abs-orange" type="button" aria-label="Previous service">
          <ChevronLeft size={16} className="text-abs-orange" />
          <span>Previous</span>
        </button>
        <span data-element="ServiceSlideIndicator" className="text-[10px] tracking-[0.12em] text-abs-muted">01 / 03</span>
        <button data-action="ServiceNextButton" className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-abs-muted transition hover:text-abs-orange" type="button" aria-label="Next service">
          <span>Next</span>
          <ChevronRight size={16} className="text-abs-orange" />
        </button>
      </div>
    </div>
  );
}

function ServiceInteractionPlaceholder() {
  return (
    <InteractionPlaceholder sectionId="service">
      <div data-component="LPDoubleWavePlaceholder" className="absolute bottom-[19%] left-[12%] right-[12%] h-[22%] rounded-[50%] border border-abs-orange/40" />
      <div className="absolute bottom-[14%] left-[18%] right-[18%] h-[18%] rounded-[50%] border border-white/15" />
    </InteractionPlaceholder>
  );
}

function ServiceSection() {
  return (
    <SectionBlock id="service" number="02" sectionLabel="SERVICES LABEL" title="" description="" primaryContent={<ServiceContentSlider />}>
      <ServiceInteractionPlaceholder />
    </SectionBlock>
  );
}

export default ServiceSection;
