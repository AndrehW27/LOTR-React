import '../styles/mellon.css';
import { useState } from 'react';

export default function Mellon() {

    const [isMellonPicked, setIsMellonPicked] = useState(false);

    function showRight() {
        let right = document.getElementById('right');
        let green = document.getElementById('green');
        right.classList.toggle('show');
        green.classList.toggle('green');
    }

    function showWrong() {
        let wrong1 = document.getElementById('wrong1');
        let red1 = document.getElementById('red1');
        wrong1.classList.toggle('show');
        red1.classList.toggle('red');
    }

    function showWrong2() {
        let wrong2 = document.getElementById('wrong2');
        let red2 = document.getElementById('red2');
        wrong2.classList.toggle('show');
        red2.classList.toggle('red');
    }

    function x() {
        let wrong1 = document.getElementById('wrong1');
        let red1 = document.getElementById('red1');
        wrong1.classList.remove('show');
        red1.classList.toggle('red');
    }

    function x2() {
        let wrong2 = document.getElementById('wrong2');
        let red2 = document.getElementById('red2');
        wrong2.classList.remove('show');
        red2.classList.toggle('red');
    }

    function xRight() {
        let right = document.getElementById('right');
        let green = document.getElementById('green');
        right.classList.remove('show');
        green.classList.toggle('green');
    }
    return (

        <div>
            {isMellonPicked === false &&
                <div className="container">

                    <div id="right" className="right">
                        <div className="setaBemvindoOuter">
                            <div className="seta"></div>

                            <p onClick={() => {
                                setTimeout(() => {
                                    setIsMellonPicked(true);
                                }, 1000);
                            }}>Bem-vindo
                            </p>
                        </div>
                    </div>


                    <div id="wrong1" className="wrong1">
                        <p className="x" onClick={
                            () => {
                                setTimeout(() => {
                                    x();
                                }, 0);
                            }
                        }
                        >x</p>
                        <p>Errado!</p>
                    </div>

                    <div id="wrong2" className="wrong2">
                        <p className="x2" onClick={
                            () => {
                                setTimeout(() => {
                                    x2();
                                }, 0);
                            }
                        }
                        >x</p>
                        <p>Errado!</p>
                    </div>

                    <div className="gandalfOuter">

                        <div className="gandalfQuestion">
                            <h1>Qual palavra em Élfico, Gandalf proferiu para adentrar os portões de Moria?
                        </h1>
                            <div className="buttonOuter">
                                <button id="green" onClick={() => { showRight() }}>Mellon</button>

                                <button id="red1" onClick={() => { showWrong() }}>Ehtyar</button>

                                <button id="red2" onClick={() => { showWrong2() }}>Ealinornë</button>

                            </div>
                        </div>
                        <div className="gandalfPhoto"></div>
                    </div>
                </div>
            }
        </div>
    );
}





