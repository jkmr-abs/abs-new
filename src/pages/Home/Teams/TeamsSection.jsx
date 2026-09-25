import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import SectionBlock from '../../../components/SectionBlock';

function TeamInteractionPlaceholder({ teamId, interaction }) {
  return (
    <InteractionPlaceholder sectionId={teamId} interaction={interaction}>
      <div data-component="TeamInteractionSlots" className="absolute inset-x-[12%] bottom-[16%] top-[16%] grid grid-cols-3 gap-2" aria-label="Three future team interaction slots">
        <div data-element="TeamInteractionSlot" className="border border-white/10 bg-white/[0.025]" />
        <div data-element="TeamInteractionSlot" className="border border-abs-orange/45 bg-abs-orange/[0.06]" />
        <div data-element="TeamInteractionSlot" className="border border-white/10 bg-white/[0.025]" />
      </div>
    </InteractionPlaceholder>
  );
}

function TeamsSection({ data: teamData }) {
  return (
    <SectionBlock
      id={teamData.id}
      number={teamData.number}
      sectionLabel={teamData.sectionLabel}
      title={teamData.title}
      titleHighlightWordIndexes={teamData.titleHighlightWordIndexes}
      description={teamData.description}
      interactionData={teamData.interaction}
    >
      <TeamInteractionPlaceholder teamId={teamData.id} interaction={teamData.interaction} />
    </SectionBlock>
  );
}

export default TeamsSection;
