// import { photoAPI } from '../../api';

const inititialState = {
  photo: '',
  myFavoritePhoto:[]
};

export const photoReducer = (state = inititialState, action) => {
  switch (action.type) {
    case 'ADD_PHOTO':
      return {
        ...state,
        photo: action.value,
      };
    case 'FAVORITE_PHOTO':
      const newPhoto = {
        id: action.value.id,
        url: action.value.value,
      };
      return {
        ...state,
        myFavoritePhoto: [...state.myFavoritePhoto, newPhoto],
      };
    case 'REMOVE_PHOTO':
      const newState = state.myFavoritePhoto.filter((item) => item.id !== action.value);
      return {
        ...state,
        myFavoritePhoto: newState,
      };
    default:
      return state;
  }
};
