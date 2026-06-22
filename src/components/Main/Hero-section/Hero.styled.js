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
`;

export const Overlay = styled.div`
  min-height: 600px;
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
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 100px;
`;

export const LeftDescription = styled.p`
  width: 260px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  white-space: pre-line;
  margin: 0;
  position: relative;
  left: -30px;
  text-align: right;
`;

export const RightDescription = styled.p`
  width: 260px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  white-space: pre-line;
  margin: 0;
  position: relative;
  left: 30px;
  text-align: left;
`;

export const Divider = styled.div`
  width: 1px;
  height: 150px;
  width: 3px;
  background-color: white;
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
    object-fit: contain;
  }
`;

export const Suffix = styled.sup`
  font-size: 10px;
  position: relative;
  top: -1px;
`;
