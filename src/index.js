// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Autre from './Autre'; 
import Login from './login';
import Detail from './Detail'; 
import Chat from './Chat'; 

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/list" element={<Autre />} />
      <Route path="/SingIn" element={<Login />} />
      <Route path="/Detail" element={<Detail />} />
      <Route path="/Chat" element={<Chat />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
