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

function updateBookmarks(bookmarkList) {
  return dispatch => {
    dispatch(authenticateActions.updateBookmarks(bookmarkList));
  };
}

const authenticateAction = { login, logout, updateInterests, updateBookmarks };

export default authenticateAction;
