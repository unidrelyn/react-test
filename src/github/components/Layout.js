import React, { Component } from 'react'
import { CircularProgress, Snackbar } from 'react-md'

import TopBar from './TopBar'
import Sidebar from './Sidebar'

import { connect } from 'react-redux'
import actionCreators from '../../redux/actions'

class Layout extends Component {

  componentDidMount() {
    const { updateUser, lastSuccessfulUserFetch } = this.props
    const now = new Date()
    if (!lastSuccessfulUserFetch) {
      updateUser()
    } else if ((now - lastSuccessfulUserFetch) / 1000 > 300) {
      updateUser()
    }
  }

  render() {
    const { isFetchingUser, children, errorMsg, dismissError } = this.props
    const toasts = errorMsg ? [{ text: errorMsg }] :[]
    return (
      <div>
        {
          isFetchingUser
            ? <CircularProgress id='main-progress' />
            : <div>
              <TopBar />
              <div className='main-container'>
                <Sidebar />
                {children}
              </div>
            </div>
        }
        <Snackbar
          id='error-snackbar'
          toasts={toasts}
          onDismiss={dismissError}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lastSuccessfulUserFetch: state.storeIni.lastSuccessfulUserFetch,
  isFetchingUser: state.storeIni.isFetchingUser,
  errorMsg: state.storeIni.errorMsg
});

const mapDispatchToProps = dispatch => ({
  updateUser: () => dispatch(actionCreators.upUser()),
  dismissError: () => dispatch(actionCreators.dismissError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
