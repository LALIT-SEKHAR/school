import React from 'react';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';

function Base({children, signin, addteacher, addstudent}) {
  return (
    <div className="App">
      <Header signin={signin} addteacher={addteacher} addstudent={addstudent}/>
      {children}
      <Footer/>
    </div>
  );
}

export default Base;
