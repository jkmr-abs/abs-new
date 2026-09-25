function InteractionPanel({ sectionLabel, children }) {
  return (
    <div data-component="InteractionPanel" data-panel-type="visual" aria-label={`${sectionLabel} visual placeholder`} className="min-w-0 h-full self-start lg:h-auto lg:self-center">
      {children}
    </div>
  );
}

export default InteractionPanel;
