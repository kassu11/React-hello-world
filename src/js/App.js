import "../scss/App.scss";
import {useState} from "react";

function random(a = 1, b = 0) {
  return Math.round(Math.random() * (a - b)) + b;
}

function App(obj) {
  const [counter, setCounter] = useState(50);
  const [color, setColor] = useState(`rgb(${random(50, 255)}, ${random(50, 255)}, ${random(50, 255)})`);
  return (
    <>
    <div className="App">
      <h1 style={{background: color}}>{`Tulos: ${counter}`}</h1>
      <button onClick={v => {
        setCounter(counter + 1)
        setColor(`rgb(${random(50, 255)}, ${random(50, 255)}, ${random(50, 255)})`)
      }}>Nosta tulosta</button>
    </div>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/Tn6-PIqc4UM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  );
}

export default App;