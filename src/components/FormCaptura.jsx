import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//metodo construtor vai declarar as prop e atributos dessa classe
//super(): precisa chamar a classe pai 'react.component' antes de declarar as classes filhas
class FormCaptura extends React.Component {
  constructor(props) {
    super(props);
     const num1=this.num1 
     const num2 = this.num2 
   }
  
  /*meódo para um evento -- vai guardar o valor obtido em num01 - metódo vai ser parâmetro para onchange usar é preciso guardar o valor 
  em alguma variavel /atributo - por isso deve ter o método construtor o this diz que estou usando um metodo de uma intancia
  bind = faz associação de um objeto com outro metodo quando quero q o novo metodo use metodos da instancia*/
  handleNum1(evento) {
    this.num1 = evento.target.value; //toda vez que input mudar é chamado esse evento - e armazena em Num1
    console.log(this.num1);
  }
  handleNum2(evento) {
    this.num2 = evento.target.value; //toda vez que input mudar é chamado esse evento - e armazena em Num1 - this no js é dinâmico, por isso usa o bind
    console.log(this.num2);
  }
  
  handleAdicao(evento) {
    this.Adicao = evento.target.value; //toda vez que input mudar é chamado esse evento - e armazena em Num1
    const adicao = parseInt(this.num1, 10) + parseInt(this.num2, 10);
    console.log(adicao);
  }
  handleSubtracao(evento) {
    this.Subtracao = evento.target.value; //toda vez que input mudar é chamado esse evento - e armazena em Num1
    const subtracao = parseInt(this.num1, 10) - parseInt(this.num2, 10);
    console.log(subtracao);
  }
  handleMultiplicacao(evento) {
    this.Multiplicacao = evento.target.value; //toda vez que input mudar é chamado esse evento - e armazena em Num1
    const multiplicacao = parseInt(this.num1, 10) * parseInt(this.num2, 10);
    console.log(multiplicacao);
  }
  handleDivisao(evento) {
    this.Divisao = evento.target.value; //toda vez que input mudar é chamado esse evento - e armazena em Num1
    const divisao = parseInt(this.num1, 10) / parseInt(this.num2, 10);
    console.log(divisao);
  }

  render() {
    return (
      <div>
        <form>
          <label for="num1">Número 01:</label>
          <input
            type="text"
            id=""
            name="num1"
            onChange={this.handleNum1.bind(this)} //qdo evento for chamado faz associação com a instancia criada
          />
          <br />
          <br />
          <label for="num2">Número 02:</label>
          <input
            type="text"
            id=""
            name="num2"
            value={this.num1}
            onChange={this.handleNum2.bind(this)}
          />
          <br /> <br />
          <h6>Operacoes</h6>
          <input
            type="radio"
            id="adicao"
            name="oper"
            value="adicao"
            onChange={this.handleAdicao.bind(this)}
          />
          <label for="adicao">Adição</label>
          <br />
          <input
            type="radio"
            id="sub"
            name="oper"
            value="subtracao"
            onChange={this.handleSubtracao.bind(this)}
          />
          <label for="sub">Subtração</label>
          <br />
          <input
            type="radio"
            id="multi"
            name="oper"
            value="multi"
            onChange={this.handleMultiplicacao.bind(this)}
          />
          <label for="multi">Multiplicação</label>
          <br />
          <input
            type="radio"
            id="divi"
            name="oper"
            value="divi"
            onChange={this.handleDivisao.bind(this)}
          />
          <label for="divi">Divisão</label>
          <br />
          <label for="resultado">Resultado:</label>
          <input type="text" id="" name="resultado" />
        </form>
      </div>
    );
  }
}
export default FormCaptura;
