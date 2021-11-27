import React from "react";
import Celular from "../../Assets/IMG/Celular.jpg";
import Colcha from "../../Assets/IMG/Colcha.jpg";
import Tenis from "../../Assets/IMG/Tenis.jpg";
import {Link} from "react-router-dom"

import { StyleCardHomeBody } from "./style"

function Card(){
    return(
        <>
        <div className= "card-body">
            <img className= "img-card" src={Celular} alt="Celular" />
            <h2 className= "card-title">Smartphone Samsung</h2>
            <p className= "card-description">R$ 1.500,00</p>
            <button className= "card-button">Comprar</button>
            <button className= "card-button">Adicionar ao carrinho</button>
        </div>
        </>       
    )
}

function CardHomeCarrinho(){
    return(
        <>
        <StyleCardHomeBody>
            <Card />
            <Card />
            <Card />
        </StyleCardHomeBody>
        </>

    )
}

export default CardHomeCarrinho;