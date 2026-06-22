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
  Suffix,
} from "./Hero.styled";
import search from "../../../img/search.png";
import { useState } from "react";

const Hero = ({ onAddCity }) => {
  const [city, setCity] = useState("");
  const today = new Date();

  const getDayWithSuffix = (day) => {
    let suffix = "th";

    if (!(day > 3 && day < 21)) {
      switch (day % 10) {
        case 1:
          suffix = "st";
          break;
        case 2:
          suffix = "nd";
          break;
        case 3:
          suffix = "rd";
          break;
        default:
          suffix = "th";
      }
    }

    return (
      <>
        {day}
        <Suffix>{suffix}</Suffix>
      </>
    );
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
    <HeroSection id="whoweare">
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
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

            <SearchButton
              onClick={() => {
                if (!city.trim()) return;

                onAddCity(city);
                setCity("");
              }}
            >
              <img src={search} alt="search" />
            </SearchButton>
          </SearchWrapper>
        </Content>
      </Overlay>
    </HeroSection>
  );
};

export default Hero;
