import './App.css';
import { Component } from 'react';
import Nav from './components/Nav';
import Form from './components/Form'
import Table from './components/Table';
import formFields from './components/formField.json'

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        links: ['Contactos', 'Compañías', 'Usuarios','Región/Ciudad'],
        userId: 1,
        userData: [],
        formFields: formFields.Login
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
        <Nav links = {this.state.links}/> {/*Props*/}
      <button onClick = {() =>{ 
        this.getData(`user/${this.state.userId}`)
        this.setState({formFields: formFields.User})
      }}>Usuarios</button>
      <button onClick = { () =>{ 
        this.getData(`company/${this.state.userId}`)
        this.setState({formFields: formFields.Company})
      }}> Compañías</button>
      <button onClick = {() =>{ 
        this.getData(`contact/${this.state.userId}`)
        this.setState({formFields: (formFields.Contact + formFields.Preference)})
      }}>Contactos</button>
      <Form data={this.state.formFields}/>
      <Table data={this.state.userData}/>
      </>
    )}
  componentDidUpdate(){
    return(
      console.log(this.state.formFields)
    )
  }
  componentDidMount(){
    return(
      console.log(formFields)
    )}}

export default App;
