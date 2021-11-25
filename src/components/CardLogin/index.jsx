import {React, useState } from "react";
import { Link } from "react-router-dom";

import {StyleCardLogin} from "./style";


function CardLogin(){

    const [nomeUsuario, setNomeUsuario] = useState("");
    const [senhaUsuario, setSenhaUsuario] = useState("");

    function handleSubmit() {
            if (nomeUsuario === "admin" && senhaUsuario === "1234") {
                <Link to={`/home`}/>
            }
            alert("Usuário não encontrado!! \n Tente novamente");
            
        };  

    return( 
        <>
        <StyleCardLogin>
            
            <label>
                Login
                <input 
                class = "input-login"
                type="text" 
                name="nome" 
                onChange= {(e) => (e)}
                />
                Senha:
                <input 
                class = "input-login"
                type="text" 
                name="senha" 
                onChange= {(e) => (e)}
                />
                <button onClick={handleSubmit}>Login</button>
            </label>
        </StyleCardLogin>
        </>
    );
    }

export default CardLogin;