import React from 'react'
import { Toolbar, Avatar, Button } from 'react-md'

import { connect } from 'react-redux'

import actionCreators from '../../redux/actions'

const TopBar = ({ user, updateUser, updateRepos }) => {
  const updateAll = () => {
    updateUser()
    updateRepos()
  }
  const avatar = user
    ? <Avatar key='avt' src={user.avatar_url} />
    : <Avatar key='avt' />
  const name = user ? user.login : ''
  const button = <Button onClick={updateAll} icon>replay</Button>
  console.log('button',button);
  console.log('name', name);
  return (
    <Toolbar fixed colored nav={avatar} title={name} actions={button} />
  )
}

const mapStateToProps = state => ({
  user: state.storeIni.user
});

const mapDispatchToProps = dispatch => ({
  updateUser: () => dispatch(actionCreators.upUser()),
  updateRepos: () => dispatch(actionCreators.upRepos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
