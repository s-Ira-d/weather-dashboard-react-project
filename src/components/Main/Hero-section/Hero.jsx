import {
  HeroSection,
  Overlay,
  Content,
  Title,
  DescriptionBlock,
  Description,
  Divider,
  SearchInput,
} from "./Hero.styled";

const Hero = () => {
  return (
    <HeroSection>
      <Overlay>
        <Content>
          <Title>Weather dashboard</Title>

          <DescriptionBlock>
            <Description>
              Create your personal list of favorite cities and always be aware
              of the weather.
            </Description>

            <Divider />

            <Description></Description>
          </DescriptionBlock>

          <SearchInput type="text" placeholder="Search location..." />
        </Content>
      </Overlay>
    </HeroSection>
  );
};

export default Hero;
