import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to="/history">History</Link>

  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/stt">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>



 
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1 id='header-title'>Silence Emotion</h1>
    <nav>
      { user && <span id='user-span'>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
