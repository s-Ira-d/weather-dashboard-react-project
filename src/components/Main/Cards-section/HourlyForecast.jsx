import { Section, BackgroundBox, Title } from "./HourlyForecast.styled";

const HourlyForecast = ({ city }) => {
  if (!city) return null;

  return (
    <Section id="hourly-forecast">
      <BackgroundBox>
        <Title>{city} hourly forecast</Title>

        <img
          src="https://quickchart.io/chart?c={type:'line',data:{labels:['00:00','03:00','06:00','09:00','12:00','15:00','18:00','21:00'],datasets:[{data:[18,17,16,19,22,24,23,20]}]}}"
          alt="chart"
          style={{
            width: "100%",
            borderRadius: "15px",
          }}
        />
      </BackgroundBox>
    </Section>
  );
};

export default HourlyForecast;
