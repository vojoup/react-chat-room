import { connect } from "react-redux";
import MessagesListComponent from "../comonents/MessageList";

export const MessagesList = connect(
  (state: any) => ({
    messages: state.messages
  }),
  {}
)(MessagesListComponent);
