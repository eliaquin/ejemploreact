import React, { Component } from 'react';
import './App.css';
import Validacion from './components/Validacion';
  
class App extends Component {
  state = {
      texto: ''
  }

inputChangedHandler = (property) => {
  return event =>
    this.setState({
      [property]: event.target.value
  });
}

render() {
  return (
    <div>
      <input 
        onChange={this.inputChangedHandler('texto')}
        value={this.state.texto}
      />
      <Validacion largoTexto={this.state.texto.length} />
    </div>    
    );
  }
}

export default App;
