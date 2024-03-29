import * as types from "../constants/ActionTypes";

const users = (state = [], action: any) => {
  switch (action.type) {
    case types.USERS_LIST:
      return action.users;
    default:
      return state;
  }
};

export default users;
