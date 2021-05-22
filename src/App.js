import './App.css';
import {useEffect,useState} from 'react';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthService from './services/auth.service';
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


  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    // const user = AuthService.getCurrentUser();

    // if (user) {
    //   setCurrentUser(user);
    //   setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
    //   setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    // }
    setCurrentUser({})
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
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
            {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
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