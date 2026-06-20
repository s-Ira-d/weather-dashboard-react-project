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
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-left: 60px;
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
`;

export const Actions = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 12px;
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
  width: 300px;
  background: white;
  padding: 20px;
  border-radius: 10px;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: #ffb36c;
  cursor: pointer;
`;
