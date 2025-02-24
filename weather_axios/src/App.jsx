import "./App.css";
import SearchBox from "./components/searchBox";
import WeatherCard from "./components/weather";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import axios from "axios";

const API_KEY = "24fefdcb31ebdba44cd33f70f044e306"; 

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      setError(""); 
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch {
      setWeather(null);
      setError("City not found. Please try again!");
    }
  };

  return (
    <>
    <header >
        <h1>🌦️ Forecast</h1>
    </header>

      <div className="App">
      <Container style={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h4" gutterBottom style={{ marginBottom: "20px", paddingBottom: "40px", borderBottom: "1px solid #ccc" }}>
          🌎 Weather Dashboard
        </Typography>
        <SearchBox onSearch={fetchWeather} />
        {error && <Typography color="error">{error}</Typography>}
        <WeatherCard weather={weather} />
      </Container>
    </div>
    </>
    
  );
}

export default App;
