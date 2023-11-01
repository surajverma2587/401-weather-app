import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { SearchForm } from "./components/SearchForm";
import { RecentSearches } from "./components/RecentSearches";
import { Banner } from "./components/Banner";
import { CurrentWeather } from "./components/CurrentWeather";
import { ForecastWeather } from "./components/ForecastWeather";

export const App = () => {
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
                <SearchForm />
              </Paper>
              <Paper elevation={3}>
                <RecentSearches />
              </Paper>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={8}>
            <Stack spacing={4}>
              <Box>
                <CurrentWeather />
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
