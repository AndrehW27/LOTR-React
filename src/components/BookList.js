
import LotrAPI from './LotrAPI'
import '../styles/bookList.css'
import { useEffect, useState } from 'react';

export default function BookList() {

    const [bookList, setBookList] = useState([]);
    const [counterBook1, setCounterBook1] = useState(0);
    const [counterBook2, setCounterBook2] = useState(0);
    const [counterBook3, setCounterBook3] = useState(0);

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
        

            <div className="bookOuter">
                <p>Livro 1:</p>
                <p>{bookList[0]}</p>
                <button onClick={() =>
                    setCounterBook1(counterBook1 + 1)
                }>Like</button>
                <p>{counterBook1}</p>

                <p>Livro 2:</p>
                <p>{bookList[1]}</p>
                <button onClick={() =>
                    setCounterBook2(counterBook2 + 1)
                }>Like</button>
                <p>{counterBook2}</p>

                <p>Livro 3:</p>
                <p>{bookList[2]}</p>
                <button onClick={() =>
                    setCounterBook3(counterBook3 + 1)
                }>Like</button>
                <p>{counterBook3}</p>       

            </div>        
    );
}


