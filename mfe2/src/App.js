/* eslint-disable react/jsx-pascal-case */
import React from "react"
// import logo from './logo.svg';
// import './App.css';

const MFE1_Button = React.lazy(
  () => import('MFE1/Button')
);

function App() {
  return (
    <div>
    <h1>MFE2</h1>
    <div>
      <React.Suspense fallback='Loading Button'>
        <MFE1_Button />
      </React.Suspense>
    </div>
    <h2>MFE2</h2>
  </div>
  );
}

export default App;
