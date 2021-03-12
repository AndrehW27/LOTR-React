
import LotrAPI from './LotrAPI'
import '../styles/movieList.css'
import { useEffect, useState } from 'react';

export default function MovieList() {

  const [MovieList, setMovieList] = useState([]);


  useEffect(() => {
    const loadAllData = async () => {
      let list = await LotrAPI.getAllData();
      let movies = []
      for (let i = 0; i < list[3].items.docs.length; i++) {
        movies.push(list[3].items.docs[i].name);
      }
      setMovieList(movies);

    }
    setTimeout(() => {
      loadAllData();
    }, 0);
  }, []);


  return (

    <div className="movieOuter">

    <h2>Lista dos filmes:</h2>

      <p>Filme 1:</p>
      <p>{MovieList[0]}</p>

      <p>Filme 2:</p>
      <p>{MovieList[1]}</p>

      <p>Filme 3:</p>
      <p>{MovieList[2]}</p>

      <p>Filme 4:</p>
      <p>{MovieList[3]}</p>

      <p>Filme 5:</p>
      <p>{MovieList[4]}</p>

      <p>Filme 6:</p>
      <p>{MovieList[5]}</p>

      <p>Filme 7:</p>
      <p>{MovieList[6]}</p>

      <p>Filme 8:</p>
      <p>{MovieList[7]}</p>      

    </div>
  );
}


