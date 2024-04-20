import { authenticateActions } from "../reducer/authenticateSlice";

function login(id, password, bookmarkList) {
  return dispatch => {
    dispatch(authenticateActions.login({ id, password, bookmarkList }));
  };
}

function logout() {
  return dispatch => {
    dispatch(authenticateActions.logout());
  };
}

const authenticateAction = { login, logout };

export default authenticateAction;
