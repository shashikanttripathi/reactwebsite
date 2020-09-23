import React from 'react'
import { Form, FormControl, Button, NavDropdown, Nav } from "react-bootstrap"
import "./Navbar.css"
import {Link} from "react-router-dom"

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
    return (
        <div><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link class="navbar-brand" to="/">Transport</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="what-we-do">what we do</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Services
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link class="dropdown-item" to="#">Transportation</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to="#">Packaging</Link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="contact">Contact us</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    )

}

export default Navbar