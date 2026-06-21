import {
  FooterWrapper,
  Container,
  Logo,
  Block,
  Title,
  Text,
  Contacts,
  Socials,
  Icon,
} from "./Footer.styled";

import logo from "../../img/logo.png";
import inst from "../../img/inst.png";
import facebook from "../../img/facebook.png";
import whatsapp from "../../img/whatsapp.png";

const Footer = () => {
  return (
    <FooterWrapper id="contacts">
      <Container>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>

        <Block>
          <Title>Address</Title>
          <Text>
            Svobody str. 35{"\n"}
            Kyiv{"\n"}
            Ukraine
          </Text>
        </Block>

        <Contacts>
          <Title>Contact us</Title>

          <Socials>
            <Icon src={inst} alt="inst" />
            <Icon src={facebook} alt="facebook" />
            <Icon src={whatsapp} alt="whatsapp" />
          </Socials>
        </Contacts>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
