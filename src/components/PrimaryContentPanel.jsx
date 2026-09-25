import SectionLabel from './SectionLabel';

function PrimaryContentPanel({ sectionId, number, sectionLabel, title, description, action }) {
  return (
    <div data-component="PrimaryContentPanel" data-section-id={sectionId} className="relative z-10 max-w-[520px] self-start lg:self-auto">
      <SectionLabel number={number} label={sectionLabel} />
      <h2 data-element="SectionTitle" className="max-w-[620px] font-display text-[clamp(41px,12vw,62px)] font-medium leading-[0.98] tracking-[-0.075em] text-abs-text [&_em]:not-italic [&_em]:text-abs-orange lg:text-[clamp(45px,5.55vw,83px)]" dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p data-element="SectionDescription" className="my-[18px] max-w-[400px] text-xs leading-[1.55] text-abs-muted lg:my-[29px] lg:mb-[31px] lg:text-sm lg:leading-[1.7]">{description}</p>}
      {action && <div data-element="SectionActionGroup">{action}</div>}
    </div>
  );
}

export default PrimaryContentPanel;
