import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.weatherMethod}>
        <input type="text" name="city" placeholder="Какой город?" 
        style={{
            width: "300px",
            height: "50px",
            color: "black",
            backgroundColor: "white",
            border: "2px solid rgb(254, 38, 38)",
          }}/>
        <button style={{
            width: "100px",
            height: "55px",
            color: "black",
            backgroundColor: "white",
            border: "2px solid black",
        }}>Получить</button>
      </form>
    );
  }
}

export default Form;
