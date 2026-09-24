import { ArrowDownRight } from 'lucide-react';
import ActionLink from '../../../components/ActionLink';
import SectionBlock from '../../../components/SectionBlock';

function ExpertiseVisual() {
  return (
    <div className="expertise-visual visual-frame">
      <div className="visual-topline"><span>Areas of focus / 03</span><span>Selected signals</span></div>
      <div className="signal-grid">
        <div className="signal-card signal-large"><span>01 / CULTURE</span><strong>Make<br /><em>meaning</em></strong><ArrowDownRight size={20} /></div>
        <div className="signal-card signal-orange"><span>02 / FUTURE</span><strong>Stay<br />curious<span className="orange-dot">.</span></strong></div>
        <div className="signal-card signal-small"><span>03 / CRAFT</span><div className="mini-bars"><i /><i /><i /><i /></div><strong>Details<br />matter.</strong></div>
      </div>
      <div className="expertise-caption"><span>We work at the intersection of</span><b>culture / technology / design</b></div>
    </div>
  );
}

function ExpertiseSection({ onNavigate }) {
  return (
    <SectionBlock
      id="expertise"
      number="03"
      eyebrow="How we think"
      title="Curious by nature.<br /><em>Precise by design.</em>"
      description="We look sideways before we look forward. The best answers often live between disciplines, industries and the obvious next step."
      action={<ActionLink onClick={() => onNavigate('client')}>Our point of view</ActionLink>}
    >
      <ExpertiseVisual />
    </SectionBlock>
  );
}

export default ExpertiseSection;
