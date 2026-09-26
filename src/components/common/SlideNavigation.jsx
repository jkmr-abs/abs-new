import { ChevronLeft, ChevronRight } from 'lucide-react';

function SlideNavigation({ current, total, onPrevious, onNext, previousLabel = 'Previous', nextLabel = 'Next', className = '' }) {
  return (
    <div data-component="SlideNavigation" className={`mt-6 flex items-center gap-3 lg:mt-8 ${className}`}>
      <button data-action="PreviousButton" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-abs-orange/55 text-abs-orange transition hover:bg-abs-orange hover:text-abs-ink" type="button" aria-label={previousLabel} onClick={onPrevious}>
        <ChevronLeft size={16} />
      </button>
      <span data-element="SlideIndicator" className="text-[10px] tracking-[0.12em] text-abs-muted">{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      <button data-action="NextButton" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-abs-orange/55 text-abs-orange transition hover:bg-abs-orange hover:text-abs-ink" type="button" aria-label={nextLabel} onClick={onNext}>
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

export default SlideNavigation;
