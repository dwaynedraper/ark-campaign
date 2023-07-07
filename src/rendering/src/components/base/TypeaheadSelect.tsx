import React, { useState, ChangeEvent } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

// Define the type for an option
interface Option {
  displayText: string;
  value: string;
}

// Define the props for your component
interface TypeaheadSelectProps {
  options: Option[];
}

const TypeaheadSelect: React.FC<TypeaheadSelectProps> = ({ options }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSelectOption = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  const filteredOptions = options.filter((option) => option.displayText.toLowerCase().includes(inputValue.toLowerCase()));

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type to search..." />
        {inputValue && (
          <span
            onClick={handleClearInput}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
          >
            <AiOutlineClose />
          </span>
        )}
      </div>
      <select value={selectedValue} onChange={handleSelectOption}>
        <option value="">Select an option</option>
        {filteredOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.displayText}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeaheadSelect;
