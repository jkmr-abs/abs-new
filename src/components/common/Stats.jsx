import AdditionalDetails from './AdditionalDetails';

function Stats({ items }) {
  if (!items?.length) return null;

  return (
    <AdditionalDetails
      items={items}
      className="grid max-w-[520px] grid-cols-3 gap-4 border-t border-white/10 pt-5 lg:gap-6 [&_[data-element=AdditionalDetailValue]]:block [&_[data-element=AdditionalDetailValue]]:font-display [&_[data-element=AdditionalDetailValue]]:text-xl [&_[data-element=AdditionalDetailValue]]:font-medium [&_[data-element=AdditionalDetailValue]]:tracking-[-0.06em] [&_[data-element=AdditionalDetailValue]]:text-abs-text lg:[&_[data-element=AdditionalDetailValue]]:text-2xl [&_[data-element=AdditionalDetailLabel]]:mt-1 [&_[data-element=AdditionalDetailLabel]]:block [&_[data-element=AdditionalDetailLabel]]:text-[8px] [&_[data-element=AdditionalDetailLabel]]:uppercase [&_[data-element=AdditionalDetailLabel]]:leading-[1.35] [&_[data-element=AdditionalDetailLabel]]:tracking-[0.1em] [&_[data-element=AdditionalDetailLabel]]:text-abs-muted lg:[&_[data-element=AdditionalDetailLabel]]:text-[9px]"
    />
  );
}

export default Stats;
