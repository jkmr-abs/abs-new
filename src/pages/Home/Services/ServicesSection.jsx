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
  const slideMeasurementRefs = useRef([]);
  const activeService = services[Math.min(activeSlideIndex, Math.max(services.length - 1, 0))];

  useEffect(() => {
    setActiveSlideIndex((currentIndex) => Math.min(currentIndex, Math.max(services.length - 1, 0)));
  }, [services.length]);

  useLayoutEffect(() => {
    if (!services.length) return undefined;

    let isCancelled = false;

    const measureSlides = () => {
      if (isCancelled) return;

      const heights = slideMeasurementRefs.current
        .slice(0, services.length)
        .map((slide) => {
          if (!slide) return 0;

          // scrollHeight captures the natural content height, while the
          // bounding rect accounts for any rendered layout differences.
          return Math.ceil(Math.max(
            slide.scrollHeight,
            slide.getBoundingClientRect().height,
          ));
        });
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

    slideMeasurementRefs.current.slice(0, services.length).forEach((slide) => {
      if (slide) resizeObserver?.observe(slide);
    });

    const fontsReady = document.fonts?.ready;
    fontsReady?.then(measureSlides);

    return () => {
      isCancelled = true;
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
          className="relative"
          style={sharedSlideHeight ? { height: `${sharedSlideHeight}px` } : undefined}
        >
          {/*
            Keep every slide rendered in the document so its natural height can
            be measured. Visibility-hidden content is still laid out and does
            not affect the active slide's accessibility or interaction.
          */}
          <div
            data-component="ServiceSlideMeasurements"
            className="pointer-events-none invisible absolute inset-x-0 top-0"
            aria-hidden="true"
          >
            {services.map((service, index) => (
              <div
                ref={(element) => { slideMeasurementRefs.current[index] = element; }}
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

          <div data-component="ServiceSlideViewport" className="relative">
            <ServiceSlide
              service={activeService}
              currentIndex={activeSlideIndex}
              totalSlides={services.length}
              onPrevious={() => selectSlide(-1)}
              onNext={() => selectSlide(1)}
              sectionLabel={sectionLabel}
            />
          </div>
        </div>
      )}
    >
      <ServiceInteractionPlaceholder service={activeService} />
    </SectionBlock>
  );
}

export default ServicesSection;
