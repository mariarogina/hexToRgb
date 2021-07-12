import React from "react";

export default class Form extends React.Component {
  state = {
    input: "",
    rgb: "rgb(255, 243, 212)",
  };

  hexToRGB = (c) => {
    if (/^#([a-f0-9]{3}){1,2}$/.test(c)) {
      if (c.length === 4) {
        c = "#" + [c[1], c[1], c[2], c[2], c[3], c[3]].join("");
      }
      c = "0x" + c.substring(1);
      return (
        "rgb(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ")"
      );
    }
    return "";
  };

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
          input: hexValue.trim(),
          rgb: rgbValue,
        });
      } else {
        this.setState({
          input: hexValue.trim(),
          rgb: "ОШИБКА!",
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
