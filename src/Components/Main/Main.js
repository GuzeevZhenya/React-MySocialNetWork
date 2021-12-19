import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersAPI } from "../../api";
import { photoAPI } from "../../api";

export const Main = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const photoState = useSelector((state) => state.photoReducer);

  const findNewFriends = () => {
    usersAPI
      .getUsers()
      .then((data) => dispatch({ type: "ADD_USER", value: data }));
  };

  const addFriends = (value) => {
    dispatch({ type: "ADD_FRINDS", value });
  };

  const getRandomPhoto = () => {
    photoAPI
      .getPhoto()
      .then((data) => dispatch({ type: "ADD_PHOTO", value: data }));
  };

  const addPhotoCollection = (value) => {
    const id = Math.floor(Math.random() * 10000);
    dispatch({ type: "FAVORITE_PHOTO", value: { id, value } });
  };

  const user =
    userState.findingFriens.results &&
    userState.findingFriens.results.map((item, index) => (
      <div className="users" key={index}>
        <div className="usersInfo">
          <img src={item.picture.medium} />
          <div>
            <li>
              {item.name.first} - {item.name.last}
            </li>
            <li>{item.gender}</li>
          </div>
        </div>
        <button onClick={() => addFriends(item)}>Добавить в друзья</button>
      </div>
    ));
  return (
    <div>
      <div>
        <div>
          <img src={photoState.photo} />

          {photoState.photo && (
            <button onClick={() => addPhotoCollection(photoState.photo)}>
              Добавить
            </button>
          )}
        </div>
      </div>
      <button onClick={() => getRandomPhoto()}>Получить фотку</button>
      <button onClick={() => findNewFriends()}>Новые друзья</button>
      <ul>{user}</ul>
    </div>
  );
};
