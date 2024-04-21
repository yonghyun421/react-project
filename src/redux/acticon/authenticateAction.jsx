import { authenticateActions } from "../reducer/authenticateSlice";

function login(id, password, bookmarkList, interestList) {
  return dispatch => {
    dispatch(
      authenticateActions.login({ id, password, bookmarkList, interestList }),
    );
  };
}

function logout() {
  return dispatch => {
    dispatch(authenticateActions.logout());
  };
}

function updateInterests(interestList) {
  return dispatch => {
    dispatch(authenticateActions.updateInterests(interestList));
  };
}

const authenticateAction = { login, logout, updateInterests };

export default authenticateAction;
