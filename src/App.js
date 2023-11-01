import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { SearchForm } from "./components/SearchForm";

export const App = () => {
  return (
    <Stack sx={{ border: "1px solid red" }}>
      <Box sx={{ border: "1px solid green" }}>Banner</Box>
      <Box sx={{ border: "1px solid green" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={4}
            sx={{ border: "1px solid blue" }}
          >
            <Stack>
              <Box sx={{ border: "1px solid red" }}>
                <SearchForm />
              </Box>
              <Box sx={{ border: "1px solid red" }}>Recent Searches</Box>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={9}
            lg={8}
            sx={{ border: "1px solid blue" }}
          >
            <Stack>
              <Box sx={{ border: "1px solid red" }}>Current Weather</Box>
              <Box sx={{ border: "1px solid red" }}>Forecast Weather</Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};
