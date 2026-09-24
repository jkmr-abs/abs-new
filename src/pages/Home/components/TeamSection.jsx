import { Asterisk } from 'lucide-react';
import ActionLink from '../../../components/ActionLink';
import SectionBlock from '../../../components/SectionBlock';

function TeamVisual() {
  return (
    <div className="team-visual visual-frame">
      <div className="visual-topline"><span>The people / 018</span><span>Always becoming</span></div>
      <div className="team-portrait">
        <div className="portrait-head" />
        <div className="portrait-body" />
        <div className="portrait-orb" />
        <span className="portrait-label">A collective<br />of specialists</span>
      </div>
      <div className="team-bottom"><span>Designers, strategists,<br />developers &amp; dreamers.</span><span className="team-asterisk"><Asterisk size={24} /></span></div>
    </div>
  );
}

function TeamSection({ onNavigate }) {
  return (
    <SectionBlock
      id="team"
      number="05"
      eyebrow="The studio"
      title="Small enough to<br /><em>care more.</em>"
      description="A close-knit collective with big-agency range. We bring the right minds to every challenge, and stay close from day one to done."
      action={<ActionLink onClick={() => onNavigate('footer')}>Come say hello</ActionLink>}
    >
      <TeamVisual />
    </SectionBlock>
  );
}

export default TeamSection;
