import React from "react";

const Pattern = props => {
    const classes = ["pattern"];
    if (props.left) {
        classes.push("pattern--left");
    }
    if (props.right) {
        classes.push("pattern--right");
    }
    if (props.grey) {
        classes.push("pattern--grey");
    }

    return <div className={classes.join(" ")} />;
}

export default Pattern;