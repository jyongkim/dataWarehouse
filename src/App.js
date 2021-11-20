import './App.css'
import { useEffect, useState } from 'react'
import Contact from './Frontend/pages/Contact'
import Login from './Frontend/pages/Login'
import Register from './Frontend/pages/Register'
import AuthService from './Frontend/services/auth.service'
import React from "react"
import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Companies from './Frontend/pages/Companies'
import Regions from './Frontend/pages/Regions'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Users from './Frontend/pages/Users'

export default function App() {

  const [contacts, setContacts] = useState([])
  const history = useHistory()

  useEffect(() => {
    let server = `http://localhost:3200/`
    fetch(server + 'contact/1')
      .then(response => response.json())
      .then(data => {
        setContacts(data)
      })
  }, [])


  const [showModeratorBoard, setShowModeratorBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [checkLogin, setCheckLogin] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {

    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
      //setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      //setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      //setCheckLogin(!checkLogin)

    }
    return () => {

    }
  }, [])

  const refreshLogin = () => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
      //setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      //setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      //setCheckLogin(!checkLogin)

    }
  }

  const logOut = () => {
    AuthService.logout()
  }

  return (
    <Router>

      <nav className="navbar navbar-expand-lg menu">
        <div className="container-fluid">
          <div className="navbar-brand">Data Warehouse</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {currentUser ? (
                <>
                  <li>
                    <Link to="/contact">Contactos</Link>
                  </li>
                  <li>
                    <Link to="/company">Compañías</Link>
                  </li>
                  {currentUser.rol === 1 ? (
                    <li>
                      <Link to="/users">Usuarios</Link>
                    </li>
                  ) : (<></>)
                  }
                  <li>
                    <Link to="/regions">Región/Ciudad</Link>
                  </li>
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to="/profile" className="nav-link">
                        {currentUser.username}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="/login" className="nav-link" onClick={logOut}>
                        LogOut
                      </a>
                    </li>
                  </div>
                </>
              ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Iniciar Sesión
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Registrarse
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/company">
          <Companies />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/login">
          <Login refreshLogin={refreshLogin} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/regions">
          <Regions />
        </Route>
      </Switch>
    </Router>
  )
}

