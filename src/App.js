import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './components/Nav';

class App extends React.Component{
  render(){
  // "render()" va a crear un componente.
    return(
      <> {/*React fragment*/}
        <header>
          <h1>Data Warehouse</h1>
        </header>
        <Nav/>
        <Nav/>
        <Nav/>
      </>
    )}}

export default App;
