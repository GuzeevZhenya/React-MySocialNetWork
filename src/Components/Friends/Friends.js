import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const Friends = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);

  const myFrinds =
    state.myFrinds &&
    state.myFrinds.map((item, index) => (
      <div key={index}>
        <img src={item.picture.medium && item.picture.medium} />
        <li>
          {item.name.first} - {item.name.last}
        </li>

        <li>{item.name.last}</li>
      </div>
    ));
  return (
    <div>
      <ul>{myFrinds}</ul>
    </div>
  );
};
