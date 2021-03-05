import './styles/App.css';
import LotrAPI from './LotrAPI'
import { useEffect, useState } from 'react';

export default function App() {

  const [bookList, setBookList] = useState([]);

  useEffect(() => {    
    const loadAllBooks = async () => {
      let list = await LotrAPI.getAllBooks();
      let listatexto = JSON.stringify(list);
      console.log(list.docs[1]);          
      setBookList(listatexto);
      // setTimeout(setBookList(listatexto), 5000);
    }    

    setTimeout(() => {
      loadAllBooks();
    }, 2000);
    
    // setTimeout(loadAllBooks(), 5000);

  }, []);

  return (
    <div>
      <p>Hello LOTR</p>
      <p>{bookList}</p>

      {bookList.length <= 0 &&
        <div className="lotrGif">
          <img src="https://media.giphy.com/media/MpzeCDjDDovVAXF0cI/source.gif" alt="lotr gif" />
        </div>
      }


    </div>
  );
}


