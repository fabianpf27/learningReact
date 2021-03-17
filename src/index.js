import ReactDOM from 'react-dom';
import {useState} from 'react'

const rootElement = document.getElementById('root')

const Counter = ({value}) =>{
  console.log('counter render')
  return <h1>{value}</h1>   
}

const App = () => {
  
  const [value,setContador] = useState(0)
  
  console.log('render')

  const handleClick = () =>{
    setContador(value + 1)
  }
  
  const handleClickReset = () =>{
    setContador(0)
  }

  const isEven = value % 2 ===0
  const mensajePar = isEven ? 'Es par' : 'Es impar'

  return(
    <>
    <p>value contador: </p>
    <Counter value = {value} />    
    <p>{mensajePar}</p>
    <button onClick = {handleClick}>
      Incrementar
    </button>
    <button onClick = {handleClickReset}>
      Reset
    </button>
    </>
  ) 
}

ReactDOM.render( 
  <App />,  
  rootElement
);
