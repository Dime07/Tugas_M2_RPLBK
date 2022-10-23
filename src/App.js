import React from 'react';
import './App.css';
import ReactJSX, { ReactNoJSX } from './components/ReactJSX';
import CompAndProps from './components/CompAndProps';
import Button from './elements/Button';
import TextInput from './elements/TextInput.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactJSX />
        <ReactNoJSX />

        <div className="Components">
          <CompAndProps bgColor="#fafafa" />
          <form action="">
            <TextInput border="blue" placeholder="Nama" />
            <Button background="blue">
              <span>Kirim</span>
            </Button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
