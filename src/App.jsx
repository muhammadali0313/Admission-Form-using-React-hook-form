// App.jsx
import React, { useState } from 'react';
import AdmissionForm from './component/admissionform';
import './index.css';

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleAdmissionSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="app-container">
      {submittedData ? (
        <div className="result-container">
          <h2>Submitted Admission Details</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      ) : (
        <AdmissionForm onSubmit={handleAdmissionSubmit} />
      )}
    </div>
  );
};

export default App;
