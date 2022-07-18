import styled from 'styled-components'
import Link from "next/link";

const Nav = styled.nav`
  background: #FEFEFE;
  padding: 17px 0;
`
const NavbarItem = styled.div`
  position: relative;
  
`
const Logo = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
  color: #3260A1;
  cursor: pointer;
`
const AddPostButton = styled.a`
  font-style:normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  background-color: #67BFFF;
  
  box-shadow: 0 10px 25px rgba(148,174,213,0.15);
  border-radius: 10px;
  position: absolute;
  width: 140px;
  height: 30px;
  left: 50%;
  top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%);
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Nav>
      <div className="container">
        <NavbarItem>
          <Link href = '/'>
            <Logo>NEXT | BLOG</Logo>
          </Link>
          <Link href='/add-post'>
            <AddPostButton>Добавить статью</AddPostButton>
          </Link>
        </NavbarItem>
      </div>
    </Nav>
  );
};

export default Navbar;
