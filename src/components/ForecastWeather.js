import Stack from "@mui/material/Stack";
import { ForecastCard } from "./ForecastCard";

export const ForecastWeather = () => {
  return (
    <Stack direction="row" justifyContent="space-evenly" flexWrap="wrap">
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
    </Stack>
  );
};
