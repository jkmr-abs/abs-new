import SectionBlock from '../../../components/SectionBlock';

function ClientVisual() {
  return (
    <div data-component="ClientImagePlaceholder" className="relative h-full min-h-[295px] overflow-hidden border border-white/[0.12] bg-[radial-gradient(circle_at_45%_40%,rgba(255,103,29,0.08),transparent_30%),linear-gradient(112deg,rgba(32,34,39,0.83),rgba(7,8,11,0.92))] shadow-[0_0_2.8rem_rgba(255,103,29,0.13)]">
      <div className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-abs-orange/70 shadow-[0_0_35px_rgba(255,103,29,0.3)]" />
      <div className="absolute left-1/2 top-1/2 h-[63%] w-[63%] -translate-x-1/2 -translate-y-1/2 rotate-[-28deg] rounded-full border border-white/15" />
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[31%] -translate-x-1/2 -translate-y-1/2 rotate-[55deg] rounded-full border border-white/10" />
      <div className="absolute left-[14%] top-[18%] h-2 w-2 rounded-full bg-abs-orange shadow-[0_0_18px_#ff671d]" />
      <div className="absolute bottom-[19%] right-[14%] h-2 w-2 rounded-full bg-abs-orange shadow-[0_0_18px_#ff671d]" />
      <div className="absolute bottom-[12%] left-[12%] right-[12%] flex items-center gap-2"><span className="h-px flex-1 bg-white/20" /><span className="h-px w-[24%] bg-abs-orange/60" /></div>
    </div>
  );
}

function ClientSection() {
  return (
    <SectionBlock id="client" number="04" sectionLabel="Selected partners" title="Good company<br />makes <em>great work.</em>" description="We partner with teams who care deeply about what they put into the world — from first-time founders to global names.">
      <ClientVisual />
    </SectionBlock>
  );
}

export default ClientSection;
