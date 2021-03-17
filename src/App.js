import Mensaje from './mensaje'
import './App.css';

const Nombre = () =>{
  return <h2>Fabian Camilo Pico Florez</h2>
}

const Epp = () => {

  return (
    <div className="App">
      <Mensaje color='red' mensaje = 'Estamos trabajando'/>
      <Mensaje color='green' mensaje = 'En un curso'/>
      <Mensaje color='yellow' mensaje = 'De React'/>
      <Nombre />    
    </div>
  );
}

export default App;
