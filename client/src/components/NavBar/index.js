import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';
class NavBar extends Component{
    render(){
        return(
            <nav className="navbar bg-light fixed-top navbar-expand">
            <div class="container">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <NavLink smooth to="#contact" className="text-dark nav-link" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact smooth to="#about" className="text-dark nav-link">
                    <a>About</a>
                  </NavLink> 
                </li>
                <li className="nav-item">
                  <NavLink smooth to="#projects" className="text-dark nav-link" activeClassName="active">
                    Projects
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <a href={Resume} target="_blank" className="text-dark nav-link" activeClassName="active">
                    Resume
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
        )
    }
}

export default withRouter(NavBar);