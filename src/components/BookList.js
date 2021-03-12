
import LotrAPI from './LotrAPI'
import '../styles/bookList.css'
import { useEffect, useState } from 'react';

export default function BookList() {

  const [bookList, setBookList] = useState([]);
  const [counterBook1, setCounterBook1] = useState(0);
  const [counterBook2, setCounterBook2] = useState(0);
  const [counterBook3, setCounterBook3] = useState(0);


  useEffect(() => {
    const loadAllData = async () => {
      let list = await LotrAPI.getAllData();
      let books = []
      for (let i = 0; i < list[0].items.docs.length; i++) {
        books.push(list[0].items.docs[i].name);
      }
      setBookList(books);

    }
    setTimeout(() => {
      loadAllData();
    }, 0);
  }, []);

  const buttonLike = document.getElementById('buttonLike');
  const heart = document.getElementById('heart');

  if (heart) {
    buttonLike.addEventListener('click', () => {
      heart.classList.remove('like')
      heart.classList.add('heartFilled')
    })
  }

  return (

    <div className="bookOuter">

    <h2>Ranking dos livros:</h2>

      <p>Livro 1:</p>
      <p>{bookList[0]}</p>
      <div className="buttonCounteLikeOuter">
        <button id="buttonLike" onClick={() =>
          setCounterBook1(counterBook1 + 1)
        }>Like</button>
        <p className="counter">
          {counterBook1}
        </p>
        <div id="heart" className="like"></div>
      </div>

      <p>Livro 2:</p>
      <p>{bookList[1]}</p>
      <div className="buttonCounteLikeOuter">
        <button id="buttonLike" onClick={() =>
          setCounterBook2(counterBook2 + 1)
        }>Like</button>
        <p className="counter">
          {counterBook2}
        </p>
        <div id="heart" className="like"></div>
      </div>

      <p>Livro 3:</p>
      <p>{bookList[2]}</p>
      <div className="buttonCounteLikeOuter">
        <button id="buttonLike" onClick={() =>
          setCounterBook3(counterBook3 + 1)
        }>Like</button>
        <p className="counter">
          {counterBook3}
        </p>
        <div id="heart" className="like"></div>
      </div>

    </div>
  );
}


