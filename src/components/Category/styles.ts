import styled from "styled-components";

export const Main = styled.main`
    margin-bottom: 30px;

    h1 {
        margin: 0px 0px 0px 30px;
    }
`;

export const Container = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

export const Row = styled.div`
    width: 9999999999px;
`;

export const Movie = styled.div`
    display: inline-block;
    width: 150px;

    cursor: pointer;

    img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
        
        &:hover {
            transform: scale(1);
        }
    }

`;