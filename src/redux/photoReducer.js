const inititialState = {
  photo: "",
  myFavoritePhoto: [
    {
      id: "",
      url: "",
    },
  ],
};

export const photoReducer = (state = inititialState, action) => {
  switch (action.type) {
    case "ADD_PHOTO":
      console.log(action.value);
      return {
        ...state,
        photo: action.value,
      };
    case "FAVORITE_PHOTO":
        console.log(state.myFavoritePhoto)
      const newPhoto = {
        id: action.value.id,
        url: action.value.value,
      };
      return {
        ...state,
        myFavoritePhoto: [...state.myFavoritePhoto, newPhoto],
      };
    case "REMOVE_PHOTO":
      const newState = state.myFavoritePhoto.filter(
        (item) => item.id !== action.value
      );
      return {
        ...state,
        myFavoritePhoto: newState,
      };
    default:
      return state;
  }
};
