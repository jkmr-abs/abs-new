import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

function ActionButtons({ primaryButton, secondaryButton, onAction, className = '', buttonClassName = '' }) {
  if (!primaryButton && !secondaryButton) return null;

  return (
    <div data-component="ActionButtons" className={`flex flex-wrap gap-3 ${className}`}>
      <PrimaryButton button={primaryButton} onClick={() => onAction?.(primaryButton)} className={buttonClassName} />
      <SecondaryButton button={secondaryButton} onClick={() => onAction?.(secondaryButton)} className={buttonClassName} />
    </div>
  );
}

export default ActionButtons;
