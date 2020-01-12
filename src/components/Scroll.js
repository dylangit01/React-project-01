import React from "react";

const Scroll = (props) => {
    return (
        // style={}, and {} inside of it means an object:
        <div style={{overflow: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll

