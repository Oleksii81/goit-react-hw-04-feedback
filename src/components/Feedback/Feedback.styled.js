import { styled } from "styled-components";

export const ButtonContainerStyle = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    .button{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        width: 100px;
        height: 50px;
        border: none;
        background-color: #81878b;
        border-radius: 5px;
        outline: none;
        font-size: 20px;
        color: #010101;
    }
    .button:hover,
    .button:focus,
    .button:active{
        font-size: 25px;
        filter: blur(0.5px);        
    }
`