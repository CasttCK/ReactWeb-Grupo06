import React from "react";
import {Link} from "react-router-dom"

import { StyleCardHomeFooter } from "./style";

function CardHomeFooter(){
    return(
        <>
        <StyleCardHomeFooter>
            <footer>
                <div className= "div-info-footer">
                    <Link to=''>Home</Link>
                </div>
                <div className= "div-info-footer">
                    <Link to=''>Quem somos</Link>
                </div>
            </footer>
        </StyleCardHomeFooter>
        </>
    )
}

export default CardHomeFooter;