const defaultState = {
  isLoggedIn: false,
  name: null,
  age: null,
};

const loggedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        isLoggedIn: true,
        ...action.payload,
      };

    case "SIGN_OUT":
      return defaultState;
    default:
      return state;
  }
};

export default loggedReducer;
