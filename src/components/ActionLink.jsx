import { ArrowUpRight } from 'lucide-react';

function ActionLink({ children, onClick }) {
  return (
    <button className="action-link" onClick={onClick}>
      {children}
      <span><ArrowUpRight size={16} /></span>
    </button>
  );
}

export default ActionLink;
