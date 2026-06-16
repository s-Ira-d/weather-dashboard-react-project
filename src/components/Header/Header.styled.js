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
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
`;

export const RegisterButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #ffb36c;
  color: black;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ffb36c;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
