import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import { MetricSkeleton } from "./MetricSkeleton";

export const CurrentWeatherSkeleton = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <Box sx={{ width: "25%" }}>
            <Skeleton variant="text" sx={{ fontSize: "3rem" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </Box>
          <Box>
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          </Box>
        </Stack>

        <Box sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <MetricSkeleton />
            <MetricSkeleton />
            <MetricSkeleton />
            <MetricSkeleton />
          </Grid>
        </Box>
      </Stack>
    </Card>
  );
};
