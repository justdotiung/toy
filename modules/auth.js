import { createAction, handleActions } from "redux-actions";

const CREATE_AUTH = "auth/CREATE_AUTH";

const defaultState = {
  login: {
    name: "",
    password: ""
  },
  register: {
    name: "",
    password: "",
    chackPassword: ""
  }
};

export const createAuth = createAction(CREATE_AUTH, ({ form, key, value }) => ({
  form,
  key,
  value
}));
const auth = handleActions(
  {
    [CREATE_AUTH]: (state, { payload: { form, key, value } }) => ({
      ...state,
      [form]: {
          ...state[form],
        [key]: value
      }
    })
  },
  defaultState
);

export default auth;
