import React, { useState, useRef } from 'react'
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import Select from "react-validation/build/select"
import CheckButton from "react-validation/build/button"
import { isEmail } from "validator"
import { useHistory } from "react-router-dom";


function FormUser(props) {

  const { onSubmit, user, setUser, isModal, roles } = props
  const [message, setMessage] = useState("")
  const [successful, setSuccessful] = useState(false)
  const form = useRef()
  const checkBtn = useRef()
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault()

    setMessage("")
    setSuccessful(false)

    form.current.validateAll()

    if (user.Password != user.ConfirmPassword) {
      setMessage("La contraseña y su confirmación no coincide.")
      setSuccessful(false)
      return
    }

    if (checkBtn.current.context._errors.length === 0) {
      onSubmit().then(data => {
        setMessage(data.message)
        setSuccessful(true)
      })

    }
  }


  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          Por favor, complete este campo.
        </div>
      )
    }
  }

  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          Usted ha ingresado un correo electrónico inválido.
        </div>
      )
    }
  }

  const vfirstname = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          El nombre debe contener entre 3 y 20 caracteres.
        </div>
      )
    }
  }

  const vlastname = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          El apellido debe contener entre 3 y 20 caracteres.
        </div>
      )
    }
  }

  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          El usuario debe contener entre 3 y 20 caracteres.
        </div>
      )
    }
  }

  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          La contraseña debe contener entre 6 y 40 caracteres.
        </div>
      )
    }
  }

  const vconfirmPassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          La contraseña debe contener entre 6 y 40 caracteres.
        </div>
      )
    }
  }

  const onChangeFirstName = (e) => {
    setUser({ ...user, first_name: e.target.value })
  }

  const onChangeUsername = (e) => {
    setUser({ ...user, username: e.target.value })
  }

  const onChangeLastName = (e) => {
    setUser({ ...user, last_name: e.target.value })
  }

  const onChangeEmail = (e) => {
    setUser({ ...user, email: e.target.value })
  }

  const onChangeRole = (e) => {
    setUser({ ...user, id_role: e.target.value })
  }

  const onChangePassword = (e) => {
    setUser({ ...user, password: e.target.value })
  }

  const onChangeConfirmPassword = (e) => {
    setUser({ ...user, confirmPassword: e.target.value })
  }

  return (
    <Form onSubmit={handleSubmit} ref={form}>
      {!successful && (
        <div className={isModal ? "" : "container col-6"}>
          <div className="mb-3 form-group">
            <label htmlFor="name" className="form-label">Nombre</label>
            <Input
              type="text"
              className="form-control"
              name="first_name"
              value={user.first_name}
              onChange={onChangeFirstName}
              validations={[required, vfirstname]}
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="last_name" className="form-label">Apellido</label>
            <Input
              type="text"
              className="form-control"
              name="last_name"
              value={user.last_name}
              onChange={onChangeLastName}
              validations={[required, vlastname]}
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="user_name" className="form-label">Usuario</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={user.user_name}
              onChange={onChangeUsername}
              validations={[required, vusername]}
            />
          </div>

          <div className="mb-3 form-group">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <Input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={onChangeEmail}
              validations={[required, validEmail]}
            />
          </div>

          <div className="mb-3 form-group">
            <label htmlFor="roles" className="form-label">Rol</label>
            <Select className="form-control" name="roles" onChange={onChangeRole} value={user.id_role}>
              <option>Ingrese el rol del Usuario</option>
              {roles.map((e) => {
                return (
                  <option value={e.id_role}>{e.role}</option>
                )
              }
              )
              }
            </Select>
          </div>

          <div className="mb-3 form-group">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={onChangePassword}
              validations={[required, vpassword]}
            />
          </div>

          <div className="mb-3 form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
            <Input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={onChangeConfirmPassword}
              validations={[required, vconfirmPassword]}
            />
          </div>

          <div className="mb-3 form-group">
            <button className="btn btn-primary btn-block">Registrar Usuario</button>
          </div>
        </div>
      )}

      {message && (
        <div className="form-group">
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
      <CheckButton style={{ display: "none" }} ref={checkBtn} />
    </Form>
  );
}

export default FormUser;