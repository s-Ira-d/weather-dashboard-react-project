import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
  font-family: "Montserrat Alternates", sans-serif;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 1199px) {
    padding: 8px 16px;
  }

  @media (max-width: 767px) {
    padding: 8px 12px;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  img {
    display: block;
    width: 120px;
    height: auto;
    object-fit: contain;

    @media (max-width: 1199px) {
      width: 100px;
    }

    @media (max-width: 767px) {
      width: 90px;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-left: 60px;

  @media (max-width: 1199px) {
    gap: 20px;
    margin-left: 30px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 12px;
  transition: color 0.3s ease;
  font-weight: 500;

  &:hover {
    color: #ffb36c;
  }

  @media (max-width: 1199px) {
    font-size: 11px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Actions = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 1199px) {
    gap: 8px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
export const RegisterButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #ffb36c;
  cursor: pointer;
  white-space: nowrap;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Modal = styled.div`
  width: 600px;
  padding: 30px;
  background: white;
  border-radius: 50px;

  @media (max-width: 1199px) {
    width: 500px;
    padding: 24px;
    border-radius: 32px;
  }

  @media (max-width: 767px) {
    width: calc(100% - 24px);
    max-width: 340px;
    padding: 20px;
    border-radius: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 0;
    left: 0;
    position: static;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
  }

  h3 {
    margin: 0 0 24px;
    text-align: center;
    font-weight: 500;
    font-size: 28px;

    @media (max-width: 767px) {
      font-size: 22px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 18px 16px;
  border: 1px solid #ccc;
  background-color: #e4e4e4;
  border-radius: 8px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;

  &:focus {
    outline: none;
    border-color: #ffb36c;
  }
`;

export const SubmitButton = styled.button`
  width: 140px;
  height: 40px;
  margin: 0px auto 0;
  border: none;
  border-radius: 8px;
  background: #ffb36c;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.2s;
`;

export const BottomText = styled.p`
  margin-top: 20px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: black;
  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const BurgerButton = styled.button`
  display: none;

  @media (max-width: 767px) {
    display: block;
    margin-left: auto;
    border: none;
    background: transparent;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 767px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    border-top: 1px solid #e5e5e5;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 1000;
    box-sizing: border-box;
  }
`;
