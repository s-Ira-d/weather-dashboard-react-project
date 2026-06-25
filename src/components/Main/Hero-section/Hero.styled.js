import styled from "styled-components";
import hero from "../../../img/hero.jpg";

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  height: 595px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1199px) {
    height: 500px;
  }

  @media (max-width: 767px) {
    height: 450px;
  }
`;

export const Overlay = styled.div`
  min-height: 600px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1199px) {
    min-height: 500px;
  }

  @media (max-width: 767px) {
    min-height: 450px;
  }
`;

export const Content = styled.div`
  max-width: 900px;
  text-align: center;
  color: white;
  transform: translateY(-10px);

  @media (max-width: 1199px) {
    max-width: 700px;
  }

  @media (max-width: 767px) {
    max-width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 60px;

  @media (max-width: 1199px) {
    font-size: 40px;
    margin-bottom: 50px;
  }

  @media (max-width: 767px) {
    font-size: 30px;
    margin-bottom: 35px;
  }
`;

export const DescriptionBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 100px;

  @media (max-width: 1199px) {
    gap: 12px;
    margin-bottom: 70px;
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 3px 1fr;
    column-gap: 16px;
    justify-content: center;
  }
`;

export const LeftDescription = styled.p`
  width: 260px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  margin: 0;
  position: relative;
  left: -30px;
  text-align: right;

  @media (max-width: 1199px) {
    width: 210px;
    left: -15px;
    font-size: 15px;
    line-height: 1.4;
  }

  @media (max-width: 767px) {
    grid-column: 2;
    grid-row: 1;

    width: 180px;
    left: 0;
    text-align: left;
    font-size: 12px;
  }
`;

export const RightDescription = styled.p`
  width: 260px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  margin: 0;
  position: relative;
  left: 30px;
  text-align: left;

  @media (max-width: 1199px) {
    width: 210px;
    left: 15px;
    font-size: 15px;
  }

  @media (max-width: 767px) {
    grid-column: 2;
    grid-row: 2;

    width: 180px;
    left: 0;
    text-align: left;
    font-size: 12px;
  }
`;

export const Divider = styled.div`
  width: 3px;
  height: 150px;
  background-color: white;

  @media (max-width: 1199px) {
    height: 120px;
  }

  @media (max-width: 767px) {
    grid-column: 1;
    grid-row: 1 / 3;
    height: 140px;
  }
`;

export const SearchWrapper = styled.div`
  width: 550px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: white;
  border: 2px solid black;
  border-radius: 14px;
  overflow: hidden;

  @media (max-width: 1199px) {
    width: 450px;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: 320px;
    height: 38px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 18px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  background-color: #d9d9d9;

  @media (max-width: 767px) {
    font-size: 12px;
    padding: 0 12px;
  }
`;

export const SearchButton = styled.button`
  width: 50px;
  height: 100%;
  border: none;
  border-left: 2px solid black;
  background-color: #ffb36c;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 767px) {
    width: 42px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Suffix = styled.sup`
  font-size: 10px;
  position: relative;
  top: -1px;
`;
