import LotrAPI from './LotrAPI'
import '../styles/characterList.css'
import { useEffect, useState } from 'react';

export default function CharacterList() {

  const [characterNameList, setCharacterNameList] = useState([]);
  const [characterRaceList, setCharacterRaceList] = useState([]);
  const [characterAgeList, setCharacterAgeList] = useState([]);
  const [characterWikiList, setCharacterWikiList] = useState([]);

  useEffect(() => {
    const loadAllData = async () => {
      let list = await LotrAPI.getAllData();
     
      let charactersNames = []
      for (let i = 0; i < list[1].items.docs.length; i++) {        
        charactersNames.push(list[1].items.docs[i].name);
      }     
      setCharacterNameList(charactersNames);

      let charactersRaces = []
      for (let i = 0; i < list[1].items.docs.length; i++) {     
        charactersRaces.push(list[1].items.docs[i].race);
      }
      setCharacterRaceList(charactersRaces);   
      
      let charactersAges = []
      for (let i = 0; i < list[1].items.docs.length; i++) {     
        charactersAges.push(list[1].items.docs[i].birth);
      }
      setCharacterAgeList(charactersAges); 

      let charactersWiki = []
      for (let i = 0; i < list[1].items.docs.length; i++) {     
        charactersWiki.push(list[1].items.docs[i].wikiUrl);
      }
      setCharacterWikiList(charactersWiki); 

      // let bookName = JSON.stringify(list.docs[0].name);
      // let bookNameStr = bookName.replace(/['"]+/g, '')  
    }
    setTimeout(() => {
      loadAllData();
    }, 0);
  }, []);

  return (
    <div className="ContainerChar">
      <div className="name">
        Nome:
          <p>{characterNameList[0]}</p>
      </div>
      <div className="race">
        Raça:
        <p>{characterRaceList[0]}</p>         
      </div>
      <div className="age">
        Nascimento:
        {characterAgeList[0] === '' &&
          <p>Desconhecido</p>
        }
        <p>{characterAgeList[0]}</p>
        
      </div>
      <div className="more">
        <a href={characterWikiList[0]} target="_blank" rel="noopener noreferrer">
          Saiba mais
          </a>
      </div>
    </div>
  );
}


