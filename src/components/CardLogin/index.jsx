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
        alert("\nUsuário não encontrado!! \n\nTente novamente");
    };  

    return( 
        <>
        <StyleCardLogin>
            <label>
                Login
                <input
                class = "input-login"
                type="text"
                value={nomeUsuario}
                onChange={(e) => setNomeUsuario(e.target.value)}
                />
                Senha:
                <input
                class = "input-login"
                type="text"
                value={senhaUsuario}
                onChange={(e) => setSenhaUsuario(e.target.value)}
                />
                <button onClick={handleSubmit}>Login</button>
            </label>
        </StyleCardLogin>
        </>
    );
    }

export default CardLogin;