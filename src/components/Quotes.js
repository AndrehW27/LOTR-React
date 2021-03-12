import { useEffect, useState } from 'react';
import '../styles/quotes.css';
import LotrAPI from './LotrAPI';

export default function Quotes() {
    const [quotesList, setQuotesList] = useState([]);
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [listLength, setListLength] = useState(0);
    const [randomNumber, setRandomNumber] = useState(0);

    useEffect(() => {


        //  intercafe prosp=[
        //      livros:{
                 
        //      },
        //  ]
        const loadAllData = async () => {

 // GETTING QUOTES
 
            let listAllData = await LotrAPI.getAllData();   
            // console.log(listAllData[2].items.docs);
            setQuotesList(listAllData[2].items.docs);
            // console.log('teste'+quotesList);
            
            
            // console.log('list[2].items.docs.length: '+listAllData[2].items.docs.length);
            // console.log('list[2].items.docs.length: ->'+listAllData[2].items.docs.length+'<-');
            // setListLength(listAllData[2].items.docs.length)
            // console.log('listLength: '+listLength);

            // let quotesArray = []
            // for (let i = 0; i < listLength; i++) {
            //     quotesArray.push(listAllData[2].items[i].dialog);
            // }
        //     setQuotesList(quotesArray);
        // console.log("quotesArray: "+quotesArray);  
        // console.log("quotesList: "+quotesList);  
        


            setRandomNumber(Math.floor(Math.random() * listLength)); 
            // console.log('Random: '+randomNumber);
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
        // console.log("quoteIndex: "+quoteIndex);  
        // console.log("quotesList: "+quotesList);  

    }

    return (
        <div className="containerQuotes">
            <h2>Momento sabedoria LOTR</h2>
            { console.log('teste')}


        <div>
        {quotesList.length >= 0 ?

        <p>carregando</p>
        
        :           
                    <p>"{quotesList[quoteIndex].dialog}"</p>
        }
        </div>
            



            
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