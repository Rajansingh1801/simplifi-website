import styled from 'styled-components'

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 380px;


    @media screen and (max-width: 1300px) {
        width: 300px;
    }

    @media screen and (max-width: 1100px) {
        width: 250px;
    }
    @media screen and (max-width: 980px) {
        width: 300px;
    }

    /* @media screen and (max-width: 768px) {
        width: 300px;
    } */

    @media screen and (max-width: 520px) {
        width: 100%;
    }
`




export const SearchBar = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    height: 48px;

    @media screen and (max-width:480px) {
        height: 44px;
    }
    @media screen and (max-width:320px) {
        height: 42px;
    }


`

export const SearchIcon = styled.button`
    border: none;
    outline: none;
    width: 30px;
    padding: 1rem 2rem;
    text-align: center;
    color: #000000;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 0px 30px 30px 0px;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;


    @media screen and (max-width:480px) {
        width: 25px;
    }
    @media screen and (max-width:320px) {
        width: 20px;
    }


`

export const SearchInput = styled.input`
    width: 92%;
    border: none;
    padding: 0.5rem 1.5rem;
    outline: none;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 30px 0px 0px 30px;
    opacity: 1;
    border-right: 2px solid #64DE6D;
    color: #000000d6;

    &::placeholder {
        font-family: "Visby Round CF";
        font-size: light;
        font-size: 0.95rem;
        color: #D1D1D1;
    }
`
