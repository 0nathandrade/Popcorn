import styled from 'styled-components';

interface MainProps {
    image: string;
}

export const Main = styled.main<MainProps>`
    height: 100vh;

    background-size: cover;
    background-position: 'center';
    background-image: 'url(https://image.tmdb.org/t/p/original${props => props.image})';
    //background: blue;
`