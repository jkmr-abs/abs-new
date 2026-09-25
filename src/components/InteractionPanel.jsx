function InteractionPanel({ sectionLabel, data, children }) {
  return (
    <div data-component="InteractionPanel" data-panel-type="visual" data-interaction-type={data?.type || 'placeholder'} aria-label={`${sectionLabel} visual placeholder`} className="min-w-0 h-full lg:h-auto">
      {children}
    </div>
  );
}

export default InteractionPanel;
