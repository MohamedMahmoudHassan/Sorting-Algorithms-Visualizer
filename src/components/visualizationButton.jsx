import React, { Component } from "react";

class VisualizationButton extends Component {
  state = { color: "" };

  constructor(props) {
    super(props);
    this.state = { style: { color: "#172b4d" } };
  }

  handleMouseEnter = () => {
    this.setState({ style: { color: "#f5365c" } });
  };

  handleMouseOut = () => {
    this.setState({ style: { color: "#172b4d" } });
  };

  render() {
    const { size, role, handleClick, ...rest } = this.props;
    return (
      <span
        className={`fa-stack fa-lg fa-${size}x`}
        onClick={handleClick}
        onMouseOut={this.handleMouseOut}
        onMouseEnter={this.handleMouseEnter}
        {...rest}
      >
        <i className={`fa fa-circle fa-stack-2x `} style={this.state.style} />
        <i className={`fa fa-${role} fa-stack-1x`} style={{ color: "white" }} />
      </span>
    );
  }
}

export default VisualizationButton;
