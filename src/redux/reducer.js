import { actionsTypes } from './actions';

const initialState = {
    user: null,
    repos: [],
    selectedRepo: null,
    isFetchingUser: false,
    isFetchingRepos: false,
    errorMsg: null,
    lastSuccessfulUserFetch: null,
    lastSuccessfulReposFetch: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.UPDATE_USER:
      return {
        ...state,
        ...action.payload
      };
    case actionsTypes.UPDATE_REPOS:
      return {
        ...state,
        ...action.payload
      };
      case actionsTypes.DISMISS_ERROR:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}