import ActionLink from '../../../components/ActionLink';
import SectionBlock from '../../../components/SectionBlock';

function ClientVisual() {
  const clients = ['Vitra', 'Arc’teryx', 'KIN', 'Noma', 'Sonos', 'Aesop'];

  return (
    <div className="relative h-full min-h-[295px] overflow-hidden border border-white/[0.12] bg-[radial-gradient(circle_at_45%_40%,rgba(255,103,29,0.08),transparent_30%),linear-gradient(112deg,rgba(32,34,39,0.83),rgba(7,8,11,0.92))] shadow-[0_0_2.8rem_rgba(255,103,29,0.13)] lg:h-[min(64vh,600px)] lg:min-h-[460px]">
      <div className="absolute left-[15px] right-[15px] top-[15px] z-10 flex justify-between text-[7px] uppercase tracking-[0.13em] text-white/45 lg:left-[23px] lg:right-[23px] lg:top-5 lg:text-[9px]"><span>In good company / 031</span><span>2014 — 2024</span></div>
      <div className="absolute left-[9%] top-[23%] font-display text-[29px] leading-[0.98] tracking-[-0.075em] text-abs-text lg:text-[clamp(27px,3.2vw,47px)]">“ABS helped us<br /><span className="text-abs-orange">see around corners.</span>”</div>
      <div className="absolute left-[9%] top-[58%] flex gap-3 text-[10px] leading-[1.45] text-abs-muted"><span className="text-[19px] text-abs-orange">—</span><span>Lauren Kim<br /><small className="text-[9px] text-abs-muted/55">Chief Brand Officer, KIN</small></span></div>
      <div className="absolute bottom-[17px] left-[6%] right-[6%] flex justify-between border-t border-white/[0.12] pt-[13px] font-display text-[10px] tracking-[-0.06em] text-white/45 lg:bottom-[31px] lg:left-[7%] lg:right-[7%] lg:pt-5 lg:text-[13px]"><span>Vitra</span><span className="font-semibold tracking-[-0.1em]">Arc’teryx</span><span>KIN</span><span className="font-semibold tracking-[0.02em]">Noma</span><span className="hidden lg:inline">Sonos</span><span className="hidden lg:inline tracking-[0.04em]">Aesop</span></div>
    </div>
  );
}

function ClientSection({ onNavigate }) {
  return (
    <SectionBlock id="client" number="04" eyebrow="Selected partners" title="Good company<br />makes <em>great work.</em>" description="We partner with teams who care deeply about what they put into the world — from first-time founders to global names." action={<ActionLink onClick={() => onNavigate('team')}>Meet the team</ActionLink>}>
      <ClientVisual />
    </SectionBlock>
  );
}

export default ClientSection;
