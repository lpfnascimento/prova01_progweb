import React from "react";

class Operacoes extends React.Component {
  render() {
    return (
      <form>
        <br />
        <input type="radio" id="adicao" name="oper" value="adicao" /> 
        <label for="adicao">Adição</label> <br />
        <input type="radio" id="sub" name="oper" value="sub" /> 
        <label for="sub">Subtração</label> <br />
        <input type="radio" id="multi" name="oper" value="multi" />
        <label for="multi">Multiplicação</label>
        <br />
        <input type="radio" id="divi" name="oper" value="divi" />
        <label for="divi">Divisão</label>
        <br />
        <br />
      </form>
    );
  }
}
export default Operacoes;
