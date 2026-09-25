import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import SectionBlock from '../../../components/SectionBlock';

function ClientsSection({ data: clientData }) {
  return (
    <SectionBlock
      id={clientData.id}
      number={clientData.number}
      sectionLabel={clientData.sectionLabel}
      title={clientData.title}
      titleLines={clientData.titleLines}
      titleHighlightWordIndexes={clientData.titleHighlightWordIndexes}
      description={clientData.description}
      interactionData={clientData.interaction}
    >
      <InteractionPlaceholder sectionId={clientData.id} />
    </SectionBlock>
  );
}

export default ClientsSection;
