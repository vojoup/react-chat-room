import { takeEvery } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";

const handleNewMessage = function* handleNewMessage(params: {
  username: string;
  socket: any;
}) {
  yield takeEvery(types.ADD_MESSAGE, (action: any) => {
    action.author = params.username;
    params.socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;
