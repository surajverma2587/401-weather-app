import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Banner = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <Typography
        component="h1"
        variant="h3"
        gutterBottom
        sx={{ letterSpacing: "0.25rem", textTransform: "uppercase" }}
      >
        Weather Dashboard
      </Typography>
      <Typography component="h2" variant="h5" gutterBottom>
        Check weather forecast in your city
      </Typography>
    </Box>
  );
};
