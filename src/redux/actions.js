import { getUser, getRepos } from '../github/requests'

export const actionsTypes = {
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_REPOS: 'UPDATE_REPOS',
  DISMISS_ERROR: 'DISMISS_ERROR',
  SELECT_REPO: 'SELECT_REPO',
  UNSELECT_REPO: 'UNSELECT_REPO'
};

const actionCreators = {
    upUser: () => dispatch => {
        getUser
        .then(res => { 
                dispatch({
                    type: actionsTypes.UPDATE_USER,
                    payload: {
                        user: res.data,
                        isFetchingUser: false,
                        lastSuccessfulUserFetch: new Date()
                    }
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: actionsTypes.UPDATE_USER,
                    payload: {
                    errorMsg: 'Could not fetch User :(',
                    isFetchingUser: false
                }
            })
        })
    },
    upRepos: () => dispatch => {
        getRepos
        .then(res => { 
                dispatch({
                    type:actionsTypes.UPDATE_REPOS,
                    payload: {
                        repos: res.data,
                        isFetchingRepos: false,
                        lastSuccessfulReposFetch: new Date()
                    }
                })
            })
            .catch(err => {
                console.log(err);
                console.log("mio");
                dispatch({
                    type:actionsTypes.UPDATE_REPOS,
                    payload: {
                        errorMsg: 'Could not fetch Repos :(',
                        isFetchingRepos: false
                }
            })
        })
    },
    dismissError: () => dispatch => {
        dispatch({
            type: actionsTypes.DISMISS_ERROR,
            payload: {
                errorMsg: null
            }
        });
    },
    unselectRepo: () => dispatch => {
        dispatch({
            type: actionsTypes.DISMISS_ERROR,
            payload: {
                selectedRepo: null
            }
        });
    },
    selectRepo: (id)  => (dispatch, getState) => {
        const repos  = getState.repos;
        console.log("rep", repos);
        if (repos) {
            const selectedRepo = repos.find(repo => {
            return repo.id === id
            })
            if (selectedRepo) {
                dispatch({
                    type: actionsTypes.SELECT_REPO,
                    payload: {
                        selectedRepo: selectedRepo
                    }
                });
            }
        }
    }
}


export default actionCreators;
