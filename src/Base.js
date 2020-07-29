import React from 'react';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';

function Base({children, signin}) {
  return (
    <div className="App">
      <Header signin={signin}/>
      {children}
      <Footer/>
    </div>
  );
}

export default Base;
