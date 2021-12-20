import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersAPI } from '../../api';
import { photoAPI } from '../../api';

import './main.css';

export const Main = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const photoState = useSelector((state) => state.photoReducer);

  const [showInfo, setShowInfo] = useState('photo');
  const [activeButton, setActiveButton] = useState(true);

  const findNewFriends = () => {
    usersAPI.getUsers().then((data) => dispatch({ type: 'ADD_USER', value: data }));
    setShowInfo('friends');
  };

  const addFriends = (value) => {
    dispatch({ type: 'ADD_FRINDS', value });
    setActiveButton(false)
  };

  const getRandomPhoto = () => {
    photoAPI.getPhoto().then((data) => dispatch({ type: 'ADD_PHOTO', value: data }));
    setShowInfo('photo');
  };

  const addPhotoCollection = (value) => {
    const id = Math.floor(Math.random() * 10000);
    dispatch({ type: 'FAVORITE_PHOTO', value: { id, value } });
    photoAPI.getPhoto().then((data) => dispatch({ type: 'ADD_PHOTO', value: data }));
  };

  const user =
    userState.findingFriens.results &&
    userState.findingFriens.results.map((item, index) => (
      <div className="users" key={index}>
        <div className="usersInfo">
          <img src={item.picture.medium} />
          <div>
              {item.name.first} {item.name.last}
          </div>
        </div>
        <button className='usersInfo__add' onClick={() => addFriends(item)}>Добавить</button>
      </div>
    ));

  const photo = (
    <div className="main-block--photoBlock">
      <img src={photoState.photo} />
      {photoState.photo && (
        <button className="like" onClick={() => addPhotoCollection(photoState.photo)}></button>
      )}
    </div>
  );

  return (
    <div>
      <div className="main-block__navigation">
        <button onClick={() => getRandomPhoto()}>Фотки</button>
        <button onClick={() => findNewFriends()}>Друзья</button>
      </div>
      <div>{showInfo === 'friends' ? <ul className='usersLists'>{user}</ul> : <div>{photo}</div>}</div>
    </div>
  );
};
