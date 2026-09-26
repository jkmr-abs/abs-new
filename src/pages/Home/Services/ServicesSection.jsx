import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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

function ServicesSection({ services = [], sectionLabel = 'OUR SERVICES' }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [sharedSlideHeight, setSharedSlideHeight] = useState(null);
  const slideRefs = useRef([]);
  const activeService = services[activeSlideIndex];

  useEffect(() => {
    setActiveSlideIndex((currentIndex) => Math.min(currentIndex, Math.max(services.length - 1, 0)));
  }, [services.length]);

  useLayoutEffect(() => {
    if (!services.length) return undefined;

    const measureSlides = () => {
      const heights = slideRefs.current
        .slice(0, services.length)
        .map((slide) => slide?.getBoundingClientRect().height || 0);
      const tallestSlide = Math.max(...heights, 0);

      if (tallestSlide > 0) {
        setSharedSlideHeight((currentHeight) => (
          currentHeight === tallestSlide ? currentHeight : tallestSlide
        ));
      }
    };

    measureSlides();
    window.addEventListener('resize', measureSlides);

    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(measureSlides)
      : null;

    slideRefs.current.slice(0, services.length).forEach((slide) => {
      if (slide) resizeObserver?.observe(slide);
    });

    document.fonts?.ready.then(measureSlides);

    return () => {
      window.removeEventListener('resize', measureSlides);
      resizeObserver?.disconnect();
    };
  }, [services]);

  if (!services.length) return null;

  const selectSlide = (direction) => {
    setActiveSlideIndex((currentIndex) => (currentIndex + direction + services.length) % services.length);
  };

  return (
    <SectionBlock
      id="service"
      number="02"
      sectionLabel={sectionLabel}
      interactionData={activeService.interaction}
      primaryContent={(
        <div
          data-component="ServiceSlideStack"
          data-section-id="service"
          className="grid items-start"
          style={sharedSlideHeight ? { minHeight: `${sharedSlideHeight}px` } : undefined}
        >
          {services.map((service, index) => (
            <div
              ref={(element) => { slideRefs.current[index] = element; }}
              className={`col-start-1 row-start-1 ${index === activeSlideIndex ? 'relative' : 'invisible pointer-events-none'}`}
              aria-hidden={index !== activeSlideIndex}
              key={service.id}
            >
              <ServiceSlide
                service={service}
                currentIndex={activeSlideIndex}
                totalSlides={services.length}
                onPrevious={() => selectSlide(-1)}
                onNext={() => selectSlide(1)}
                sectionLabel={sectionLabel}
              />
            </div>
          ))}
        </div>
      )}
    >
      <ServiceInteractionPlaceholder service={activeService} />
    </SectionBlock>
  );
}

export default ServicesSection;
