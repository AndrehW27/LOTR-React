import '../styles/characterInfos.css';
import CharacterList from './CharacterList';

export default function CharacterInfos() {

    const list = <CharacterList/>;
    console.log('list:'+list);

    return (
        <div className="ContainerChar">
            <div className="name">
                Nome:
                <p>{list[1]}</p>
            </div>
            <div className="race">
                Raça:
                <p>{list.race}</p>
            </div>
            <div className="age">
                Idade:
                <p>{list.age}</p>
            </div>
            <div className="more">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    Saiba mais
                </a>
            </div>
        </div>
    )
}