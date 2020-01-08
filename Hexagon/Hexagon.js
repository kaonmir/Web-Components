import React, { Component } from 'react';

class Hexagon extends Component {
    constructor(props) {
        super(props);
        const length = parseInt(this.props.length);
        this.state = {
            top_h: length / 2,
            top_w: length * Math.sqrt(3) / 2,
            middle_h: length,
            middle_w: length * Math.sqrt(3),

            color: this.props.color,
            isTiptoe: this.props.orientation.trim() === "tiptoe" ? true : false,
        }
    }
    render() {
        const {top_h, top_w, middle_h, middle_w, color, isTiptoe} = this.state;
        const {length, margin} = this.props;
        let top, middle, bottom, box;

        if(isTiptoe) {
            box = {
                float: "left",
                height: `${3/2*length + 3/2/Math.sqrt(3)*margin}px`,
                marginRight: `${margin}px`,
            }
            top = {
                width: 0,
                borderBottom: `${top_h}px solid ${color}`,
                borderLeft: `${top_w}px solid transparent`,
                borderRight: `${top_w}px solid transparent`
            }
            middle = {
                width: middle_w,
                height: middle_h,
                backgroundColor: color
            }
            bottom = {
                width: 0,
                borderTop: `${top_h}px solid ${color}`,
                borderLeft: `${top_w}px solid transparent`,
                borderRight: `${top_w}px solid transparent`
            }
        }
        else {
            box = {
                width: `${3/2*length+Math.sqrt(3)/2*margin}px`,
                float: "left",
                marginBottom: `${margin}px`,
            }
            top = {
                width: `${this.props.length}px`,
                borderBottom: `${top_w}px solid ${color}`,
                borderLeft: `${top_h}px solid transparent`,
                borderRight: `${top_h}px solid transparent`
            }
            bottom = {
                width: `${this.props.length}px`,
                borderTop: `${top_w}px solid ${color}`,
                borderLeft: `${top_h}px solid transparent`,
                borderRight: `${top_h}px solid transparent`
            }
        }
        return(
            <div style={box}>
                <div style={top}/>
                <div style={middle}/>
                <div style={bottom}/>
            </div>
        )
    }
}

Hexagon.defaultProps = {
    color: "red",
    margin: 3,
    length: 30,
    orientation: "tiptoe", // foot or tiptoe
}

export default Hexagon;