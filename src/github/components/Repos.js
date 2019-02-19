import React, { Component } from 'react'
import { CircularProgress } from 'react-md'

import RepoList from './RepoList'
import RepoDetail from './RepoDetail'

import { connect } from 'react-redux'

import actionCreators from '../../redux/actions'

class Repos extends Component {
  componentDidMount() {
    const { updateRepos, lastSuccessfulReposFetch } = this.props

    const now = new Date()
    if (!lastSuccessfulReposFetch) {
      updateRepos()
    } else if ((now - lastSuccessfulReposFetch) / 1000 > 300) {
      updateRepos()
    }
  }

  render() {
    const {
      isFetchingRepos,
      repos,
      selectedRepo,
      selectRepo,
      unselectRepo
    } = this.props
    console.log("repo", repos)
    return (
      isFetchingRepos
        ? <CircularProgress id='repos-progress' />
        : selectedRepo
          ? <RepoDetail repo={selectedRepo} unselectRepo={unselectRepo} />
          : <RepoList repos={repos} selectRepo={selectRepo} />
    )
  }
}

const mapStateToProps = state => ({
  lastSuccessfulReposFetch: state.storeIni.lastSuccessfulReposFetch,
  isFetchingRepos: state.storeIni.isFetchingRepos,
  repos: state.storeIni.repos,
});

const mapDispatchToProps = dispatch => ({
  updateRepos: () => dispatch(actionCreators.upRepos()),
  unselectRepo: () => dispatch(actionCreators.unselectRepo()),
  selectRepo: (id) => dispatch(actionCreators.selectRepo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);
