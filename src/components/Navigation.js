import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    {/* <a className="navbar-brand" href="/">Hidden brand</a> */}
                    <Link className='navbar-brand' to="/">
                        Menu
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className='nav-link active' to="/">Notes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link active' to="/create">Crear Nota</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link active' to="/user">Crear Usuario</Link>
                        </li>
                        
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
            </nav>
        )
    }
}
