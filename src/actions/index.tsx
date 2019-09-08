import * as types from "../constants/ActionTypes";
import { Message } from "../types/message";
import { User } from "../types/user";

let nextMessageId = 0;
// const nextUserId: number = 0;

export const addMessage = (message: Message, author: User) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
});

export const messageReceived = (message: Message, author: User) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
});

export const populateUsersList = (users: User) => ({
  type: types.USERS_LIST,
  users
});
