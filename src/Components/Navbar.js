import React from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={props.sty}>
    <Link className="navbar-brand" to="/" style={props.sty}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={props.sty}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={props.sty}>Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={props.sty}>
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/" style={props.sty}>Action</Link></li>
            <li><Link className="dropdown-item" to="/" style={props.sty}>Another action</Link></li>
            <li><hr className="dropdown-divider" style={props.sty}/></li>
            <li><Link className="dropdown-item" to="/" style={props.sty}>Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true" style={props.sty}>Disabled</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" style={props.sty}>Search</button>
      </form>
    </div>
  </div>
  </nav>
    </div>
  )
};

Navbar.propTypes ={
    title: PropTypes.string.isRequired
}

Navbar.defaultProps ={
    title: 'Zovno'
}

export {Navbar};
