import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import SectionBlock from '../../../components/SectionBlock';
import { sectionData } from '../../../data/homeData';

const expertiseData = sectionData.expertise;

function ExpertiseSection() {
  return (
    <SectionBlock
      id={expertiseData.id}
      number={expertiseData.number}
      sectionLabel={expertiseData.sectionLabel}
      title={expertiseData.title}
      description={expertiseData.description}
    >
      <InteractionPlaceholder sectionId={expertiseData.id} />
    </SectionBlock>
  );
}

export default ExpertiseSection;
