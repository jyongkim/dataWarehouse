import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './Login.css';

export default function Login() {
    return (
        <Container>
            <div className="d-flex justify-content-center mt-5">

                <Form action="/contact" className="col-4 ">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Usuario" />
                        <Form.Text className="text-muted">
                            Ingrese su e-mail o nombre de usuario.
                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Recuérdame" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Iniciar Sesión
             </Button>
                </Form>
            </div>


        </Container>
    );

}



