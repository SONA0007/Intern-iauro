import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <Card sx={{ width: 300, textAlign: "center", margin: "20px auto",  padding: "50px" }}>
      <CardContent>
        <Typography variant="h5">{weather?.name}</Typography>
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}.png`}
          alt="weather icon"
        />
        <Typography variant="h6">
          {weather?.weather?.[0]?.description?.toUpperCase()}
        </Typography>
        <Typography variant="body1">🌡️ Temp: {weather?.main?.temp}°C</Typography>
        <Typography variant="body2">💨 Wind: {weather?.wind?.speed} m/s</Typography>
        <Typography variant="body2">🌫️ Humidity: {weather?.main?.humidity}%</Typography>
      </CardContent>
    </Card>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    name: PropTypes.string,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    main: PropTypes.shape({
      temp: PropTypes.number,
      humidity: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
  }),
};

export default WeatherCard;
