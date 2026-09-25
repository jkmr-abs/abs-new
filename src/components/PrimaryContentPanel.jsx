function PrimaryContentPanel({ sectionId, number, sectionLabel, title, description, action }) {
  return (
    <div data-component="PrimaryContentPanel" data-section-id={sectionId} className="relative z-10 max-w-[520px] self-start lg:self-auto">
      <div data-element="SectionLabel" className="mb-[18px] flex items-center gap-[11px] text-[11px] font-medium uppercase tracking-[0.16em] text-abs-muted lg:mb-[27px] lg:text-xs">
        <span data-element="SectionIndex" className="font-display text-[11px] tracking-[0.02em] text-abs-orange">{number}</span>
        <i className="block h-px w-[27px] shrink-0 bg-abs-orange opacity-70" />
        <span>{sectionLabel}</span>
        <i className="block h-px w-[27px] shrink-0 bg-abs-orange opacity-70" />
      </div>
      <h2 data-element="SectionTitle" className="max-w-[620px] font-display text-[clamp(41px,12vw,62px)] font-medium leading-[0.98] tracking-[-0.075em] text-abs-text [&_em]:not-italic [&_em]:text-abs-orange lg:text-[clamp(45px,5.55vw,83px)]" dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p data-element="SectionDescription" className="my-[18px] max-w-[400px] text-xs leading-[1.55] text-abs-muted lg:my-[29px] lg:mb-[31px] lg:text-sm lg:leading-[1.7]">{description}</p>}
      {action && <div data-element="SectionActionGroup">{action}</div>}
    </div>
  );
}

export default PrimaryContentPanel;
