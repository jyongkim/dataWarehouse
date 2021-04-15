import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Table from './components/Table';

class App extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        links: ['Contactos', 'Compañías', 'Usuarios', 'Región/Ciudad'],
        userId: 1,
        companies: [],
        contacts: [],
        users: []
  }}
  getData = (url) => {
    let server = `http://localhost:3200/`
    fetch(server + url)
      .then(response => response.json())
      .then(data => {this.setState({contacts: data})})
  }
  render(){
  // "render()" va a crear un componente.
    return(
      <> {/*React fragment*/}
        <header>
          <h1>Data Warehouse</h1>
        </header>
        <Nav links = {this.state.links}/> {/*Props*/}
      <button onClick = {() => this.getData(`user`)}>Usuarios</button>
      <button onClick = {() => {this.getData(`contact/${this.state.userId}`)}}>Contactos</button>
      <Table data = {this.state.contacts}/>
      </>
    )}}

export default App;
