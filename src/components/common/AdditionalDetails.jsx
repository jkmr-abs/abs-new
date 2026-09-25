function AdditionalDetails({ items, className = '' }) {
  if (!items?.length) return null;

  return (
    <div data-component="AdditionalDetails" className={className}>
      {items.map((item, index) => (
        <div data-component="AdditionalDetail" key={item.id || `${item.label}-${index}`}>
          {item.value && <strong data-element="AdditionalDetailValue">{item.value}</strong>}
          <span data-element="AdditionalDetailLabel">{item.label || item.title}</span>
          {item.description && <p data-element="AdditionalDetailDescription">{item.description}</p>}
        </div>
      ))}
    </div>
  );
}

export default AdditionalDetails;
