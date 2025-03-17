import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListPolicyComponent from './components/ListPolicyComponent';
import PolicyComponent from './components/PolicyComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route path = "/" element = { <ListPolicyComponent /> }></Route>
              <Route path = "/policies" element = { <ListPolicyComponent /> }></Route>
              <Route path = "/add-policy" element = { <PolicyComponent />} ></Route>
              <Route path = "/edit-employee/:id" element = { <PolicyComponent />}></Route>
            </Routes>
        </div>
        <FooterComponent />
        </BrowserRouter>
    </div>
  );
}

export default App;