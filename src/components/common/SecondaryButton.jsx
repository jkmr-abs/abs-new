import Button from '../Button';

function SecondaryButton({ button, onClick, className = '' }) {
  if (!button) return null;

  return <Button className={className} variant="outline" onClick={onClick} icon={button.icon || 'up'}>{button.label}</Button>;
}

export default SecondaryButton;
