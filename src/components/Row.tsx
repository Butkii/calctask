// Row.tsx

interface RowProps {
  sign: '+' | '-';
  value: number;
  disabled: boolean;
  onSignChange: (value: '+' | '-') => void;
  onInputChange: (value: number) => void;
  onDelete: () => void;
  onToggle: () => void;
}

function Row(props: RowProps) {
  const { sign, value, disabled, onSignChange, onInputChange, onDelete, onToggle } = props;

  return (
    <div className="row-container">
      <select className={`select-sign ${disabled ? 'disabled' : ''}`} value={sign} onChange={(e) => onSignChange(e.target.value === '+' ? '+' : '-')}>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
      <input
        className={`value-input ${disabled ? 'disabled' : ''}`}
        type="number"
        value={value}
        onChange={(e) => onInputChange(parseInt(e.target.value))}
      />
      <button className={`action-button ${disabled ? 'disabled' : ''}`} onClick={onDelete}>
        Delete
      </button>
      <button className={`toggle-button ${disabled ? 'toggle-active' : ''}`} onClick={onToggle}>
        {disabled ? 'Enable ' : 'Disable'}
      </button>
    </div>
  );
}

export default Row;
