import {getId} from "../helper/helper";

const initialState = {
  findingFriends: [],
  myFriends: [],
};

export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const ADD_USER = "ADD_USER";
export const ADD_FRIENDS = "ADD_FRIENDS";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const dataWithId = action.value.results.map(user => {
       return {...user, ...user.id, id: user.id.value ? user.id.value : user.id.value = getId()}
      })
      console.log(dataWithId);
      return {
        ...state,
        findingFriends: dataWithId,
      };
    case REMOVE_FRIEND:
      const newState = state.myFriends.filter((item) => item.id !== action.value);
      return {
        ...state,
        myFriends: newState
      }
    case ADD_FRIENDS:
      return {
        ...state,
        myFriends: [...state.myFriends, action.value.value],
      };
    default:
      return state;
  }
};
