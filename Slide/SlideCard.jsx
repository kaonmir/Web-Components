import React, { Component } from "react";
import styled, { css } from "styled-components";

class SlideCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <SlideCardBox {...this.props}>{this.props.card}</SlideCardBox>;
  }
}

// Default Props

SlideCard.defaultProps = {
  card: "Card Sample",
  invisible: false,
  position: "left", // left, center, right

  properties: {
    cardSize: {
      width: "100px",
      height: "200px",
    },
    cardZoomed: {
      width: 2,
      height: 1.3,
    },
  },
};

// Styled Component

const SlideCardBox = styled.div`
  position: absolute;
  border: 1px black solid;
  opacity: 100%;
  width: ${({ properties }) => properties.cardSize.width};
  height: ${({ properties }) => properties.cardSize.height};

  ${({ invisible }) => invisible && invisibleClass}
  ${({ position }) => positionStyles.get(position)};
  ${({ position }) => position === "center" && zoomedClass}

  transition-property: height, width, left, opacity, transform;
  transition-duration: 0.7s, 0.7s, 0.7s, 1s, 0.7s;
`;

// css for animation
const invisibleClass = css`
  opacity: 0;
`;

const positionStyles = {
  leftCardClass: css`
    top: 50%;
    left: 0;
    transform: translate(0%, -50%);
  `,
  CenterCardClass: css`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  RightCardClass: css`
    top: 50%;
    left: 100%;
    transform: translate(-100%, -50%);
  `,
  get: (position) => {
    if (position === "left") return positionStyles.leftCardClass;
    if (position === "center") return positionStyles.CenterCardClass;
    if (position === "right") return positionStyles.RightCardClass;
  },
};

const zoomedClass = css(({ properties: { cardSize, cardZoomed } }) => ({
  height: `calc(${cardSize.height} * ${cardZoomed.height})`,
  width: `calc(${cardSize.width} * ${cardZoomed.width})`,
}));

export default SlideCard;
