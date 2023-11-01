import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const Metric = ({ label, value, isCol }) => {
  return (
    <Grid item xs={12} sm={12} md={isCol ? 12 : 6}>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Typography variant="body1">{label}</Typography>
        </Box>
        <Box>
          <Typography variant="body1">{value}</Typography>
        </Box>
      </Stack>
    </Grid>
  );
};
