import { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import { SearchForm } from "./components/SearchForm";
import { RecentSearches } from "./components/RecentSearches";
import { Banner } from "./components/Banner";
import { CurrentWeather } from "./components/CurrentWeather";
import { ForecastWeather } from "./components/ForecastWeather";
import { CurrentWeatherSkeleton } from "./components/CurrentWeatherSkeleton";

export const App = () => {
  const [city, setCity] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [currentWeatherIsLoading, setCurrentWeatherIsLoading] = useState(false);
  const [currentWeatherError, setCurrentWeatherError] = useState(false);

  const onSuccess = (cityName) => {
    setCity(cityName);
  };

  useEffect(() => {
    if (city) {
      const fetchData = async () => {
        try {
          setCurrentWeatherIsLoading(true);
          setCurrentWeatherError(false);
          setCurrentWeatherData();

          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8109f605d79877f7488a194794a29013`;

          const response = await axios.get(url);

          if (response.status !== 200) {
            setCurrentWeatherData();
            setCurrentWeatherError(true);
          } else {
            setCurrentWeatherData(response.data);
            setCurrentWeatherError(false);
          }

          setCurrentWeatherIsLoading(false);
        } catch (error) {
          console.log(error.message);

          setCurrentWeatherError(true);
          setCurrentWeatherData();
          setCurrentWeatherIsLoading(false);
        }
      };

      fetchData();
    }
  }, [city]);

  return (
    <Stack spacing={2} sx={{ px: 1 }}>
      <Paper elevation={3}>
        <Banner />
      </Paper>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={4}>
            <Stack spacing={3}>
              <Paper elevation={3}>
                <SearchForm onSuccess={onSuccess} />
              </Paper>
              <Paper elevation={3}>
                <RecentSearches />
              </Paper>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={8}>
            <Stack spacing={4}>
              <Box>
                {currentWeatherIsLoading && <CurrentWeatherSkeleton />}
                {currentWeatherData && <CurrentWeather />}
                {currentWeatherError && (
                  <Alert severity="error">
                    Failed to retrieve current weather info for {city}
                  </Alert>
                )}
              </Box>
              <Box>
                <ForecastWeather />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};
