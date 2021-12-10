import React from "react";
// import { ReactDOM } from "react-dom";

class RadioButtons extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "Yes",
    };
    this.radioChange = this.radioChange.bind(this);
  }

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="radio"
          className="myinput"
          value="Yes"
          style={{ width: "2em", height: "2em" }}
          checked={this.state.selectedOption === "Yes"}
          onChange={this.radioChange}
        />
        Own House
        <input
          type="radio"
          className="myinput"
          value="No"
          style={{ width: "2em", height: "2em" }}
          checked={this.state.selectedOption === "No"}
          onChange={this.radioChange}
        />
        Rental House
        {/* <h3>this.state.selectedOption: {this.state.selectedOption}</h3> */}
      </div>
    );
  }
}

// ReactDOM.render(<RadioButtons />, document.getElementById("app"));
export default RadioButtons;
