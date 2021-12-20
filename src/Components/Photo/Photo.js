import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './photo.css'

export function Photo() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.photoReducer);


  const removePhoto = (id) => {
      dispatch({type:"REMOVE_PHOTO",value:id})
  };

  const myPhoto =
   state.myFavoritePhoto !== null ? 
    state.myFavoritePhoto.map((item, index) => (
      <div className="photo" key={item.id}>
        <img src={item.url} />
        <button className="remove-photo" onClick={() => removePhoto(item.id)}></button>
      </div>
    )):null;
 
  return <div className="photo-block">
      {state.photo ? myPhoto : null}
  </div>;
}
