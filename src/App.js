import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TemplatesPage from './components/TemplatesPage';
import AIPage from './components/AIPage';
import UploadDocumentPage from './components/UploadDocumentPage'; // Correct the import statement

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/template-form" element={<TemplatesPage />} />
          <Route path="/ai-form-builder" element={<AIPage />} />
          <Route path="/upload-document" element={<UploadDocumentPage />} /> {/* Correct the route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
