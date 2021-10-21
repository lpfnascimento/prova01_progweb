import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//metodo construtor vai declarar as prop e atributos dessa classe
//super(): precisa chamar a classe pai 'react.component' antes de declarar as classes filhas
class FormCaptura extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      resultado: "",
    };
  }

  /*método para um evento -- vai guardar o valor obtido em num01 - metódo vai ser parâmetro para onchange usar é preciso guardar o valor 
  em alguma variavel /atributo - por isso deve ter o método construtor o this diz que estou usando um metodo de uma intancia
  bind = faz associação de um objeto com outro metodo quando quero q o novo metodo use metodos da instancia*/
  handleNum1(evento) {
    this.setState({ num1: evento.target.value });
    //toda vez que input mudar é chamado esse evento - e armazena em Num1
  }
  handleNum2(evento) {
    this.setState({ num2: evento.target.value }); //toda vez que input mudar é chamado esse evento - e armazena em Num1 - this no js é dinâmico, por isso usa o bind
  }

  handleOperacao(evento) {
    let resultado = "";
    //evento.preventDefault();
    if (evento.target.value === "Adição") {
      resultado =
        parseFloat(this.state.num1, 10) + parseFloat(this.state.num2, 10);
    }
    if (evento.target.value === "Subtração") {
      resultado =
        parseFloat(this.state.num1, 10) - parseFloat(this.state.num2, 10);
    }
    if (evento.target.value === "Multiplicação") {
      resultado =
        parseFloat(this.state.num1, 10) * parseFloat(this.state.num2, 10);
    }
    if (evento.target.value === "Divisão") {
      resultado =
        parseFloat(this.state.num1, 10) / parseFloat(this.state.num2, 10);
    }
    this.setState({ resultado: "" + resultado });
  }

  render() {
    return (
      <div className="container">
        <form>
          <label className="container-label" for="readOnly">
            Número 01:{" "}
          </label>
          <input
            className="container-input"
            type="text"
            id=""
            name="num1"
            value={this.state.num1}
            onChange={this.handleNum1.bind(this)} //qdo evento for chamado faz associação com a instancia criada
          />
          <br />
          <br />
          <label className="container-label" for="readOnly">
            Número 02:{" "}
          </label>
          <input
            type="text"
            id=""
            name="num2"
            value={this.state.num2}
            onChange={this.handleNum2.bind(this)}
          />
          <br /> <br />
          <div>
            <h6>Escolha a operação desejada: </h6>
            <div>
              <input
                className="container-input"
                type="radio"
                id="adicao"
                name="oper"
                value="Adição"
                onChange={this.handleOperacao.bind(this)}
              />
              <label for="Adição">Adição </label>
              <br />
              <input
                className="container-input"
                type="radio"
                id="sub"
                name="oper"
                value="Subtração"
                onClick={this.handleOperacao.bind(this)}
              />
              <label for="Subtração">Subtração </label>
              <br />
              <input
                className="container-input"
                type="radio"
                id="multi"
                name="oper"
                value="Multiplicação"
                onClick={this.handleOperacao.bind(this)}
              />
              <label for="Multiplicação">Multiplicação </label>
              <br />
              <input
                className="container-input"
                type="radio"
                id="divi"
                name="oper"
                value="Divisão"
                onClick={this.handleOperacao.bind(this)}
              />
              <label for="Divisão">Divisão </label>
            </div>
            <br />
            <label className="container-label" for="resultado">
              Resultado:{" "}
            </label>
            <input
              type="text"
              id=""
              name="resultado"
              value={this.state.resultado}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default FormCaptura;
