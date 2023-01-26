import { Container, Main, Movie, Row } from "./styles";

interface CategoryType {
    title: string;
    items: any;
}

export default ({title, items}:CategoryType) => {
    return (
        <Main>
            <h1>{title}</h1>
            <Container> 
                <Row>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <Movie key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />  
                        </Movie>
                    ))}
                </Row>
            </Container>
        </Main>
    );
}