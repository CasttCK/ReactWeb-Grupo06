import React from "react";
import Celular from "../../Assets/IMG/Celular.jpg";
import Colcha from "../../Assets/IMG/Colcha.jpg";
import Tenis from "../../Assets/IMG/Tenis.jpg";
import {Link} from "react-router-dom"

import { StyleCardHomeBody } from "./style"

function Card(){
    return(
        <>
        <div className= "card">
            <div className= "card-body">
                <img className= "img-card" src={Celular} alt="Celular" />
                <h2 className= "card-title">Smartphone Samsung</h2>
                <p className= "card-description">R$ 1.500,00</p>
            </div>
            <button className= "card-button">Comprar</button>
        </div>
        {/* <div className= "card">
            <div className= "card-body">
                <img className= "img-card" src={Colcha} alt="Colcha" />
                <h2 className= "card-title">Colcha de casal</h2>
                <p className= "card-description">R$ 120,00</p>
            </div>
            <button className= "card-button">Comprar</button>
        </div>
        <div className= "card">
            <div className= "card-body">
                <img className= "img-card" src={Tenis} alt="Tenis" />
                <h2 className= "card-title">Tênis Nike</h2>
                <p className= "card-description">R$ 200,00</p>
            </div>
            <button className= "card-button">Comprar</button>
        </div> */}
        </>       
    )
}

function CardHomeCarrinho(){
    return(
        <>
        <StyleCardHomeBody>
            <div className= "div-cards">
                <Card />
                <Card />
                <Card />
            </div>
        </StyleCardHomeBody>
        </>

    )
}

export default CardHomeCarrinho;