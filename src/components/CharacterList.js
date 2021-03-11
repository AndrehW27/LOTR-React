
import LotrAPI from './LotrAPI'
import '../styles/characterList.css'
import { useEffect, useState } from 'react';

export default function CharacterList() {

    const [characterList, setCharacterList] = useState([]);
    
      useEffect(() => {
    const loadAllData = async () => {
      let list = await LotrAPI.getAllData();
  
      // let characters = []
      // for (let i = 0; i < list[1].items.docs.length; i++) {
      //   characters.push(list[0].items.docs[i]);
      // }
      let characters2 = JSON.stringify(list[1].items);
      setCharacterList(characters2);

      // let bookName = JSON.stringify(list.docs[0].name);
      // let bookNameStr = bookName.replace(/['"]+/g, '')
      // setBookName(bookNameStr);
    }
    setTimeout(() => {
      loadAllData();
    }, 0);
  }, []);   

    return (
        <div className="characterOuter">
            <p>Personagens:</p>
            <p>{characterList}</p>            
        </div>
    );
}


