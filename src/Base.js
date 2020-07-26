import React from 'react';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';

function Base({children}) {
  return (
    <div className="App">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}

export default Base;
