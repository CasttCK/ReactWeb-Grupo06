import React from "react";
import CardHomeHeader from "../../components/CardHomeHeader";
import CardHomeCarrinho from "../../components/CardHomeCarrinho";

import "./style.css";

function Home(){
    return (
        <div className = "page-home">
            <CardHomeHeader/>
            <CardHomeCarrinho/>
        </div>
    )
}

export default Home;
