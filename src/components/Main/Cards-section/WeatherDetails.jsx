import {
  Section,
  Title,
  Grid,
  Cell,
  CellTitle,
  CellValue,
  BackgroundBox,
  CellImage,
} from "./WeatherDetails.styled";
import im1 from "../../../img/im1.png";
import im2 from "../../../img/im2.png";
import im3 from "../../../img/im3.png";
import im4 from "../../../img/im4.png";
import im5 from "../../../img/im5.png";

const WeatherDetails = ({ city }) => {
  if (!city) return null;

  return (
    <Section id="weather-details">
      <BackgroundBox>
        <Grid>
          <Cell>
            <CellTitle>Feels like</CellTitle>
            <CellValue>{city.feelsLike}°C</CellValue>
            <CellImage src={im1} alt="" />
          </Cell>

          <Cell>
            <CellTitle>Min ℃</CellTitle>
            <CellValue>{city.minTemp}°C</CellValue>

            <CellTitle>Max ℃</CellTitle>
            <CellValue>{city.maxTemp}°C</CellValue>
          </Cell>

          <Cell>
            <CellTitle>Humidity</CellTitle>
            <CellValue>{city.humidity}%</CellValue>
            <CellImage src={im2} alt="" />
          </Cell>

          <Cell>
            <CellTitle>Pressure</CellTitle>
            <CellValue>{city.pressure} Pa</CellValue>
            <CellImage src={im3} alt="" />
          </Cell>

          <Cell>
            <CellTitle>Wind speed</CellTitle>
            <CellValue>{city.wind} m/s</CellValue>
            <CellImage src={im4} alt="" />
          </Cell>

          <Cell>
            <CellTitle>Visibility</CellTitle>
            <CellValue>
              {city.visibility >= 10
                ? "Excellent"
                : city.visibility >= 5
                  ? "Good"
                  : city.visibility >= 2
                    ? "Moderate"
                    : "Poor"}
            </CellValue>
            <CellImage src={im5} alt="" />
          </Cell>
        </Grid>
      </BackgroundBox>
    </Section>
  );
};

export default WeatherDetails;
