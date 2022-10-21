import styled from "styled-components";

export const Container = styled.div`
    max-width: 78.25rem;
    width: 100%;
    margin: 1.5rem auto;

    position: relative;

    h1 {
        padding: 0.75rem 0;
        font-size: 2rem;
        font-weight: bold;
    }

    @media (max-width: 913px) {
        padding: 0 20px;
    }
`

export const ContainerCarrousel = styled.div`
    display: flex;
    align-items: center;
    gap: 0 17px;
    justify-content: space-between;

    z-index: 3;

    overflow-x: hidden;
    scroll-behavior: smooth;
`

export const ContainerButtons = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    position: absolute;
    top: 77px;
    bottom: 182px;

`

export const Button = styled.button`

    background: transparent;

    border-radius: 5px;
    border: none;
    
    z-index: 2;
    
    transition: all 1s;

    padding: 0 6px;

    @media(max-width: 913px) {

        &:not(transform) {
            margin-right: 40px;
        }
    }

    
    .left {
        transform: rotate(180deg);
    }

    &:hover {
       background: rgb(0,0,0);
       background: linear-gradient(90deg, rgba(0,0,0,0.3925945378151261) 95%, rgba(0,212,255,1) 100%);
    }
`