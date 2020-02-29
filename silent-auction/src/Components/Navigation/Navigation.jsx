import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavLinks = styled.li`
  list-style: none;
`


const Navigation = () => {
  return(
    <div className='nav-wrapper'>
      <ul>
        <Link to='/'>
          <NavLinks>Home</NavLinks>
        </Link>
        <Link to='/auctionlogin'>
          <NavLinks>Login</NavLinks>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation;