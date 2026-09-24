import ActionLink from '../../../components/ActionLink';
import SectionBlock from '../../../components/SectionBlock';

function ClientVisual() {
  const clients = ['Vitra', 'Arc’teryx', 'KIN', 'Noma', 'Sonos', 'Aesop'];

  return (
    <div className="client-visual visual-frame">
      <div className="visual-topline"><span>In good company / 031</span><span>2014 — 2024</span></div>
      <div className="client-quote">“ABS helped us<br /><span>see around corners.</span>”</div>
      <div className="quote-meta"><span className="quote-mark">—</span><span>Lauren Kim<br /><small>Chief Brand Officer, KIN</small></span></div>
      <div className="client-logos">{clients.map((client) => <span key={client}>{client}</span>)}</div>
    </div>
  );
}

function ClientSection({ onNavigate }) {
  return (
    <SectionBlock
      id="client"
      number="04"
      eyebrow="Selected partners"
      title="Good company<br />makes <em>great work.</em>"
      description="We partner with teams who care deeply about what they put into the world — from first-time founders to global names."
      action={<ActionLink onClick={() => onNavigate('team')}>Meet the team</ActionLink>}
    >
      <ClientVisual />
    </SectionBlock>
  );
}

export default ClientSection;
