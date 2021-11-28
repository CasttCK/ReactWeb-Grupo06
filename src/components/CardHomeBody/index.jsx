import React, { useState } from "react";
import CardHome from "./CardHome/index"
import Produtos from "../../Api/DB/Produtos.json"

import { StyleCardHomeBody } from "./style"

function CardHomeBody(){
    const [produtosData, setProdutosData] = useState(Produtos)
    return(
        <>
        <StyleCardHomeBody>
            <CardHome produto={produtosData[0]}/>
            <CardHome produto={produtosData[1]}/>
            <CardHome produto={produtosData[2]}/>
        </StyleCardHomeBody>
        </>

    )
}

export default CardHomeBody;