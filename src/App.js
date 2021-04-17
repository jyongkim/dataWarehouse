import './App.css';
import { Component } from 'react';
import Nav from './components/Nav';
import Login from './components/Login'
import Form from './components/Form'
import Table from './components/Table';

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        links: ['Contactos', 'Compañías', 'Usuarios','Región/Ciudad'],
        userId: 1,
        userData: []
  }}
  getData = (url) => {
    let server = `http://localhost:3200/`
    fetch(server + url)
      .then(response => response.json())
      .then(data => {this.setState({userData: data})})
  }
  render(){
  // "render()" va a crear un componente.
    return(
      <> {/*React fragment*/}
        <header>
          <h1>Data Warehouse</h1>
        </header>
        <Login />
        <Nav links = {this.state.links}/> {/*Props*/}
      <button onClick = {() => this.getData(`user/${this.state.userId}`)}>Usuarios</button>
      <button onClick = { () => this.getData(`company/${this.state.userId}`)}> Compañías</button>
      <button onClick = {() => {this.getData(`contact/${this.state.userId}`)}}>Contactos</button>
      <Table data={this.state.userData}/>
      </>
    )}}

export default App;
