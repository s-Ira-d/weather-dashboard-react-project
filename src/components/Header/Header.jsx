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

  // load user from localStorage
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
          <NavLink href="#home">Home</NavLink>
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
      </Container>

      {isOpen && (
        <ModalOverlay onClick={() => setIsOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h3>Register</h3>

            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <SubmitButton type="submit">Save</SubmitButton>
            </form>
          </Modal>
        </ModalOverlay>
      )}
    </HeaderWrapper>
  );
};

export default Header;
