import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import MenuDrink from './components/MenuDrink'
import Footer from './components/Footer'
import Login from './components/Login'
import Join from './components/Join'
import Mypage from './components/Mypage'
import Store from './components/Store'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
       <Router basename="/Gongcha">
        <div className="App">
          <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/MenuDrink" element={<MenuDrink />} />
            <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/Join" element={<Join />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/Store" element={<Store />} />
          </Routes>
          <Footer />
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#333',
                color: '#fff',
                fontSize: '15px',
              },
              success: {
                iconTheme: {
                  primary: '#C30F30',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#C30F30',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
