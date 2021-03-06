import styles from '../styles/mellon.css';
import { useEffect, useState } from 'react';

export default function Mellon() {

    const [isMellonPicked, setIsMellonPicked] = useState(false);
    // const [isWrongAnswerClicked, setIsWrongAnswerClicked] = useState(false);


    // function wrongAnswer(){
    //     const wrongButton = document.getElementById('wrongAnswer1');
    //     wrongButton.classList.toggle('wrongAnswerClass');
    // }

    return (

        <div>
            {isMellonPicked === false &&
                <div className="container">
                    <div className="gandalfOuter">

                        <div className="gandalfQuestion">
                            <h1>Qual palavra em Élfico, Gandalf proferiu para adentrar os portões de Moria?
                        </h1>
                            <div className="buttonOuter">
                                <button onClick={
                                    () => {
                                        setTimeout(() => {
                                            setIsMellonPicked(true);
                                        }, 0);
                                    }
                                }>Mellon
                        </button>
                                <button>Ehtyar</button>

                                <button>Ealinornë</button>
                            </div>
                        </div>
                        <div className="gandalfPhoto"></div>
                    </div>
                </div>
            }
        </div>
    );
}