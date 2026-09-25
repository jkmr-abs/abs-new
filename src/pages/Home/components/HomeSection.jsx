import Button from '../../../components/Button';
import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import SectionBlock from '../../../components/SectionBlock';
import { sectionData } from '../../../data/homeData';

const homeData = sectionData.home;

function HeroInteractionPlaceholder() {
  return <InteractionPlaceholder sectionId={homeData.id} />;
}

function HeroSupportingInformation() {
  return (
    <div data-component="HeroSupportingInformation" className="grid max-w-[520px] grid-cols-3 gap-4 border-t border-white/10 pt-5 lg:gap-6">
      {homeData.supportingInformation.map((item) => (
        <div key={`${item.value}-${item.label}`}>
          <strong className="font-display text-xl font-medium tracking-[-0.06em] text-abs-text lg:text-2xl">{item.value}</strong>
          <span className="mt-1 block text-[8px] uppercase leading-[1.35] tracking-[0.1em] text-abs-muted lg:text-[9px]">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function HomeSection({ onNavigate }) {
  const action = (
    <div data-component="HeroActionGroup" className="space-y-9">
      <div className="flex flex-wrap gap-3">
        {homeData.actions.map((item) => (
          <Button
            className="w-[148px]"
            key={item.label}
            variant={item.variant}
            icon={item.icon}
            onClick={() => onNavigate(item.target)}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <HeroSupportingInformation />
    </div>
  );

  return (
    <SectionBlock
      id={homeData.id}
      number={homeData.number}
      sectionLabel={homeData.sectionLabel}
      title={homeData.title}
      description={homeData.description}
      action={action}
    >
      <HeroInteractionPlaceholder />
    </SectionBlock>
  );
}

export default HomeSection;
