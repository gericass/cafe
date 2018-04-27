import {
  CHANGE_LOGIN_ID,
  CHANGE_PASSWORD,
  CLEAR_LOGIN_ID_AND_PASSWORD,
  SAVE_AUTHORIZATION,
  CLEAR_AUTHORIZATION,
  SAVE_PASSENGER
} from './LoginAction';

const initialState = {
  loginId: null,
  password: null,
  authorization: null,
  passenger: null,
  errorMessages: null
};

const LoginReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_LOGIN_ID:
      return Object.assign({}, state, {loginId: action.loginId});
    case CHANGE_PASSWORD:
      return Object.assign({}, state, {password: action.password});
    case SAVE_AUTHORIZATION:
      return Object.assign({}, state, {authorization: action.authorization});
    case CLEAR_AUTHORIZATION:
      return Object.assign({}, state, {authorization: null, passenger: null});
    case CLEAR_LOGIN_ID_AND_PASSWORD:
      return Object.assign({}, state, {loginId: null, password: null});
    case SAVE_PASSENGER:
      return Object.assign({}, state, {passenger: action.passenger});
    default:
      return state;
  }
};

export default LoginReducer;