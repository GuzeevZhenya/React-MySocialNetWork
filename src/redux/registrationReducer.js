const initialState = {
  // userDate: [
  //   {
  //     login: 'shyst',
  //     password: '123',
  //     isRegistrate:true
  //   },
  // ],
  login: 'shyst',
  password: '123',
  exces:false
};

export const registrationReducer = (state = initialState, action) => {
  
  switch (action.type) {
    // case 'SET_USERDATA':
    //     const newUser = {
    //       login: action.value.email,
    //       password: action.value.password,
    //        isRegistrate:action.value.isRegistrate
    //     };
    //     return {
    //       ...state,
    //       userDate: [...state.userDate, newUser],
    //     };

    

    case 'CHECK_USERDATE':
     if (state.login === action.value.email && state.password === action.value.password) {
      return {
        ...state,
        exces:true
      } 
     } else {
       alert('Неправильно')
  }
     

    default:
      return state;
  }
};
