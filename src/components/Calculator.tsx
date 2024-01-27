// Calculator.tsx
import React, { useState, useEffect } from 'react';
import Row from './Row';
import './styles.css';

interface RowInterface {
  sign: '+' | '-';
  value: number;
  disabled: boolean;
}

function Calculator() {
  const [rows, setRows] = useState<RowInterface[]>([
    { sign: '+', value: 0, disabled: false },
  ]);

  const calculateResult = (rows: RowInterface[]) => {
    return rows.reduce((total, row) => {
      if (!row.disabled && row.value) {
        return row.sign === '+' ? total + row.value : total - row.value;
      }
      return total;
    }, 0);
  };

  const [result, setResult] = useState(calculateResult(rows));

  useEffect(() => {
    setResult(calculateResult(rows));
  }, [rows]);

  const addRow = () => {
    setRows([...rows, { sign: '+', value: 0, disabled: false }]);
  };

  const deleteRow = (index: number) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const toggleRow = (index: number) => {
    const updatedRows = [...rows];
    updatedRows[index].disabled = !updatedRows[index].disabled;
    setRows(updatedRows);
  };

  const handleSignChange = (index: number, sign: '+' | '-') => {
    const updatedRows = [...rows];
    updatedRows[index].sign = sign;
    setRows(updatedRows);
  }

  const handleInputChange = (index: number, value: number) => {
    const updatedRows = [...rows];
    updatedRows[index].value = value;
    setRows(updatedRows);
  };

  return (
    <div className="calculator-container">
      <button className="action-button" onClick={addRow}>
        Add Row
      </button>
      <div className='rows-background'>
        <div className="rows-container">
        {rows.map((row, index) => (
          <Row
            key={index}
            sign={row.sign}
            value={row.value}
            disabled={row.disabled}
            onSignChange={(sign) => handleSignChange(index, sign)}
            onInputChange={(value) => handleInputChange(index, value)}
            onDelete={() => deleteRow(index)}
            onToggle={() => toggleRow(index)}
          />
        ))}
      </div>
      </div>
      <div className="result-container">
        <strong>Result: {result}</strong>
      </div>
    </div>
  );
}

export default Calculator;
