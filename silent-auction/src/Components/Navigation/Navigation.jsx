import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="light" light>
        <NavbarBrand href="/" className="mr-auto">Silent Auction</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#"><Link to='/'>Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><Link to='/signup'>Sign-up</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><Link to='/login'>Log-in</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;




{/* <NavLinks>
<Link to='/'>
  Home
</Link>
<Link to='/auctionlogin'>
  Login
</Link>
</NavLinks> */}