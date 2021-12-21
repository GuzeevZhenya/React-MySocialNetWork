const initialState = {
  findingFriens: [],
  myFrinds: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        findingFriens: action.value,
      };
    case "REMOVE_FRIEND":
      const newState = state.myFrinds.filter((item) => item.id !== action.value);
      return {
        ...state,
        myFrinds: newState
      }
    case "ADD_FRINDS":
      //   console.log(state.myFrinds);
      return {
        ...state,
        myFrinds: [...state.myFrinds, action.value.value],
      };
    default:
      return state;
  }
};
