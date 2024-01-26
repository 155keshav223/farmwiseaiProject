import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddFieldForm from './components/AddFieldForm';
import { createStore } from 'redux';
import DisplayFields from './components/DisplayFields';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import ValidationPage from './components/ValidationPage';
const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<div><AddFieldForm /><DisplayFields /></div>} />  
        
          <Route path="/vali" element={<ValidationPage />} />
          
        </Routes>
      </div>
    </Router>
    </Provider>
    
  );
};

export default App;