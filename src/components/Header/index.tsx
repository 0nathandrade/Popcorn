import { Main } from "./styles";


export default ({item}: any) => {
    return (
        <Main image={item.backdrop_path}>
            {item.backdrop_path}
        </Main>    
    );
}