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
  gap: 120px;
  padding: 0 24px;

  @media (max-width: 1199px) {
    gap: 70px;
    padding: 0 16px;
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 24px;
    row-gap: 16px;
    padding: 0 12px;
  }
`;

export const Logo = styled.div`
  @media (max-width: 767px) {
    grid-row: 1 / 3;
  }

  img {
    width: 120px;

    @media (max-width: 1199px) {
      width: 100px;
    }

    @media (max-width: 767px) {
      width: 90px;
    }
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: left;

  @media (max-width: 767px) {
    grid-column: 2;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;

  @media (max-width: 767px) {
    grid-column: 2;
  }
`;

export const Title = styled.h4`
  margin: 0;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1199px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  white-space: pre-line;

  @media (max-width: 1199px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 11px;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 1199px) {
    gap: 10px;
  }

  @media (max-width: 767px) {
    gap: 8px;
  }
`;

export const Icon = styled.img`
  width: 33px;
  height: 33px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1199px) {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 767px) {
    width: 24px;
    height: 24px;
  }
`;
