import React from 'react';
import s from './App.module.scss';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={s.App}>
      <Navbar/>
    </div>
  );
}

export default App;
