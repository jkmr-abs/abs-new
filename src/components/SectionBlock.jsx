import { ChevronDown } from 'lucide-react';

function SectionBlock({ id, number, eyebrow, title, description, children, action, className = '' }) {
  return (
    <section id={id} className={`section-block ${className}`}>
      <div className="section-grid">
        <div className="section-copy">
          <div className="section-kicker"><span>{number}</span><i />{eyebrow}</div>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p className="section-description">{description}</p>
          {action}
        </div>
        <div className="section-visual" aria-label={`${eyebrow} visual placeholder`}>
          {children}
        </div>
      </div>
      <div className="section-scroll-hint"><span>Scroll to explore</span><ChevronDown size={14} /></div>
    </section>
  );
}

export default SectionBlock;
