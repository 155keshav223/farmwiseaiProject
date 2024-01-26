
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ValidationPage = () => {
  const fields = useSelector((state) => state.fields.fields);
  const [formData, setFormData] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const renderField = (field) => {
    const { fieldName, fieldType, formData } = field;

    switch (fieldType) {
      case 'Dropdown':
        return (
          <div key={fieldName}>
            <label>{fieldName} - {formData.fieldDisplayName}:</label>
            <select onChange={(e) => handleInputChange(fieldName, e.target.value)}>
              {formData.fieldData.split(',').map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      case 'Text Box':
        return (
          <div key={fieldName}>
            <label>{fieldName} - {formData.fieldDisplayName}:</label>
            <input
              type={formData.fieldDataType}
              maxLength={formData.fieldMaxLength}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
            />
          </div>
        );

      case 'Date Picker':
        return (
          <div key={fieldName}>
            <label>{fieldName} - {formData.fieldDisplayName}:</label>
            <div>
              <label>Min Date:</label>
              <input type="date" onChange={(e) => handleInputChange(fieldName + '_minDate', e.target.value)} />
            </div>
            <div>
              <label>Max Date:</label>
              <input type="date" onChange={(e) => handleInputChange(fieldName + '_maxDate', e.target.value)} />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleValidation = () => {
    // Perform validation based on the formData
    console.log('Validation Data:', formData);
  };

  return (
    <div>
      <h2>Data Validation Page</h2>
      <form>
        {fields.map(renderField)}
        <button type="button" onClick={handleValidation}>
          Validate
        </button>
      </form>
    </div>
  );
};

export default ValidationPage;
