import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './components/Header';
import Content from './components/Content.js'
import BrandAbout from './components/BrandAbout.js'
import BrandPromise from './components/BrandPromise.js'
import BrandIdentity from './components/BrandIdentity.js'
import MenuOrder from './components/MenuOrder.js'
import MenuDrink from './components/MenuDrink.js'
import MenuDM from './components/MenuDM.js'
import MenuReceipe from './components/MenuReceipe.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <div className="App">
       <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/BrandAbout" element={<BrandAbout />} />
          <Route path="/BrandPromise" element={<BrandPromise />} />
          <Route path="/BrandIdentity" element={<BrandIdentity />} />
          <Route path="/MenuOrder" element={<MenuOrder />} />
          <Route path="/MenuDrink" element={<MenuDrink />} />
          <Route path="/MenuDM" element={<MenuDM />} />
          <Route path="/MenuReceipe" element={<MenuReceipe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
