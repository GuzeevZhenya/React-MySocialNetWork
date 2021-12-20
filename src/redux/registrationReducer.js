const initialState = {
  userDate: [
    {
      login: '',
      password: '',
    },
  ],
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERDATA':
        const newUser = {
          login: action.value.email,
          password: action.value.password,
        };
        return {
          ...state,
          userDate: [...state.userDate, newUser],
        };
     

    default:
      return state;
  }
};
