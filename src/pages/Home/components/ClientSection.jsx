import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import SectionBlock from '../../../components/SectionBlock';

function ClientSupportingBlocks() {
  return (
    <div data-component="ClientSupportingContent" className="mt-8 grid max-w-[520px] gap-4 sm:grid-cols-2 lg:mt-10">
      {[['Client content block', 'Supporting content placeholder'], ['Client content block', 'Supporting content placeholder']].map(([title, description], index) => (
        <div data-component="ClientSupportingBlock" className="border-t border-white/10 pt-4" key={`${title}-${index}`}>
          <span data-element="ClientBlockIndex" className="text-[10px] tracking-[0.12em] text-abs-orange">0{index + 1}</span>
          <h3 data-element="ClientBlockTitle" className="mt-3 font-display text-lg tracking-[-0.04em] text-abs-text">{title}</h3>
          <p data-element="ClientBlockDescription" className="mt-2 text-xs leading-[1.6] text-abs-muted">{description}</p>
        </div>
      ))}
    </div>
  );
}

function ClientSection() {
  return (
    <SectionBlock id="client" number="04" sectionLabel="CLIENTS LABEL" title="Clients section title" action={<ClientSupportingBlocks />}>
      <InteractionPlaceholder sectionId="client" />
    </SectionBlock>
  );
}

export default ClientSection;
