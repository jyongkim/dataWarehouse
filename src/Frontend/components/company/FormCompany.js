import React, { useState, useRef } from 'react'
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import Select from "react-validation/build/select"
import CheckButton from "react-validation/build/button"
import { isEmail } from "validator"
import { useHistory } from "react-router-dom";


function FormCompany({ onSubmit, company,
  setCompany, isModal,
  regions, countries, cities }) {

  const [message, setMessage] = useState("")
  const [successful, setSuccessful] = useState(false)
  const form = useRef()
  const checkBtn = useRef()
  const history = useHistory();



  const handleSubmit = (e) => {
    e.preventDefault()

    setMessage("")
    setSuccessful(false)
    console.log(company)
    form.current.validateAll()

    onSubmit();

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
          Por favor complete este campo!
        </div>
      )
    }
  }

  const vname = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          El nombre debe contener entre 3 y 20 caracteres.
        </div>
      )
    }
  }

  const vcountry = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          El país debe contener entre 3 y 20 caracteres.
        </div>
      )
    }
  }

  const vaddress = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          La dirección  debe contener entre 3 y 20 caracteres.
        </div>
      )
    }
  }


  const onChangeName = (e) => {
    setCompany({ ...company, Name: e.target.value })
  }

  const onChangeRegion = (e) => {
    console.log('idRegion:', e.target.value)
    setCompany({ ...company, IdRegion: e.target.value })
  }

  const onChangeCountry = (e) => {
    console.log('idCountry:', e.target.value)
    setCompany({ ...company, IdCountry: e.target.value })
  }

  const onChangeCity = (e) => {
    console.log('idCity:', e.target.value)
    setCompany({ ...company, IdCity: e.target.value })
  }

  const onChangeAddress = (e) => {
    setCompany({ ...company, Address: e.target.value })
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
              name="name"
              value={company.Name}
              onChange={onChangeName}
              validations={[required, vname]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="regions" className="form-label">Región</label>
            <Select className="form-control" name="regions" onChange={onChangeRegion}>
              <option>Ingrese Región</option>
              {regions.map((e) => {
                return (
                  <option value={e.ID}>{e.Region}</option>
                )
              }
              )
              }
            </Select>
          </div>
          <div className="form-group">
            <label htmlFor="countries" className="form-label">País</label>
            <Select className="form-control" name="countries" onChange={onChangeCountry}>
              <option>Ingrese País</option>
              {countries.map((e) => {
                return (
                  <option value={e.ID}>{e.Country}</option>
                )
              }
              )
              }
            </Select>
          </div>
          <div className="form-group">
            <label htmlFor="cities" className="form-label">Ciudad</label>
            <Select className="form-control" name="cities" onChange={onChangeCity}>
              <option>Ingrese Ciudad</option>
              {cities.map((e) => {
                return (
                  <option value={e.ID}>{e.City}</option>
                )
              }
              )
              }
            </Select>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="address" className="form-label">Dirección</label>
            <Input
              type="text"
              className="form-control"
              name="address"
              value={company.Address}
              onChange={onChangeAddress}
              validations={[required, vaddress]}
            />
          </div>


          <div className="mb-3 form-group">
            <button className="btn btn-primary btn-block" onClick={(e) => handleSubmit(e)}>Grabar</button>
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

export default FormCompany;