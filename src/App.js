import './styles/App.css';
import LotrAPI from './components/LotrAPI'
import Mellon from './components/mellon';
import { useEffect, useState } from 'react';

export default function App() {

  const [bookList, setBookList] = useState([]);
  const [bookName, setBookName] = useState('');
  // const [charactorsList, setCharactorsList] = useState([]);


  useEffect(() => {
    const loadAllBooks = async () => {
      let list = await LotrAPI.getAllBooks();
      let bookName = JSON.stringify(list.docs[0].name);
      let bookNameStr = bookName.replace(/['"]+/g, '')
      setBookName(bookNameStr);

      setBookList(JSON.stringify(list.docs));

    }
    setTimeout(() => {
      loadAllBooks();
    }, 0);
  }, []);

  // useEffect(() => {    
  //   const loadAllCharactors = async () => {
  //     let list = await LotrAPI.getAllCharactors();
  //     let charactors = JSON.stringify(list);

  //     console.log(charactors); 
  //     setCharactorsList(charactors);
  //   }    
  //   setTimeout(() => {
  //     loadAllCharactors();
  //   }, 1000); 
  // }, []);



  return (
    <div className="containerApp">
      <Mellon />

      <p>Livros:</p>
      <p>{bookList}</p>

      <p>Livro 1:</p>
      <p>{bookName}</p>

      {/* <p>Personagens:</p>     
      
      <p>{charactorsList}</p>       */}

      {bookName.length <= 0 &&
        <div className="lotrGif">
          <img src="https://media.giphy.com/media/MpzeCDjDDovVAXF0cI/source.gif" alt="lotr gif" />
        </div>
      }

    </div>
  );
}


