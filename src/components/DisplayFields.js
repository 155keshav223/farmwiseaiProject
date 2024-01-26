
import React from 'react';
import { useSelector } from 'react-redux';
import './DisplayFields.css';

const DisplayFields = () => {
  const fields = useSelector((state) => state.fields.fields);

  return (
    <div className="display-fields">
      <h2>Displaying Added Fields:</h2>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Field Name</th>
          
            <th>Field Data Type</th>
            <th>Field Validation</th>
            <th>Field Data</th>
            <th>Is Mandatory</th>
          </tr>
        </thead>
        <tbody>
          {fields.slice(0, 4).map((field, index) => (
            
            <tr key={index}>
              <td>{index + 1}</td>
             
              <td>{field.formData.fieldDisplayName || 'null'}</td>
              <td>{field.fieldType || 'null'}</td>
              <td>
                {field.fieldType === 'Text Box'
                  ? `Max Length: ${field.formData.fieldMaxLength || 'null'}`
                  : field.fieldType === 'Date Picker'
                  ? `Min Date: ${field.formData.dateRangeValidation.minDate || 'null'}, Max Date: ${field.formData.dateRangeValidation.maxDate || 'null'}`
                  : 'null'}
              </td>
              <td>{field.formData.fieldData || 'null'}</td>
              <td>{field.formData.isMandatory || 'null'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayFields;

