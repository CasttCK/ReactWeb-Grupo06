import styled from "styled-components";

export const StyleCardHomeBody = styled.div`
    
    
    margin-top: 16rem;
    margin-left: 10%;
    display: flex;
    width: 80%;
    gap: 3rem;

    .card-body{   
        padding-top: 5px;
        padding-right: 5px;
        padding-bottom: 15px;
        padding-left: 5px;
        background-color: white;
        width: 30%;
        border: none;
        border-radius: 20px;
        box-shadow: 0 2px 10px;
        align-items: center;
        display: flex;
        flex-direction: column;
       
        cursor: pointer;
        transition: transform 200ms ease-in;
    }

    .img-card{
        
        width: 100%;
        height: 18rem;
        border-radius: 10px;
    }

    .card-button{
    
        width: 70%;
        height: 2rem;
        border: none;
        border-radius: 9px;
        background: rgb(43, 155, 219);

        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-style: normal;
        font-weight: bolder;
        font-size: 20px;
    }
    
    .linkTo{
        color: white;
        text-decoration-line: none;
    }

`