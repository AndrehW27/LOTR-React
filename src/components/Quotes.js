import { useEffect, useState } from 'react';
import '../styles/quotes.css';
import LotrAPI from './LotrAPI';

export default function Quotes() {
    const [quotesList, setQuotesList] = useState([]);
    const [quoteIndex, setQuoteIndex] = useState([]);
    const [listLength, setListLength] = useState([]);
    const [randomNumber, setRandomNumber] = useState([]);

    useEffect(() => {
        const loadAllData = async () => {

 // GETTING QUOTES
 
            let listAllData = await LotrAPI.getAllData();   
            console.log('list[2].items.docs.length: '+listAllData[2].items.docs.length);
            setListLength(listAllData[2].items.docs.length)
            console.log('listLength: '+listLength);

            let quotesArray = []
            for (let i = 0; i < listLength; i++) {
                quotesArray.push(listAllData[2].items.docs[i].dialog);
            }
            setQuotesList(quotesArray);
        console.log(quotesArray);  
        console.log(quotesList);  


            setRandomNumber(Math.floor(Math.random() * listLength)); 
            console.log('Random: '+randomNumber);
            setQuoteIndex(randomNumber);

 // GETTING QUOTES

 // GETTING AUTOR


 // GETTING AUTOR
 
        }
        setTimeout(() => {
            loadAllData();
        }, 0);
    }, []);    

    function newQuote(){
        setQuoteIndex(Math.floor(Math.random() * listLength));      
        console.log(quoteIndex);  
        console.log(quotesList);  

    }

    return (
        <div className="containerQuotes">
            <h2>Momento sabedoria LOTR</h2>
            <p>"{quotesList[quoteIndex]}"</p>
            <p>
                By:
                Movie:
                
                </p>           
            <button onClick={newQuote}
            >Gerar nova citação
            </button>
        </div>
    )
}