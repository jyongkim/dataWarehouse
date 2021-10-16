import React, { useState, useRef } from "react"
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"
import { Container } from 'react-bootstrap'
import AuthService from "../services/auth.service"
import { useHistory } from "react-router-dom"
import { Redirect } from "react-router-dom"


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Complete este campo.
            </div>
        );
    }
};

const Login = (props) => {
    const { currentUser, refreshLogin } = props
    const form = useRef()
    const checkBtn = useRef()
    const history = useHistory()


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    const onChangeUsername = (e) => {
        const username = e.target.value
        setUsername(username)
    };

    const onChangePassword = (e) => {
        const password = e.target.value
        setPassword(password)
    };

    const handleLogin = (e) => {
        e.preventDefault()

        setMessage("")
        setLoading(true)

        form.current.validateAll()

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, password).then(
                (data) => {
                    console.log('data:', data)
                    if (data.accessToken) {
                        localStorage.setItem("user", JSON.stringify(data))
                        setLoading(false)
                        refreshLogin()
                        setLoggedIn(true)

                    } else {
                        setMessage(data.message)
                        setLoading(false)
                    }

                })
                .catch(
                    (error) => {
                        const resMessage =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString()

                        setLoading(false)
                        setMessage(resMessage)
                    }
                )
        } else {
            setLoading(false)
        }
    };

    return (
        <>
            {loggedIn ? <Redirect to="/dashboard" /> :

                <Container>
                    <div className="d-flex justify-content-center mt-5">
                        <div className="col-md-6">
                            <Form onSubmit={handleLogin} ref={form}>
                                <div className="mb-3 form-group">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={username}
                                        onChange={onChangeUsername}
                                        validations={[required]}
                                    />
                                </div>

                                <div className="mb-3 form-group">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={onChangePassword}
                                        validations={[required]}
                                    />
                                </div>

                                <div className="mb-3 form-group">
                                    <button className="btn btn-primary btn-block" disabled={loading}>
                                        {loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                                        <span>Login</span>
                                    </button>
                                </div>

                                {message && (
                                    <div className="form-group">
                                        <div className="alert alert-danger" role="alert">
                                            {message}
                                        </div>
                                    </div>
                                )}
                                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                            </Form>
                        </div>
                    </div>

                </Container>
            }
        </>
    );
};

export default Login