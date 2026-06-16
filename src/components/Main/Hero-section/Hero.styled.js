import styled from "styled-components";
import hero from "../../../img/hero.png";

export const HeroSection = styled.section`
  min-height: 500px;
  // background-image: url(${hero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: "Montserrat", sans-serif;
`;

export const Overlay = styled.div`
  min-height: 500px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 900px;
  text-align: center;
  color: white;
  transform: translateY(-10px);
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 60px;
`;

export const DescriptionBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 100px;
`;

export const Description = styled.p`
  width: 260px;
  font-size: 16px;
  line-height: 1.6;
`;

export const Divider = styled.div`
  width: 1px;
  height: 100px;
  width: 3px;
  background-color: white;
`;

export const SearchInput = styled.input`
  width: 350px;
  height: 45px;
  border: none;
  border-radius: 24px;
  padding: 0 20px;
  font-size: 15px;
  outline: none;
  &::placeholder {
    color: #999;
  }
`;
