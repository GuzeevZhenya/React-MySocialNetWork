import * as axios from "axios";

export const usersAPI = {
  getUsers(name) {
    return axios
      .get(`https://randomuser.me/api/?results=10`)
      .then((response) => response.data);
  },
};

export const photoAPI = {
  getPhoto() {
   return fetch(`https://random.imagecdn.app/720/480`).then(
      (response) => response.url
    );
  },
};
