import React from "react";

import { StyleCardHome } from "./style"

function CardHome(){
    return(
        <>
        <StyleCardHome>
        <header className= "home-header">
            <nav className= "nav-home-header">
               <h2>E-Commerce Serratec</h2>
               <div className= "div-input">
                   <input 
                        type= "search" 
                        className= "nav-home-input"
                        placeholder="Pesquisar"
                    />
               </div>
               <div className= "div-button">
                    <button
                        type= "submit"
                        className= "nav-home-button"
                    >
                        Sair
                    </button>
               </div>
            </nav>
        </header>
        </StyleCardHome>
        </>
    )
}

export default CardHome;