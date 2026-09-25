import Button from '../../../components/Button';
import InteractionPlaceholder from '../../../components/InteractionPlaceholder';
import SectionBlock from '../../../components/SectionBlock';

function HeroInteractionPlaceholder() {
  return <InteractionPlaceholder sectionId="home" />;
}

function HeroSupportingInformation() {
  return (
    <div data-component="HeroSupportingInformation" className="grid max-w-[520px] grid-cols-3 gap-4 border-t border-white/10 pt-5 lg:gap-6">
      {[['00', 'Supporting item'], ['00', 'Supporting item'], ['00', 'Supporting item']].map(([value, label], index) => (
        <div key={`${label}-${index}`}>
          <strong className="font-display text-xl font-medium tracking-[-0.06em] text-abs-text lg:text-2xl">{value}</strong>
          <span className="mt-1 block text-[8px] uppercase leading-[1.35] tracking-[0.1em] text-abs-muted lg:text-[9px]">{label}</span>
        </div>
      ))}
    </div>
  );
}

function HomeSection({ onNavigate }) {
  const action = (
    <div data-component="HeroActionGroup" className="space-y-9">
      <div className="flex flex-wrap gap-3">
        <Button className="w-[148px]" onClick={() => onNavigate('service')}>Primary action</Button>
        <Button className="w-[148px]" variant="outline" icon="down" onClick={() => onNavigate('team')}>Secondary action</Button>
      </div>
      <HeroSupportingInformation />
    </div>
  );

  return (
    <SectionBlock id="home" number="01" sectionLabel="HERO LABEL" title="Hero section title" description="Hero section description" action={action}>
      <HeroInteractionPlaceholder />
    </SectionBlock>
  );
}

export default HomeSection;
