import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './components/Nav';

class App extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        links: ['Contactos', 'Compañías', 'Usuarios', 'Región/Ciudad'],
        userId: 0,
        companies: [],
        contacts: [],
        users: []
  }}
  getData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({users: data}))
  }
  render(){
  // "render()" va a crear un componente.
    return(
      <> {/*React fragment*/}
        <header>
          <h1>Data Warehouse</h1>
        </header>
        <Nav links = {this.state.links}/> {/*Props*/}
      <button onClick = {() => this.getData(`http://localhost:3200/user`)}>Usuarios</button>
      <p></p>
      </>
    )}}

export default App;
