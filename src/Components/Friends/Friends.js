import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const Friends = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);


  const removeFriend = (id) => {
      dispatch({type:"REMOVE_FRIEND",value:id})
  }

  const myFrinds =
    state.myFrinds &&
    state.myFrinds.map((item, index) => (
      <div className="users" key={item.id}>
        <div className="usersInfo">
          <img src={item.picture.medium} />
          <div>
              {item.name.first} {item.name.last}
          </div>
        </div>
        <button className='usersInfo__add' onClick={() => removeFriend(item.id)}>Удалить</button>
      </div>
    ));
  return (
    <div>
      <ul className='usersLists'>{myFrinds}</ul>
    </div>
  );
};
