function InteractionPanel({ sectionLabel, children }) {
  return (
    <div data-component="InteractionPanel" data-panel-type="visual" aria-label={`${sectionLabel} visual placeholder`} className="min-w-0 h-full lg:h-auto">
      {children}
    </div>
  );
}

export default InteractionPanel;
