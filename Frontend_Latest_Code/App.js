import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListPolicyComponent from './components/ListPolicyComponent';
import PolicyComponent from './components/PolicyComponent';
import Login from './components/Login'; 
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="container">
        <Routes>
          {!isAuthenticated ? (
            
            <Route path="*" element={<Login onLogin={setIsAuthenticated} />} />
          ) : (
            
            <>
              <Route path="/" element={<ListPolicyComponent />} />
              <Route path="/Policy" element={<ListPolicyComponent />} />
              <Route path="/add-Policy" element={<PolicyComponent />} />
              <Route path="/edit-Policy/:id" element={<PolicyComponent />} />
            </>
          )}
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;