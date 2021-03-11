import './styles/app.css';
import LotrAPI from './components/LotrAPI'
import Mellon from './components/Mellon';
import BookList from './components/BookList';
import CharacterList from './components/CharacterList';



import { useEffect, useState } from 'react';

export default function App() {

  const [bookList, setBookList] = useState([]);


  useEffect(() => {
    const loadAllData = async () => {
      let list = await LotrAPI.getAllData();
      // console.log(list);
      console.log(list[1].items);
      let books = []
      for (let i = 0; i < list[0].items.docs.length; i++) {
        books.push(list[0].items.docs[i].name);
      }
      // console.log('livros:'+books);      
      setBookList(books);

      // let bookName = JSON.stringify(list.docs[0].name);
      // let bookNameStr = bookName.replace(/['"]+/g, '')
      // setBookName(bookNameStr);
    }
    setTimeout(() => {
      loadAllData();
    }, 0);
  }, []);

  return (
    <div className="containerApp">

      {/* <Mellon /> */}
      
      <BookList />
      <CharacterList />
    {bookList.length <= 0 &&
        <div className="lotrGif">
          <img src="https://media.giphy.com/media/MpzeCDjDDovVAXF0cI/source.gif" alt="lotr gif" />
        </div>
      }
    </div>
  );
}


