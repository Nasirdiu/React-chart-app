import React from 'react';

const Login = () => {
    return (
        <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="Password" />
        
          <button>SingUp</button>
        </form>
        <p>You do have an account ? Register</p>
      </div>
    </div>
    );
};

export default Login;