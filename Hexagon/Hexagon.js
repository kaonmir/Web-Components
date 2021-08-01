import React, { Component } from "react";
import styled, { css } from "styled-components";

class Hexagon extends Component {
  constructor(props) {
    super(props);

    let { length, margin, color, orientation } = this.props;
    this.state = {
      length: length || 30,
      margin: margin || 3,
      color: color || "#2952a3",
      orientation: orientation || "tiptoe",
    };
  }
  render() {
    const props = this.state;

    return (
      <HexagonBox {...props}>
        <HexagonTop {...props} />
        <HexagonMiddle {...props} />
        <HexagonBottom {...props} />
      </HexagonBox>
    );
  }
}

const HexagonBox = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  ${({ orientation, length, margin }) =>
    orientation === "foot"
      ? css`
          margin-right: -${length / 2 - (3 * margin) / (2 * Math.sqrt(3))}px;
          margin-bottom: ${margin}px;
        `
      : css`
          margin-bottom: -${length / 2 - (3 * margin) / (2 * Math.sqrt(3))}px;
          margin-right: ${margin}px;
        `}
`;
const HexagonTop = styled.div`
  ${({ orientation, length, color }) =>
    orientation === "foot"
      ? css`
          width: ${length * 2}px;
          border-bottom: ${(length * Math.sqrt(3)) / 2}px solid ${color};
          border-left: ${length / 2}px solid transparent;
          border-right: ${length / 2}px solid transparent;
        `
      : css`
          width: 0;
          border-bottom: ${length / 2}px solid ${color};
          border-left: ${(length * Math.sqrt(3)) / 2}px solid transparent;
          border-right: ${(length * Math.sqrt(3)) / 2}px solid transparent;
        `}
`;
const HexagonMiddle = styled.div`
  ${({ orientation, length, color }) =>
    orientation !== "foot" &&
    css`
      width: ${length * Math.sqrt(3)}px;
      height: ${length}px;
      background-color: ${color};
    `}
`;
const HexagonBottom = styled.div`
  ${({ orientation, length, color }) =>
    orientation === "foot"
      ? css`
          width: ${length * 2}px;
          border-top: ${(length * Math.sqrt(3)) / 2}px solid ${color};
          border-left: ${length / 2}px solid transparent;
          border-right: ${length / 2}px solid transparent;
        `
      : css`
          width: 0;
          border-top: ${length / 2}px solid ${color};
          border-left: ${(length * Math.sqrt(3)) / 2}px solid transparent;
          border-right: ${(length * Math.sqrt(3)) / 2}px solid transparent;
        `}
`;
export default Hexagon;
