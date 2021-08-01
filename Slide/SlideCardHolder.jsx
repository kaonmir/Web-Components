import React, { Component } from "react";
import styled, { css } from "styled-components";
import SlideCard from "./SlideCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

class SlideCardHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 4,
    };
  }

  decreaseIndex = () => {
    const { currentIndex } = this.state;
    if (currentIndex !== 0) this.setState({ currentIndex: currentIndex - 1 });
  };

  increaseIndex = () => {
    const { currentIndex } = this.state;
    const { cards } = this.props;
    if (currentIndex !== cards.length - 1)
      this.setState({ currentIndex: currentIndex + 1 });
  };

  getPosition = (index) => {
    const { currentIndex } = this.state;
    if (index < currentIndex) return "left";
    else if (index > currentIndex) return "right";
    else return "center";
  };

  getVisibility = (index) => {
    const { currentIndex } = this.state;
    return index < currentIndex - 1 || currentIndex + 1 < index;
  };

  render() {
    const { cards, properties } = this.props;
    return (
      <SlideCardHolderBox>
        <SlideCardPanel {...this.props}>
          {cards.map((card, idx) => (
            <SlideCard
              card={card}
              position={this.getPosition(idx)}
              properties={properties}
              invisible={this.getVisibility(idx)}
              key={idx}
            />
          ))}
        </SlideCardPanel>
        <SlideControlPanel>
          <FaChevronLeft onClick={this.increaseIndex} />
          <FaChevronRight onClick={this.decreaseIndex} />
        </SlideControlPanel>
      </SlideCardHolderBox>
    );
  }
}

SlideCardHolder.defaultProps = {
  cards: [1, 2, 3, 4, 5, 6, 7],

  properties: {
    cardSize: {
      width: "100px",
      height: "200px",
    },
    cardZoomed: {
      width: 2,
      height: 1.5,
    },
  },
};

// Styled Components

const SlideCardHolderBox = styled.div`
  width: 100%;
`;

const SlideCardPanel = styled.div(
  ({ properties: { cardSize, cardZoomed } }) => ({
    position: "relative",
    width: "100%",
    height: `calc(${cardSize.height} * ${cardZoomed.height})`,
  })
);

const SlideControlPanel = styled.div``;

export default SlideCardHolder;
