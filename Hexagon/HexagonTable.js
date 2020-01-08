import React, { Component } from 'react';
import Hexagon from './Hexagon';

class HexagonTable extends Component {
    render() {
        const {row, col, length, margin, color, orientation} = this.props;
        let hexagon_row = {}, hexagon_col ={}, box = {};
        let rows = [], cols = [];

        if(orientation === "tiptoe") {
            hexagon_row = {
                display: "flex",
                width: `${Math.sqrt(3)*length/2+margin+col*(Math.sqrt(3)*length+margin)-margin/2}px`
            }

            for(let i=0; i<col; i++) cols.push(<Hexagon length={length} margin={margin} color={color} orientation={orientation}/>);
            for(let i=0; i<row; i++) rows.push(<div style={{...hexagon_row, justifyContent: i%2?"flex-end":"flex-start"} }>{cols}</div>);
            box = {paddingBottom: `${length/2-3/2/Math.sqrt(3)*margin}px`};
        } 
        else {
            hexagon_col = {
                display: "inline-flex",
                flexDirection: "column",
                height: `${(Math.sqrt(3)*length+margin)*row + Math.sqrt(3)*length/2}px`,
                marginBottom: `-${margin}px`
            }
            
            for(let i=0; i<row; i++) rows.push(<Hexagon length={length} margin={margin} color={color} orientation={orientation}/>);
            for(let i=0; i<col; i++) cols.push(
                <div style={{...hexagon_col, justifyContent: i%2?"flex-end":"flex-start",}}>{rows}</div>);
            box = {display: "flex"}
        }

        return(
            <div style={box}>
                { orientation==="tiptoe"? rows: cols}
            </div>
        )
    }
}

HexagonTable.defaultProps = {
    row: 3,
    col: 3,
    length: 30,
    margin: 3,
    color: "#2952a3",
    orientation: "tiptoe" // foot or tiptoe
}

export default HexagonTable;
