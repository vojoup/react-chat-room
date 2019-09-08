import React from "react";
import Message from "./Message";

import { Message as MessageType } from "../types/message";

const MessagesList = ({ messages }: { messages: Array<MessageType> }) => (
  <section id="messages-list">
    <ul>
      {messages.map(message => (
        <Message key={message.id} {...message} />
      ))}
    </ul>
  </section>
);

export default MessagesList;
