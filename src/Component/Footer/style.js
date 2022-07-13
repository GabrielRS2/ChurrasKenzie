import styled from "styled-components";

export const Container = styled.div`
    max-width: 100vw;
    height: 70px;
    background-color: var(--grey-3);
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    color: var(--white);
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    
    button{
        width: 35px;
        height: 35px;
        font-size: 11px;
    }

    button:hover{
        color: var(--red-1);
    }

    @media (max-width: 375px){
        display: flex;
        
        .active{
            display: none;
        }
    }
`
