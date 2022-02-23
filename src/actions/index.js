export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const login = (data) => {
  return {
    type: "SIGN_IN",
    payload: data,
  };
};


export const logOut = () => {
  return {
    type: "SIGN_OUT"
  };
};
