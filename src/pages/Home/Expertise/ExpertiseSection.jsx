import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import SectionBlock from '../../../components/SectionBlock';
function ExpertiseSection({ data: expertiseData }) {
  return (
    <SectionBlock
      id={expertiseData.id}
      number={expertiseData.number}
      sectionLabel={expertiseData.sectionLabel}
      title={expertiseData.title}
      description={expertiseData.description}
      interactionData={expertiseData.interaction}
    >
      <InteractionPlaceholder sectionId={expertiseData.id} />
    </SectionBlock>
  );
}

export default ExpertiseSection;
