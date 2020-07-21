import React from "react";

const MockupImageRow = props => (
    <div className="image-row">
        {props.images.map(image => (
            <img className="image-row__image" src={image} alt="dog" />
        ))}
    </div>
)

export default MockupImageRow;