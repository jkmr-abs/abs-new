function Description({ text, dataElement = 'SectionDescription', className = '' }) {
  if (!text) return null;

  return <p data-element={dataElement} className={`text-xs leading-[1.55] text-abs-muted lg:text-sm lg:leading-[1.7] ${className}`}>{text}</p>;
}

export default Description;
