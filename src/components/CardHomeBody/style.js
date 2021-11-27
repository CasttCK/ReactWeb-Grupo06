import styled from "styled-components";

export const StyleCardHomeBody = styled.div`

    .div-cards{
        
    }

    .card{
        position: absolute;
        top: 12rem;
        width: 100%;
        height: 80%;    
    }

    .card-body{    
        width: 30%;
        overflow: hidden;
        box-shadow: 0 2px 20px;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        transition: transform 200ms ease-in;
    }

    .img-card{
        width: 100%;
        height: 18rem;
    }

`