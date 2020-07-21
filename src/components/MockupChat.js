import React from "react";
import ChatSide from "./MockupChatSide";
import Message from "./MockupMessage";
import ImageRow from "./MockupImageRow";
import Option from "./MockupOption";
import Input from "./MockupInput";
import dog1 from "../images/dog-image-1.jpg";
import dog2 from "../images/dog-image-2.jpg";
import dog3 from "../images/dog-image-3.jpg";

const MockupChat = () => (
    <div className="mockup__chat">
        <ChatSide left>
            <Message>That sounds great. I’d be happy with that.</Message>
            <Message>Could you send over some pictures of your dog, please?</Message>
        </ChatSide>
        <ChatSide right>
            <ImageRow images={[dog1, dog2, dog3]} />
            <Message>Here are a few pictures. She’s a happy girl!</Message>
            <Message>Can you make it?</Message>
        </ChatSide>
        <ChatSide left>
            <Message>She looks so happy! The time we discussed works. How long shall I take her out for?</Message>
            <Option text="30 minute walk" price="29" />
            <Option text="1 hour walk" price="49" />
        </ChatSide>
        <Input />
    </div>
)

export default MockupChat;