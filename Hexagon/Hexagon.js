import React, { Component } from 'react';
import styled from 'styled-components';

class Hexagon extends Component {
    constructor(props) {
        super(props);

        let {length, margin, color, orientation} = this.props;
        this.state = {
            length: length?length: 30,
            margin: margin?margin: 3,
            color: color?color: "#2952a3",
            orientation: orientation?orientation:"tiptoe",
        }
    }
    render() {
        const props = this.state;

        return(
            <HexagonBox {...props}>
                <HexagonTop {...props}/>
                <HexagonMiddle {...props}/>
                <HexagonBottom {...props}/>
            </HexagonBox>
        )
    }
}

const HexagonBox = styled.div`
    float: left;
    display: flex;
    flex-direction: column;
    ${props => props.orientation==='foot'?`
        margin-right: -${props.length/2 - 3*props.margin/(2*Math.sqrt(3))}px;
        margin-bottom: ${props.margin}px;
    `:`
        margin-bottom: -${props.length/2 - 3*props.margin/(2*Math.sqrt(3))}px;
        margin-right: ${props.margin}px;
    `}
`;
const HexagonTop = styled.div`
    ${props => props.orientation==='foot'?`
        width: ${props.length}px;
        border-bottom: ${props.length*Math.sqrt(3)/2}px solid ${props.color};
        border-left: ${props.length/2}px solid transparent;
        border-right: ${props.length/2}px solid transparent;
    `:`
        width: 0;
        border-bottom: ${props.length/2}px solid ${props.color};
        border-left: ${props.length*Math.sqrt(3)/2}px solid transparent;
        border-right: ${props.length*Math.sqrt(3)/2}px solid transparent;
    `}
`;
const HexagonMiddle = styled.div`
    ${props => props.orientation==='foot'?`
    `:`
        width: ${props.length*Math.sqrt(3)}px;
        height: ${props.length}px;
        background-color: ${props.color};
    `}
`;
const HexagonBottom = styled.div`
    ${props => props.orientation==='foot'?`
        width: ${props.length}px;
        border-top: ${props.length*Math.sqrt(3)/2}px solid ${props.color};
        border-left: ${props.length/2}px solid transparent;
        border-right: ${props.length/2}px solid transparent;
    `:`
        width: 0;
        border-top: ${props.length/2}px solid ${props.color};
        border-left: ${props.length*Math.sqrt(3)/2}px solid transparent;
        border-right: ${props.length*Math.sqrt(3)/2}px solid transparent;
    `}
`;
export default Hexagon;
