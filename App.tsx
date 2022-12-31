import * as React from 'react';
import './style.css';
import CardTest from './testproject/CardTest';
import TestProject from './testproject/TestProject';
import DuneTest from './testproject/DuneTest';

export default function App() {
  return (
    <div className="container">
      {/* <TestProject /> */}
      {/* <CardTest /> */}
      <DuneTest />
    </div>
  );
}
