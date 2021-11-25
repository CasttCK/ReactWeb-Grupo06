import { React, useState } from "react";

import { StyleCardLogin } from "./style";

function initialState(){
  return {user: '', password: ''};
}

function CardLogin() {
  
  const [values, setValues] = useState(initialState);

  function  onChange(event){
    const {value, name} = event.target;
    setValues({
      ...values,
      [name]: value,
    })
  }
  return (
    <>
    <StyleCardLogin>
    <div classname="user-login">
      <h1 classname="user-login-title">Acessar o sistema</h1>
      <form>
        <div classname="user-login-form-control">
          <label 
            htmlFor="user"
            >
              Usuário
          </label>
          <input 
            type="text" 
            id="user" 
            name="user" 
            onChange= {onChange}
            value= {values.user}
          />
        </div>
        <div className="userlogin-form-control">
          <label 
            htmlFor="password"
            >
              Senha
          </label>
          <input 
            type="password" 
            id="password" 
            name="password"
            onChange= {onChange}
            value= {values.password}
          />
        </div>
        <button 
          type= "submit" 
          theme= "contained-green" 
          className= "user-login-submit-button"
          rounded
          >
            Entrar
        </button>
      </form>
    </div>
    </StyleCardLogin>
    </>
  );
}

export default CardLogin;

{
  /* <>
      <StyleCardLogin>
        <label>
          Login
          <input
            class="input-login"
            type="text"
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
          />
          Senha:
          <input
            class="input-login"
            type="text"
            value={senhaUsuario}
            onChange={(e) => setSenhaUsuario(e.target.value)}
          />
          <button onClick={handleSubmit}>Login</button>
        </label>
      </StyleCardLogin>
    </> */
}
