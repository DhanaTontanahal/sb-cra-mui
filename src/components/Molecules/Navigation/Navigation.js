import React from 'react'
// import Link from '../../Atoms/Link/Link'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
.link{

    display:block:
    padding:4px;
    text-align:center;
    margin:4px;
    color:black;
    text-decoration: none;
    color:gray;
    z-index:99;

}

.link:active{
    border-bottom:1px solid black;
    color:black;
}

.link:focus{
    border-bottom:1px solid black;
    color:black;
}

.link:hover {
    cursor: pointer;
    color:black;
  }

`;
function Navigation() {


    return (
        <div>
            <StyledNav>
                <ul>
                    <Link className="link"  to="/dashboard">Profile</Link>
                    <Link className="link"  to="/claps">Claps</Link>
                    <Link className="link"  to="/highlights">Highlights</Link>
                    <Link className="link"  to="/responses">Responses</Link>
                </ul>
            </StyledNav>
        </div>
    )
}

export default Navigation
