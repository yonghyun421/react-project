import { authenticateActions } from "../reducer/authenticateSlice";

function login(id, password) {
  return dispatch => {
    dispatch(authenticateActions.login({ id, password }));
  };
}

function logout() {
  return dispatch => {
    dispatch(authenticateActions.logout());
  };
}

const authenticateAction = { login, logout };

export default authenticateAction;
