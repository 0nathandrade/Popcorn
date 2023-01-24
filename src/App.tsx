import { useEffect, useState } from "react";
import Tmdb from "./Tmdb";

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
    }

    loadAll();
  },[]);

  return (
    <>
      Olá mundo
    </>
  )
}

export default App;
