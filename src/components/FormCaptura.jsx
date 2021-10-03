import React from "react";

class FormCaptura extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label for="num1">Número 01:</label>
          <input type="text" id="" name="num1" />
        </form>
        <form>
          <label for="num2">Número 02:</label>
          <input type="text" id="" name="num2" />
        </form>
      </div>
    );
  }
}
export default FormCaptura;
