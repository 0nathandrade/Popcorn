import { useEffect, useState } from "react";

import Tmdb from "./Tmdb";
import Category from "./components/Category";
import Header from "./components/Header";

import { GlobalStyle } from "./style/global";


interface ListType {
  slug: string;
  title: string;
  items: any;
}

function App() {

  const [movieList, setMovieList] = useState<ListType[]>([]);
  const [dataHeader, setDataHeader] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando Lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
      // Pegando os dados do cabeçalho
      let originals = list.filter(item => item.slug === 'originals');
      let ramdomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[ramdomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setDataHeader(chosenInfo);

      console.log(chosenInfo);
     }

    loadAll();
  }, []);

  return (
    <>
      {dataHeader && 
        <Header item={dataHeader}/>
      }

      {movieList.map((item, key) => (
        <Category key={key} title={item.title} items={item.items}/>
      ))}

      <GlobalStyle />
    </>
  )
}

export default App;
