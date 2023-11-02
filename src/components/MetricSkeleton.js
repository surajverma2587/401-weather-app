import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

export const MetricSkeleton = ({ label, value, isCol }) => {
  return (
    <Grid item xs={12} sm={12} md={isCol ? 12 : 6}>
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ width: "70%", paddingRight: "8px" }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </Box>
        <Box sx={{ width: "30%" }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </Box>
      </Stack>
    </Grid>
  );
};
