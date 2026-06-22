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
            <CellValue>21°C</CellValue>
            <CellImage src={im1} alt="im1" />
          </Cell>

          <Cell>
            <CellTitle>Min ℃</CellTitle>
            <CellValue>18°C</CellValue>
            <CellTitle>Max ℃</CellTitle>
            <CellValue>24°C</CellValue>
          </Cell>

          <Cell>
            <CellTitle>Humidity</CellTitle>
            <CellValue>65%</CellValue>
            <CellImage src={im2} alt="im2" />
          </Cell>

          <Cell>
            <CellTitle>Pressure</CellTitle>
            <CellValue>1013 hPa</CellValue>
            <CellImage src={im3} alt="im3" />
          </Cell>

          <Cell>
            <CellTitle>Wind speed</CellTitle>
            <CellValue>5 m/s</CellValue>
            <CellImage src={im4} alt="im4" />
          </Cell>

          <Cell>
            <CellTitle>Visibility</CellTitle>
            <CellValue>10 km</CellValue>
            <CellImage src={im5} alt="im5" />
          </Cell>
        </Grid>
      </BackgroundBox>
    </Section>
  );
};

export default WeatherDetails;
