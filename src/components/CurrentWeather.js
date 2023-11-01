import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Metric } from "./Metric";

export const CurrentWeather = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Typography variant="h4" component="h3">
              London
            </Typography>
            <Typography variant="caption">Partially cloudy</Typography>
          </Box>
          <Box>
            <Avatar
              alt="Partially cloudy"
              src="http://openweathermap.org/img/w/02n.png"
            />
          </Box>
        </Stack>

        <Box sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Metric label="Temperature" value={20} />
            <Metric label="Temperature" value={20} />
            <Metric label="Temperature" value={20} />
            <Metric label="Temperature" value={20} />
          </Grid>
        </Box>
      </Stack>
    </Card>
  );
};
