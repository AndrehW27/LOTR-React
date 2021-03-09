import './styles/app.css';
import LotrAPI from './components/LotrAPI'
import Mellon from './components/Mellon';
import BookList from './components/BookList';

import { useEffect, useState } from 'react';

export default function App() {

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const loadAllBooks = async () => {
      let list = await LotrAPI.getAllBooks();
      let books = []
      for (let i = 0; i < list.docs.length; i++) {
        books.push(list.docs[i].name);
      }
      setBookList(books);

      // let bookName = JSON.stringify(list.docs[0].name);
      // let bookNameStr = bookName.replace(/['"]+/g, '')
      // setBookName(bookNameStr);
    }
    setTimeout(() => {
      loadAllBooks();
    }, 0);
  }, []);

  return (
    <div className="containerApp">

      <Mellon />

      <BookList />
    {bookList.length <= 0 &&
        <div className="lotrGif">
          <img src="https://media.giphy.com/media/MpzeCDjDDovVAXF0cI/source.gif" alt="lotr gif" />
        </div>
      }
    </div>
  );
}


