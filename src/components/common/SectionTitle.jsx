function SectionTitle({ title, titleLines, highlightWordIndex, highlightWordIndexes = [], dataElement = 'SectionTitle', className = '' }) {
  const lines = titleLines?.length ? titleLines : [title];
  let wordOffset = 0;

  return (
    <h2 data-element={dataElement} className={`max-w-[620px] font-display text-[clamp(41px,12vw,62px)] font-medium leading-[0.98] tracking-[-0.075em] text-abs-text lg:text-[clamp(45px,5.55vw,83px)] ${className}`}>
      {lines.map((line, lineIndex) => {
        const words = typeof line === 'string' ? line.trim().split(/\s+/) : [];
        const renderedLine = words.map((word, index) => {
          const currentIndex = wordOffset + index;
          return (
            <span className={currentIndex === highlightWordIndex || highlightWordIndexes.includes(currentIndex) ? 'text-abs-orange' : ''} key={`${word}-${currentIndex}`}>
              {index > 0 && ' '}{word}
            </span>
          );
        });
        wordOffset += words.length;

        return <span className={titleLines?.length ? 'block whitespace-nowrap' : 'inline'} key={`${line}-${lineIndex}`}>{renderedLine}</span>;
      })}
    </h2>
  );
}

export default SectionTitle;
