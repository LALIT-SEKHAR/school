import React from 'react';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';

function Home() {
  return (
    <div className="App">
      <Header/>
      <h1>home page</h1>
      <Footer/>
    </div>
  );
}

export default Home;
