const initialState = {
  findingFriens: [],
  myFrinds: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      //   console.log(state.findingFriens);
      return {
        ...state,
        findingFriens: action.value,
      };
    case "ADD_FRINDS":
      //   console.log(state.myFrinds);
      return {
        ...state,
        myFrinds: [...state.myFrinds, action.value],
      };
    default:
      return state;
  }
};
