const initialState = {
  login: '',
  password: '',
  exces:false
};

export const CHECK_USERDATE = "CHECK_USERDATE";

export const registrationReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case CHECK_USERDATE:
     if (state.login === action.value.email && state.password === action.value.password) {
      return {
        ...state,
        exces:true
      } 
     } else {
       alert('Неправильно')
       return state;
  }
     

    default:
      return state;
  }
};
