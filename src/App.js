import './styles/App.css';
import LotrAPI from './LotrAPI'
import { useEffect, useState } from 'react';

export default function App() {

  const [bookList, setBookList] = useState([]);
  // const [charactorsList, setCharactorsList] = useState([]);


  useEffect(() => {    
    const loadAllBooks = async () => {
      let list = await LotrAPI.getAllBooks();
      let bookName = JSON.stringify(list.docs[1].name);
      let bookNameStr = bookName.replace(/['"]+/g, '')
      console.log(list); 
      setBookList(bookNameStr);
    }    
    setTimeout(() => {
      loadAllBooks();
    }, 1000); 
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
    
      <p>Livros:</p>     
      
      <p>{bookList}</p>       

      {/* <p>Personagens:</p>     
      
      <p>{charactorsList}</p>       */}

      {bookList.length <= 0 &&
        <div className="lotrGif">
          <img src="https://media.giphy.com/media/MpzeCDjDDovVAXF0cI/source.gif" alt="lotr gif" />
        </div>
      }

    </div>
  );
}


