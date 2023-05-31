import React from 'react';
import './App.css';
import PersonalInformation from './components/personal-information';
import ProfessionalInformation from './components/professional-information';



function App() {
  return (
    <div className="container">
      <div className='row'>
        <PersonalInformation />
        <ProfessionalInformation />
      </div>
    </div>
  );
}

export default App;
