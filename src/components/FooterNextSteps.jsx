import { Handshake, Lightbulb, MessagesSquare } from 'lucide-react';

const stepIcons = {
  user: MessagesSquare,
  handshake: Lightbulb,
  arrow: Handshake,
};

function FooterNextSteps({ label, steps, className = '' }) {
  return (
    <div data-component="FooterNextSteps" className={`rounded-sm border border-abs-orange/70 px-4 py-5 sm:px-5 sm:py-6 lg:px-7 lg:py-7 ${className}`}>
      <span data-element="FooterNextStepsLabel" className="mb-5 block text-[9px] font-medium uppercase tracking-[0.14em] text-abs-orange lg:mb-6 lg:text-[10px]">
        {label}
      </span>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-8 lg:gap-12">
        {steps.map((step) => {
          const Icon = stepIcons[step.icon] || Handshake;
          return (
            <div data-component="FooterNextStep" className="flex flex-col items-start" key={step.id}>
              <span data-element="FooterStepNumber" className="text-[9px] font-medium tracking-[0.12em] text-abs-orange lg:text-[10px]">{step.number}</span>
              <Icon data-element="FooterStepIcon" className="mt-3 text-abs-orange" size={32} strokeWidth={1.35} aria-hidden="true" />
              <span data-element="FooterStepLabel" className="mt-3 text-sm leading-5 text-abs-text lg:text-base">{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FooterNextSteps;
