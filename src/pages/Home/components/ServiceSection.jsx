import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { useState } from 'react';
import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import SectionBlock from '../../../components/SectionBlock';
import SectionLabel from '../../../components/SectionLabel';
import { sectionData } from '../../../data/homeData';

const serviceData = sectionData.service;

function ServiceSectionTitle({ title }) {
  const words = title.trim().split(/\s+/);
  const highlightedWordIndex = words.length > 1 ? 1 : 0;

  return (
    <h2 data-element="ServiceSectionTitle" className="line-clamp-2 max-w-[620px] font-display text-[clamp(38px,10vw,62px)] font-medium leading-[0.98] tracking-[-0.075em] text-abs-text lg:text-[clamp(42px,4.2vw,68px)]">
      {words.map((word, index) => (
        <span className={index === highlightedWordIndex ? 'text-abs-orange' : ''} key={`${word}-${index}`}>
          {index > 0 && ' '}{word}
        </span>
      ))}
    </h2>
  );
}

function ServiceSectionDescription({ children }) {
  return <p data-element="ServiceSectionDescription" className="text-xs leading-[1.55] text-abs-muted lg:text-sm lg:leading-[1.7]">{children}</p>;
}

function ServiceSlideIcon() {
  return <Circle data-element="ServiceSlideIcon" className="mt-0.5 shrink-0 text-abs-orange" size={19} strokeWidth={1.5} />;
}

function ServiceFeatureList({ features }) {
  return (
    <div data-component="ServiceFeatureFrame" className="h-[272px] lg:h-[280px]">
      <ul data-component="ServiceFeatureList" className="m-0 grid h-full list-none grid-rows-4 p-0">
        {features.map((feature) => (
          <li data-component="ServiceSlideFeature" className="flex h-full items-start gap-3 border-b border-white/10 py-3 first:border-t first:border-white/10 lg:gap-4 lg:py-4" key={feature.id}>
            <ServiceSlideIcon />
            <span data-element="ServiceSlideFeatureContent" className="min-w-0 text-xs leading-[1.6] text-abs-text lg:text-sm">{feature.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceContentSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = serviceData.slides[activeSlideIndex];

  const selectSlide = (direction) => {
    setActiveSlideIndex((currentIndex) => (currentIndex + direction + serviceData.slides.length) % serviceData.slides.length);
  };

  return (
    <div data-component="ServiceContentSlider" className="relative z-10 max-w-[560px] self-start lg:self-auto">
      <SectionLabel number={serviceData.number} label={serviceData.sectionLabel} />

      <div data-element="ServiceTitleFrame" className="flex h-[88px] items-start overflow-hidden sm:h-[104px] lg:h-[138px]">
        <ServiceSectionTitle title={activeSlide.title} />
      </div>

      <div data-element="ServiceDescriptionFrame" className="mt-[18px] h-[48px] max-w-[470px] lg:mt-[24px] lg:h-[60px]">
        {activeSlide.description && <ServiceSectionDescription>{activeSlide.description}</ServiceSectionDescription>}
      </div>

      <div className="mt-6 lg:mt-8">
        <ServiceFeatureList features={activeSlide.features} />
      </div>

      <div data-component="ServiceSliderControls" className="mt-6 flex items-center gap-3 lg:mt-8">
        <button data-action="ServicePreviousButton" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-abs-orange/55 text-abs-orange transition hover:bg-abs-orange hover:text-abs-ink" type="button" aria-label={serviceData.controls.previousLabel} onClick={() => selectSlide(-1)}>
          <ChevronLeft size={16} />
        </button>
        <span data-element="ServiceSlideIndicator" className="text-[10px] tracking-[0.12em] text-abs-muted">{String(activeSlideIndex + 1).padStart(2, '0')} / {String(serviceData.slides.length).padStart(2, '0')}</span>
        <button data-action="ServiceNextButton" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-abs-orange/55 text-abs-orange transition hover:bg-abs-orange hover:text-abs-ink" type="button" aria-label={serviceData.controls.nextLabel} onClick={() => selectSlide(1)}>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

function ServiceInteractionPlaceholder() {
  return (
    <InteractionPlaceholder sectionId={serviceData.id}>
      <div data-component="LPDoubleWavePlaceholder" className="absolute bottom-[19%] left-[12%] right-[12%] h-[22%] rounded-[50%] border border-abs-orange/40" />
      <div className="absolute bottom-[14%] left-[18%] right-[18%] h-[18%] rounded-[50%] border border-white/15" />
    </InteractionPlaceholder>
  );
}

function ServiceSection() {
  return (
    <SectionBlock
      id={serviceData.id}
      number={serviceData.number}
      sectionLabel={serviceData.sectionLabel}
      title={serviceData.slides[0].title}
      description={serviceData.slides[0].description}
      primaryContent={<ServiceContentSlider />}
    >
      <ServiceInteractionPlaceholder />
    </SectionBlock>
  );
}

export default ServiceSection;
