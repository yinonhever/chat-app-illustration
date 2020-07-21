import React from "react";

const MockupChatSide = props => {
    const classes = ["chat-side"];
    if (props.left) {
        classes.push("left");
    }
    if (props.right) {
        classes.push("right");
    }

    return (
        <div className={classes.join(" ")}>
            {props.children}
        </div>
    )
}

export default MockupChatSide;