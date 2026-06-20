import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #ffb36c;
  padding: 24px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 120px;
  padding: 0 24px;
`;

export const Logo = styled.div`
  img {
    width: 120px;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: left;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;

export const Title = styled.h4`
  margin: 0;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  white-space: pre-line;
`;

export const Socials = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Icon = styled.img`
  width: 33px;
  height: 33px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
