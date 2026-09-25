import ActionButtons from '../../../components/common/ActionButtons';
import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import Stats from '../../../components/common/Stats';
import SectionBlock from '../../../components/SectionBlock';
function HeroSection({ data: heroData, onNavigate }) {
  const action = (
    <div data-component="HeroActionGroup" className="space-y-9">
      <ActionButtons
        primaryButton={heroData.primaryButton}
        secondaryButton={heroData.secondaryButton}
        onAction={(button) => onNavigate(button.target)}
        buttonClassName="h-10 w-[152px] whitespace-nowrap px-3 py-2.5 text-[11px]"
      />
      <Stats items={heroData.additionalDetails} />
    </div>
  );

  return (
    <SectionBlock
      id={heroData.id}
      number={heroData.number}
      sectionLabel={heroData.label}
      title={heroData.title}
      titleLines={heroData.titleLines}
      titleHighlightWordIndexes={heroData.titleHighlightWordIndexes}
      description={heroData.description}
      action={action}
      interactionData={heroData.interaction}
    >
      <InteractionPlaceholder sectionId={heroData.id} />
    </SectionBlock>
  );
}

export default HeroSection;
