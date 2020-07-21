import React from "react";
import avatar from "../images/avatar.jpg";

const MockupHeader = () => (
    <div className="mockup__header">
        <i className="mockup__icon-1 fas fa-angle-left" />
        <img className="mockup__avatar" src={avatar} alt="avatar" />
        <div className="mockup__header-text">
            <p className="mockup__heading">Samuel Green</p>
            <p className="mockup__sub-heading">Available to Walk</p>
        </div>
        <i className="mockup__icon-2 fas fa-ellipsis-v" />
    </div>
)

export default MockupHeader;