import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const SearchForm = () => {
  return (
    <Stack spacing={3} sx={{ padding: "1rem 2rem" }}>
      <Box>
        <Typography variant="h5" component="h2">
          Explore
        </Typography>
        <Divider />
      </Box>
      <Box>
        <Stack component="form" spacing={2}>
          <TextField
            error
            label="City name"
            helperText="Please enter a city name."
          />
          <Button variant="contained" color="success" type="submit">
            Search
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};
