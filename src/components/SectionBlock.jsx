import { ChevronDown } from 'lucide-react';
import InteractionPanel from './InteractionPanel';
import PrimaryContentPanel from './PrimaryContentPanel';

function SectionBlock({ id, number, sectionLabel, title, titleLines, titleHighlightWordIndexes, description, primaryContent, children, action, interactionData, className = '' }) {
  return (
    <section id={id} data-section-component={`${id}Section`} className={`relative h-screen w-screen snap-start snap-always ${className}`}>
      <div className="mx-auto grid h-full w-[88vw] grid-cols-1 grid-rows-[auto_1fr] items-start gap-6 pb-[92px] pt-[112px] lg:w-[89vw] lg:grid-cols-2 lg:grid-rows-1 lg:gap-[clamp(36px,7vw,124px)] lg:pb-5 lg:pt-[108px]">
        {primaryContent || <PrimaryContentPanel sectionId={id} number={number} sectionLabel={sectionLabel} title={title} titleLines={titleLines} titleHighlightWordIndexes={titleHighlightWordIndexes} description={description} action={action} />}
        <InteractionPanel sectionLabel={sectionLabel} data={interactionData}>{children}</InteractionPanel>
      </div>
      <div data-element="ScrollHint" className="absolute bottom-[27px] left-[5.5vw] hidden items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-abs-muted/55 lg:flex">
        <span>Scroll to explore</span><ChevronDown className="animate-float text-abs-orange" size={14} />
      </div>
    </section>
  );
}

export default SectionBlock;
