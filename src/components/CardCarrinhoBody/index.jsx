import React, {useState} from "react";
import CardApresentacaoCarrinho from "./CardCarrinho/Card";
import { StyleCardCarrinhoBody } from "./style";
import Produtos from "../../Api/DB/Produtos.json"

function CardCarrinho(){
    const [produtosData, setProdutosData] = useState(Produtos)
    return(
        <StyleCardCarrinhoBody>
            <CardApresentacaoCarrinho produto= {produtosData[0]}/>
        </StyleCardCarrinhoBody>
    )
}

export default CardCarrinho;


