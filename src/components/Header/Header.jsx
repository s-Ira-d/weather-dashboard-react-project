import { useState, useEffect } from "react";
import {
  HeaderWrapper,
  Container,
  Logo,
  Navigation,
  NavLink,
  Actions,
  RegisterButton,
  Avatar,
  UserName,
  ModalOverlay,
  Modal,
  Input,
  SubmitButton,
  BottomText,
  BurgerButton,
  MobileMenu,
  Arrow,
} from "./Header.styled";
import logo from "../../img/logo.png";
import userImg from "../../img/user.png";

const Header = () => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, email };

    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);

    setIsOpen(false);
    setName("");
    setEmail("");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>

        <Navigation>
          <NavLink href="#whoweare">Who we are</NavLink>
          <NavLink href="#contacts">Contacts</NavLink>
          <NavLink href="#menu">Menu</NavLink>
        </Navigation>

        <Actions>
          {!user ? (
            <RegisterButton onClick={() => setIsOpen(true)}>
              Sign Up
            </RegisterButton>
          ) : (
            <>
              <UserName>{user.name}</UserName>
              <Avatar src={userImg} alt="avatar" onClick={handleLogout} />
            </>
          )}
        </Actions>

        <BurgerButton onClick={() => setMenuOpen(!menuOpen)}>
          <span>Menu</span>
          <Arrow $open={menuOpen}>›</Arrow>
        </BurgerButton>
      </Container>

      {menuOpen && (
        <MobileMenu>
          <NavLink href="#whoweare" onClick={() => setMenuOpen(false)}>
            Who we are
          </NavLink>

          <NavLink href="#contacts" onClick={() => setMenuOpen(false)}>
            Contacts
          </NavLink>

          <NavLink href="#menu" onClick={() => setMenuOpen(false)}>
            Menu
          </NavLink>

          {!user ? (
            <RegisterButton
              onClick={() => {
                setIsOpen(true);
                setMenuOpen(false);
              }}
            >
              Sign Up
            </RegisterButton>
          ) : (
            <>
              <UserName>{user.name}</UserName>
              <Avatar src={userImg} alt="avatar" onClick={handleLogout} />
            </>
          )}
        </MobileMenu>
      )}

      {isOpen && (
        <ModalOverlay onClick={() => setIsOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h3>Sign up</h3>

            <form onSubmit={handleSubmit}>
              <label>
                Username
                <Input
                  placeholder="Username"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>

              <label>
                E-mail
                <Input
                  placeholder="E-Mail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label>
                Password
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>

              <SubmitButton type="submit">Sign up</SubmitButton>
            </form>

            <BottomText>
              Already have an account? <span>Log in</span>
            </BottomText>
          </Modal>
        </ModalOverlay>
      )}
    </HeaderWrapper>
  );
};

export default Header;
