import { ArrowUpRight } from 'lucide-react';
import ActionLink from '../../../components/ActionLink';
import SectionBlock from '../../../components/SectionBlock';

function ServiceVisual() {
  const services = ['Brand strategy', 'Digital experiences', 'Art direction', 'Motion & 3D'];

  return (
    <div className="service-visual visual-frame">
      <div className="visual-topline"><span>Our practice / 004</span><span>01 — 04</span></div>
      <div className="service-list">
        {services.map((service, index) => (
          <div className={`service-row ${index === 0 ? 'is-selected' : ''}`} key={service}>
            <span className="service-number">0{index + 1}</span>
            <span>{service}</span>
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </div>
        ))}
      </div>
      <div className="service-note">One connected team.<br />Every angle considered.</div>
    </div>
  );
}

function ServiceSection({ onNavigate }) {
  return (
    <SectionBlock
      id="service"
      number="02"
      eyebrow="What we do"
      title="From first thought<br />to <em>full feeling.</em>"
      description="We bring strategy, design and technology together under one roof. No hand-offs. No lost-in-translation moments. Just work that lands."
      action={<ActionLink onClick={() => onNavigate('expertise')}>Explore our services</ActionLink>}
    >
      <ServiceVisual />
    </SectionBlock>
  );
}

export default ServiceSection;
