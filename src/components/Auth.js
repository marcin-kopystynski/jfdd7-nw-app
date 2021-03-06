import React from 'react'
import { connect } from 'react-redux'
import AuthFormWrapper from './AuthFormWrapper'



const Auth = ({ user, children }) => (
  user !== null ?
    children :
    <AuthFormWrapper/>
)

export default connect(
  state => ({
    user: state.auth.user
  })
)(Auth)
