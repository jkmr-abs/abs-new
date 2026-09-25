import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import SectionBlock from '../../../components/SectionBlock';

function TeamInteractionPlaceholder() {
  return (
    <InteractionPlaceholder sectionId="team">
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
    <SectionBlock id="team" number="05" sectionLabel="TEAMS LABEL" title="Teams section title" description="Teams section description">
      <TeamInteractionPlaceholder />
    </SectionBlock>
  );
}

export default TeamSection;
