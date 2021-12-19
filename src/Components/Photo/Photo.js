import React from "react";
import { useSelector, useDispatch } from "react-redux";

export function Photo() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.photoReducer);

  const removePhoto = (id) => {
      dispatch({type:"REMOVE_PHOTO",value:id})
  };
  console.log(state.myFavoritePhoto)

  const myPhoto =
    state.myFavoritePhoto &&
    state.myFavoritePhoto.map((item, index) => (
      <div>
        <img src={item.url} />
        <button onClick={() => removePhoto(item.id)}>Remove</button>
      </div>
    ));

  return <div>{myPhoto}</div>;
}
