import { useEffect, useState } from "react";

import Tmdb from "./Tmdb";
import Category from "./components/Category";

import { GlobalStyle } from "./style/global";


interface ListType {
  slug: string;
  title: string;
  items: any;
}

function App() {

  const [movieList, setMovieList] = useState<ListType[]>([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando Lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      console.log(list);
    }

    loadAll();
  },[]);

  return (
    <>
      {movieList.map((item, key) => (
        <Category key={key} title={item.title} items={item.items}/>
      ))}

      <GlobalStyle />
    </>
  )
}

export default App;
