function InteractionPlaceholder({ sectionId, children }) {
  return (
    <div data-component="InteractionPlaceholder" data-placeholder-for={sectionId} className="relative h-full min-h-[295px] overflow-hidden border border-white/[0.12] bg-[radial-gradient(circle_at_50%_48%,rgba(255,103,29,0.14),transparent_27%),linear-gradient(115deg,rgba(32,34,39,0.82),rgba(7,8,11,0.94))] shadow-[0_0_2.8rem_rgba(255,103,29,0.13)] lg:h-[min(64vh,600px)] lg:min-h-[460px]">
      <div data-element="DummyImage" className="absolute left-1/2 top-1/2 h-[46%] w-[52%] -translate-x-1/2 -translate-y-1/2 rotate-[-22deg] rounded-[48%] border border-white/15" />
      <div className="absolute left-1/2 top-1/2 h-[68%] w-[35%] -translate-x-1/2 -translate-y-1/2 rotate-[58deg] rounded-[48%] border border-abs-orange/55" />
      <div className="absolute left-1/2 top-1/2 h-[25%] w-[25%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-abs-orange/20 blur-2xl" />
      {children}
    </div>
  );
}

export default InteractionPlaceholder;
