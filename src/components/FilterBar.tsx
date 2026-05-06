'use client';

const TYPE_FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Jackets', value: 'jacket' },
  { label: 'Bags', value: 'bag' },
  { label: 'Accessories', value: 'accessory' },
];

const COLOR_FILTERS = [
  { label: 'Black', value: 'black', color: '#1a1a1a' },
  { label: 'Brown', value: 'brown', color: '#8b5e3c' },
  { label: 'Tan', value: 'tan', color: '#c8a882' },
  { label: 'Cognac', value: 'cognac', color: '#9b4826' },
  { label: 'Burgundy', value: 'burgundy', color: '#722f37' },
  { label: 'Olive', value: 'olive', color: '#6b7c4b' },
];

interface FilterBarProps {
  activeType: string;
  onTypeChange: (type: string) => void;
}

export default function FilterBar({ activeType, onTypeChange }: FilterBarProps) {
  return (
    <div className="filter-bar" id="products">
      <span className="filter-label">Filter by:</span>
      {TYPE_FILTERS.map(f => (
        <div key={f.value} className={`filter-chip${activeType === f.value ? ' active' : ''}`} onClick={() => onTypeChange(f.value)}>
          {f.label}
        </div>
      ))}
      <div style={{ width: 1, background: 'var(--border)', height: 20, margin: '0 6px' }} />
      {COLOR_FILTERS.map(f => (
        <div key={f.value} className="filter-chip" onClick={() => onTypeChange('all')}>
          <span className="color-dot" style={{ background: f.color }} />
          {f.label}
        </div>
      ))}
    </div>
  );
}
