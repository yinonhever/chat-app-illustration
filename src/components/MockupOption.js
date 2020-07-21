import React from "react";

const Option = props => (
    <div className="option chat-element">
        <i className="option__icon far fa-circle" />
        <span className="option__text">{props.text}</span>
        <span className="option__price">{"$" + props.price}</span>
    </div>
)

export default Option;