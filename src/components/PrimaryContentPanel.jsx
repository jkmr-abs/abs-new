import Description from './common/Description';
import Label from './common/Label';
import SectionTitle from './common/SectionTitle';

function PrimaryContentPanel({ sectionId, number, sectionLabel, title, titleLines, titleHighlightWordIndexes, titleClassName, description, action }) {
  return (
    <div data-component="PrimaryContentPanel" data-section-id={sectionId} className="relative z-10 max-w-[520px] self-start lg:self-auto">
      <Label number={number} label={sectionLabel} />
      <SectionTitle title={title} titleLines={titleLines} highlightWordIndexes={titleHighlightWordIndexes} className={titleClassName} />
      <Description text={description} className="my-[18px] max-w-[400px] lg:my-[29px] lg:mb-[31px]" />
      {action && <div data-element="SectionActionGroup">{action}</div>}
    </div>
  );
}

export default PrimaryContentPanel;
