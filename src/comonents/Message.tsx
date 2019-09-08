import React from "react";

type Props = {
  message: string;
  author: string;
};

const Message = ({ message, author }: Props) => (
  <p>
    <i>{author}</i>: {message}
  </p>
);

export default Message;
