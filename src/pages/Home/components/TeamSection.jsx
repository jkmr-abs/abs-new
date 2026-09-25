import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import SectionBlock from '../../../components/SectionBlock';
import { sectionData } from '../../../data/homeData';

const teamData = sectionData.team;

function TeamInteractionPlaceholder() {
  return (
    <InteractionPlaceholder sectionId={teamData.id}>
      <div data-component="TeamInteractionSlots" className="absolute inset-x-[12%] bottom-[16%] top-[16%] grid grid-cols-3 gap-2" aria-label="Three future team interaction slots">
        <div data-element="TeamInteractionSlot" className="border border-white/10 bg-white/[0.025]" />
        <div data-element="TeamInteractionSlot" className="border border-abs-orange/45 bg-abs-orange/[0.06]" />
        <div data-element="TeamInteractionSlot" className="border border-white/10 bg-white/[0.025]" />
      </div>
    </InteractionPlaceholder>
  );
}

function TeamSection() {
  return (
    <SectionBlock
      id={teamData.id}
      number={teamData.number}
      sectionLabel={teamData.sectionLabel}
      title={teamData.title}
      description={teamData.description}
    >
      <TeamInteractionPlaceholder />
    </SectionBlock>
  );
}

export default TeamSection;
