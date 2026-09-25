import { Circle } from 'lucide-react';

const iconMap = { circle: Circle };

function Features({ items, className = '', featureComponent = 'Feature', iconElement = 'FeatureIcon', contentElement = 'FeatureContent' }) {
  if (!items?.length) return null;

  return (
    <div data-component="Features" className={className}>
      <ul data-component="FeatureList" className="m-0 flex list-none flex-col p-0">
        {items.map((item) => {
          const Icon = typeof item.icon === 'function' ? item.icon : iconMap[item.icon] || Circle;
          return (
            <li data-component={featureComponent} className="flex items-start gap-3 border-b border-white/10 py-3 first:border-t first:border-white/10 lg:gap-4 lg:py-4" key={item.id}>
              <Icon data-element={iconElement} className="mt-0.5 shrink-0 text-abs-orange" size={19} strokeWidth={1.5} />
              <span data-element={contentElement} className="min-w-0 text-xs leading-[1.6] text-abs-text lg:text-sm">{item.title || item.label}{item.description && `: ${item.description}`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Features;
