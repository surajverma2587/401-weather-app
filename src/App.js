import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { SearchForm } from "./components/SearchForm";
import { RecentSearches } from "./components/RecentSearches";

export const App = () => {
  return (
    <Stack>
      <Box>Banner</Box>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={3} lg={4} sx={{ px: 1 }}>
            <Stack spacing={3}>
              <Paper elevation={3}>
                <SearchForm />
              </Paper>
              <Paper elevation={3}>
                <RecentSearches />
              </Paper>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={8} sx={{ px: 1 }}>
            <Stack>
              <Box>Current Weather</Box>
              <Box>Forecast Weather</Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};
