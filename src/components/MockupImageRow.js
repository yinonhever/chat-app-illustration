import React from "react";

const MockupImageRow = props => (
    <div className="image-row chat-element">
        {props.images.map(image => (
            <img className="image-row__image" src={image} alt="dog" />
        ))}
    </div>
)

export default MockupImageRow;