import React from "react";

export default class Form extends React.Component {
  state = {
    input: "",
    rgb: "rgb(255, 243, 212)",
  };

  hexToRGB(hex) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  updateInput = (e) => {
    const hexValue = e.target.value;
    const rgbValue = this.hexToRGB(e.target.value);

    this.setState({
      input: hexValue.trim(),
      rgb: "",
    });

    if (hexValue.length === 7) {
      if (hexValue.indexOf("#") != -1 && rgbValue != "") {
        this.setState({
          input: "",
          rgb: rgbValue,
        });
      } else {
        this.setState({
          input: hexValue.trim(),
          rgb: "ERROR!",
        });
      }
    } else if (hexValue.length > 7) {
      this.setState({
        input: hexValue.trim(),
        rgb: "ERROR!",
      });
    }
  };

  render() {
    return (
      <div className="app" style={{ backgroundColor: this.state.rgb }}>
        <div
          className="form"
          style={{ backgroundColor: this.state.rgb, textAlign: "center" }}
        >
          <div className="rgbBox">Converter HEX to RGB</div>
          <div className="inputbox">
            <input
              className="input"
              type="text"
              placeholder="Hexacolor with a # e.g. #ff00ff"
              onChange={this.updateInput}
              value={this.state.input}
            ></input>
          </div>
          <div className="rgbBox">{this.state.rgb}</div>
        </div>
      </div>
    );
  }
}
