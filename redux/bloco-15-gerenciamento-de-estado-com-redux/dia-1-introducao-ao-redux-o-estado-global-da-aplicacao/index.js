const Redux = require('redux'); // importadno redux
const fazerLogin = (email) => ({
  type: "LOGIN",
  email
});

const ESTADO_INICIAL = {
  login: false,
   email: "",
  };

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return{
        ...state,
        login: !state.login,
        email: action.email,
      };
      default:
        return state
  }
  
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("tiagoabranges@gmail.com"));

console.log(store.getState());