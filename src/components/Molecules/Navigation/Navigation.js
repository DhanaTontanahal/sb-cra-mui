import React from 'react'
import Link from '../../Atoms/Link/Link'
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
                    <Link className="link"  href="dashboard">Profile</Link>
                    <Link className="link"  href="claps">Claps</Link>
                    <Link className="link"  href="highlights">Highlights</Link>
                    <Link className="link"  href="responses">Responses</Link>
                </ul>
            </StyledNav>
        </div>
    )
}

export default Navigation
