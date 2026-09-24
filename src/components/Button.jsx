import { ArrowUpRight, ChevronDown } from 'lucide-react';

const variantStyles = {
  primary: 'border-transparent bg-abs-orange text-abs-ink shadow-[0_0_0_rgba(255,103,29,0)] hover:-translate-y-1 hover:border-transparent hover:bg-abs-orange-soft hover:shadow-[0_10px_28px_rgba(255,103,29,0.3)] active:translate-y-0 active:scale-[0.98]',
  outline: 'border-abs-orange bg-transparent text-abs-text hover:-translate-y-1 hover:bg-abs-orange hover:text-abs-ink hover:shadow-[0_10px_28px_rgba(255,103,29,0.2)] active:translate-y-0 active:scale-[0.98]',
};

function Button({ children, variant = 'primary', onClick, type = 'button', icon = 'up', className = '' }) {
  const Icon = icon === 'down' ? ChevronDown : ArrowUpRight;

  return (
    <button
      type={type}
      className={`group inline-flex items-center justify-center gap-3 rounded-full border px-5 py-3 text-xs font-medium tracking-[0.02em] transition-[transform,background-color,border-color,box-shadow,color] duration-200 focus:outline-none focus:ring-2 focus:ring-abs-orange/60 focus:ring-offset-2 focus:ring-offset-abs-ink ${variantStyles[variant] || variantStyles.primary} ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
      <Icon size={15} strokeWidth={1.8} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );
}

export default Button;
