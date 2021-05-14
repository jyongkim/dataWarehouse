import './App.css';
import {useEffect,useState} from 'react';
import Contact from './pages/Contact'
// import { Component } from 'react';
// import Nav from './components/Nav';
// import Form from './components/Form'
// import Table from './components/Table';
// import formFields from './components/formField.json'

// class App extends Component{
//   constructor(props){
//     super(props)
//       this.state = {
//         links: ['Contactos', 'Compañías', 'Usuarios','Región/Ciudad'],
//         userId: 1,
//         userData: [],
//         formFields: formFields.Login,
        
//   }}
//   getData = (url) => {
//     let server = `http://localhost:3200/`
//     fetch(server + url)
//       .then(response => response.json())
//       .then(data => {this.setState({userData: data})})
//   }


//   render(){
//   // "render()" va a crear un componente.
//     return(
//       <> {/*React fragment*/}
//         <Nav links = {this.state.links} /> {/*Props*/}
//       <button onClick = {() =>{ 
//         this.getData(`user/${this.state.userId}`)
//         this.setState({formFields: formFields.User})
//       }}>Usuarios</button>
//       <button onClick = { () =>{ 
//         this.getData(`company/${this.state.userId}`)
//         this.setState({formFields: formFields.Company})
//       }}> Compañías</button>
//       <button onClick = {() =>{ 
//         this.getData(`contact/${this.state.userId}`)
//         this.setState({formFields: (formFields.Contact + formFields.Preference)})
//       }}>Contactos</button>
//       <Form data={this.state.formFields}/>
//      
//       </>
//     )}
//   componentDidUpdate(){
//     return(
//       console.log(this.state.formFields)
//     )
//   }
//   componentDidMount(){
//     return(
//       console.log(formFields)
//     )}}

// export default App;
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
        let server = `http://localhost:3200/`;
    fetch(server + 'contact/1')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setContacts(data)})
    
  }, [])
  return (
    <Router>
      <div>
        <nav>
          <header>
              <h1>Data Warehouse</h1>
          </header>
          <ul className="menu">
            <li>
              <Link to="/contact">Contactos</Link>
            </li>
            <li>
              <Link to="/company">Compañías</Link>
            </li>
            <li>
              <Link to="/users">Usuarios</Link>
            </li>
            <li>
              <Link to="/pref">Región/Ciudad</Link>
            </li>
          </ul>
        </nav>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact contacts={contacts}/>
          </Route>
          <Route path="/company">
            <Users />
          </Route>
          <Route path="/users">
            <Home />
          </Route>
          <Route path="/pref">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}