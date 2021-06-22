import React, { useState, useRef } from "react";
import FormUser from "../components/user/FormUser"
import AuthService from "../services/auth.service";


const Register = (props) => {
  
 

  const initialStateUser = {
    Id:-1,
    FirstName:'',
    LastName:'',
    Email:'',
    Password:'',
    ConfirmPassword:'',
    Profile:''
  }

  const [user, setUser] = useState(initialStateUser)
  

  const handleRegister = () => {
      return AuthService.register(user.FirstName,user.LastName,user.Username, user.Email, user.Password)
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <FormUser onSubmit={handleRegister} user={user} setUser={setUser} redirectOnSuccessful="/login"></FormUser>
      </div>
    </div>
  );
};

export default Register;