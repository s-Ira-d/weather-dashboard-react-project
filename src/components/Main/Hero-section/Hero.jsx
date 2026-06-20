import {
  HeroSection,
  Overlay,
  Content,
  Title,
  DescriptionBlock,
  LeftDescription,
  RightDescription,
  Divider,
  SearchWrapper,
  SearchInput,
  SearchButton,
} from "./Hero.styled";
import search from "../../../img/search.png";

const Hero = () => {
  const today = new Date();

  const getDayWithSuffix = (day) => {
    if (day > 3 && day < 21) return `${day}th`;

    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  const monthYear = today.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const weekday = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const day = getDayWithSuffix(today.getDate());

  return (
    <HeroSection>
      <Overlay>
        <Content>
          <Title>Weather dashboard</Title>

          <DescriptionBlock>
            <LeftDescription>
              Create your personal list of favorite cities and always be aware
              of the weather.
            </LeftDescription>

            <Divider />

            <RightDescription>
              {monthYear}
              <br />
              {weekday}, {day}
            </RightDescription>
          </DescriptionBlock>

          <SearchWrapper>
            <SearchInput
              type="text"
              placeholder="Search location..."
              list="ukrainian-cities"
            />

            <datalist id="ukrainian-cities">
              <option value="Kyiv" />
              <option value="Lviv" />
              <option value="Odesa" />
              <option value="Kharkiv" />
              <option value="Dnipro" />
              <option value="Zaporizhzhia" />
              <option value="Vinnytsia" />
              <option value="Poltava" />
              <option value="Chernihiv" />
              <option value="Cherkasy" />
              <option value="Zhytomyr" />
              <option value="Sumy" />
              <option value="Rivne" />
              <option value="Ternopil" />
              <option value="Ivano-Frankivsk" />
              <option value="Lutsk" />
              <option value="Uzhhorod" />
              <option value="Mykolaiv" />
              <option value="Kherson" />
              <option value="Kremenchuk" />
              <option value="Kropyvnytskyi" />
            </datalist>
            <SearchButton>
              <img src={search} alt="search" />
            </SearchButton>
          </SearchWrapper>
        </Content>
      </Overlay>
    </HeroSection>
  );
};

export default Hero;
