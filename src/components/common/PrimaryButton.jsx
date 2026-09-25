import Button from '../Button';

function PrimaryButton({ button, onClick, className = '' }) {
  if (!button) return null;

  return <Button className={className} onClick={onClick} icon={button.icon}>{button.label}</Button>;
}

export default PrimaryButton;
