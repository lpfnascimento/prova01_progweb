import React from "react";
import FormCaptura from './components/FormCaptura'
import Operacoes from './components/Operacoes';
import Resultado from './components/Resultado'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
      <FormCaptura/>
      <Operacoes/>
      <Resultado/>
      </div>
      
    ) ;

  }
}
export default App;