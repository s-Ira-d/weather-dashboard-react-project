import {
  HeaderWrapper,
  Container,
  Logo,
  Navigation,
  NavLink,
  Actions,
  RegisterButton,
  Avatar,
} from "./Header.styled.js";
import logo from "../../img/logo.png";
import user from "../../img/user.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>

        <Navigation>
          <NavLink href="#whoweare">Who we are</NavLink>
          <NavLink href="#contacts">Contacts</NavLink>
          <NavLink href="#menu">Menu</NavLink>
        </Navigation>

        <Actions>
          <RegisterButton>Sign Up</RegisterButton>

          <Avatar src={user} alt="User avatar" />
        </Actions>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
