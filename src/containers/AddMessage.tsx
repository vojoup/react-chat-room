import { connect } from "react-redux";
import AddMessageComponent from "../comonents/AddMessage";
import { addMessage } from "../actions";

const mapDispatchToProps = (dispatch: any) => ({
  dispatch: (message: any, author: any) => {
    dispatch(addMessage(message, author));
  }
});

export const AddMessage = connect(
  () => ({}),
  mapDispatchToProps
)(AddMessageComponent);
