import SlideNavigation from '../../../components/common/SlideNavigation';

function ServiceNavigation({ current, total, onPrevious, onNext, previousLabel, nextLabel }) {
  return (
    <SlideNavigation
      current={current}
      total={total}
      onPrevious={onPrevious}
      onNext={onNext}
      previousLabel={previousLabel}
      nextLabel={nextLabel}
    />
  );
}

export default ServiceNavigation;
