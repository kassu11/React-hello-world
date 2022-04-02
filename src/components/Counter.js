import {useState} from "react";

function Counter() {
  const [counter, setCounter] = useState(50);
  const [color, setColor] = useState(`rgb(${random(50, 255)}, ${random(50, 255)}, ${random(50, 255)})`);

  return (
    <>
      <h1 style={{background: color}}>{`Tulos: ${counter}`}</h1>
      <button onClick={v => {
        setCounter(counter + 1)
        setColor(`rgb(${random(50, 255)}, ${random(50, 255)}, ${random(50, 255)})`)
      }}>Nosta tulosta</button>
    </>
  )
}

function random(a = 1, b = 0) {
  return Math.round(Math.random() * (a - b)) + b;
}

export default Counter;