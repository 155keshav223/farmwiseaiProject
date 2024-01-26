export const ADD_FIELD = 'ADD_FIELD';
export const addField = (fieldData) => ({
    type: 'ADD_FIELD',
    payload: fieldData,
  });
  
  export const clearFields = () => ({
    type: 'CLEAR_FIELDS',
  });
  