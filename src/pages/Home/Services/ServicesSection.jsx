import { useEffect, useState } from 'react';
import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import SectionBlock from '../../../components/SectionBlock';
import ServiceSlide from './ServiceSlide';

function ServiceInteractionPlaceholder({ service }) {
  return (
    <InteractionPlaceholder sectionId={service.id} interaction={service.interaction}>
      <div data-component="LPDoubleWavePlaceholder" className="absolute bottom-[19%] left-[12%] right-[12%] h-[22%] rounded-[50%] border border-abs-orange/40" />
      <div className="absolute bottom-[14%] left-[18%] right-[18%] h-[18%] rounded-[50%] border border-white/15" />
    </InteractionPlaceholder>
  );
}

function ServicesSection({ services = [] }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeService = services[activeSlideIndex];

  useEffect(() => {
    setActiveSlideIndex((currentIndex) => Math.min(currentIndex, Math.max(services.length - 1, 0)));
  }, [services.length]);

  if (!services.length) return null;

  const selectSlide = (direction) => {
    setActiveSlideIndex((currentIndex) => (currentIndex + direction + services.length) % services.length);
  };

  return (
    <SectionBlock
      id="service"
      number="02"
      sectionLabel={activeService.label}
      interactionData={activeService.interaction}
      primaryContent={(
        <div data-component="PrimaryContentPanel" data-section-id="service">
          <ServiceSlide
            service={activeService}
            currentIndex={activeSlideIndex}
            totalSlides={services.length}
            onPrevious={() => selectSlide(-1)}
            onNext={() => selectSlide(1)}
          />
        </div>
      )}
    >
      <ServiceInteractionPlaceholder service={activeService} />
    </SectionBlock>
  );
}

export default ServicesSection;
