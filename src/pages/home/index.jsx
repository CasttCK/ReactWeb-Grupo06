import React from "react";
import CardHomeHeader from "../../components/CardHomeHeader";
import CardHomeCarrinho from "../../components/CardHomeCarrinho";
import CardHomeBody from "../../components/CardHomeBody";

import "./style.css";

function Home(){
    return (
        <div className = "page-home">
            <CardHomeHeader/>
            <CardHomeCarrinho/>
            <CardHomeBody/>
        </div>
    )
}

export default Home;
