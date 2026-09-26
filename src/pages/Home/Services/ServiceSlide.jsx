import ActionButtons from '../../../components/common/ActionButtons';
import AdditionalDetails from '../../../components/common/AdditionalDetails';
import Description from '../../../components/common/Description';
import Features from '../../../components/common/Features';
import Label from '../../../components/common/Label';
import SectionTitle from '../../../components/common/SectionTitle';
import ServiceNavigation from './ServiceNavigation';
import ServiceTitleFrame from './ServiceTitleFrame';

function ServiceSlide({ service, currentIndex, totalSlides, onPrevious, onNext, sectionLabel = 'OUR SERVICES' }) {
  return (
    <article data-component="ServiceSlide" className="relative z-10 max-w-[560px] self-start lg:self-auto">
      <Label label={sectionLabel} />

      <ServiceTitleFrame>
        <SectionTitle
          title={service.title}
          highlightWordIndex={service.title.trim().split(/\s+/).length > 1 ? 1 : 0}
          dataElement="ServiceSectionTitle"
          className="line-clamp-2"
        />
      </ServiceTitleFrame>

      {service.description && (
        <Description
          text={service.description}
          dataElement="ServiceSectionDescription"
          className="mt-[18px] max-w-[470px] lg:mt-[24px]"
        />
      )}

      <div data-element="ServiceFeatureFrame" className="mt-6 lg:mt-6">
        <Features items={service.features} featureComponent="ServiceSlideFeature" iconElement="ServiceSlideIcon" contentElement="ServiceSlideFeatureContent" />
      </div>

      {(service.primaryButton || service.secondaryButton) && (
        <div data-element="ServiceActionFrame" className="mt-6 lg:mt-8">
          <ActionButtons primaryButton={service.primaryButton} secondaryButton={service.secondaryButton} />
        </div>
      )}
      {service.additionalDetails?.length > 0 && (
        <div data-element="ServiceAdditionalDetailsFrame" className="mt-6">
          <AdditionalDetails items={service.additionalDetails} />
        </div>
      )}
      <ServiceNavigation
        className="mt-2 lg:mt-3"
        current={currentIndex + 1}
        total={totalSlides}
        onPrevious={onPrevious}
        onNext={onNext}
        previousLabel="Previous service"
        nextLabel="Next service"
      />
    </article>
  );
}

export default ServiceSlide;
