
const initialState = {
    fields: [],
  };
  
  const fieldReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FIELD':
        return {
          ...state,
          fields: [...state.fields, action.payload],
        };
      case 'CLEAR_FIELDS':
        return {
          ...state,
          fields: [],
        };
      default:
        return state;
    }
  };
  
  export default fieldReducer;
  