import { Asterisk } from 'lucide-react';
import ActionLink from '../../../components/ActionLink';
import SectionBlock from '../../../components/SectionBlock';

function CircleMark() {
  return (
    <div className="circle-mark">
      <div className="circle-mark-center"><Asterisk size={18} strokeWidth={1.5} /></div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual visual-frame">
      <div className="visual-topline"><span>ABS / 001</span><span>Creative systems</span></div>
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="hero-orbit orbit-three" />
      <div className="hero-glow" />
      <CircleMark />
      <div className="hero-coordinate coordinate-one">40° 43' 45.8&quot; N</div>
      <div className="hero-coordinate coordinate-two">74° 00' 21.2&quot; W</div>
      <div className="hero-visual-footer"><span>New York / Worldwide</span><span className="live-dot" /> <span>Live since 2014</span></div>
    </div>
  );
}

function HomeSection({ onNavigate }) {
  return (
    <SectionBlock
      id="home"
      number="01"
      eyebrow="Independent creative studio"
      title="We make brands<br /><em>matter.</em>"
      description="ABS is an independent studio for ambitious people and meaningful ideas. We build identities, experiences and worlds that move culture forward."
      action={<ActionLink onClick={() => onNavigate('service')}>See what we do</ActionLink>}
      className="home-section"
    >
      <HeroVisual />
    </SectionBlock>
  );
}

export default HomeSection;
