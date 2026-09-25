import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import SectionBlock from '../../../components/SectionBlock';

function ClientSupportingBlocks({ blocks }) {
  return (
    <div data-component="ClientSupportingContent" className="mt-8 grid max-w-[520px] gap-4 sm:grid-cols-2 lg:mt-10">
      {blocks.map((block, index) => (
        <div data-component="ClientSupportingBlock" className="border-t border-white/10 pt-4" key={`${block.title}-${index}`}>
          <span data-element="ClientBlockIndex" className="text-[10px] tracking-[0.12em] text-abs-orange">0{index + 1}</span>
          <h3 data-element="ClientBlockTitle" className="mt-3 font-display text-lg tracking-[-0.04em] text-abs-text">{block.title}</h3>
          <p data-element="ClientBlockDescription" className="mt-2 text-xs leading-[1.6] text-abs-muted">{block.description}</p>
        </div>
      ))}
    </div>
  );
}

function ClientsSection({ data: clientData }) {
  return (
    <SectionBlock
      id={clientData.id}
      number={clientData.number}
      sectionLabel={clientData.sectionLabel}
      title={clientData.title}
      action={<ClientSupportingBlocks blocks={clientData.supportingBlocks} />}
      interactionData={clientData.interaction}
    >
      <InteractionPlaceholder sectionId={clientData.id} />
    </SectionBlock>
  );
}

export default ClientsSection;
