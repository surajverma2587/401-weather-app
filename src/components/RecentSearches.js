import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { RecentSearchItem } from "./RecentSearchItem";

export const RecentSearches = () => {
  return (
    <Stack spacing={3} sx={{ padding: "1rem 2rem" }}>
      <Box>
        <Typography variant="h5" component="h2">
          Recent Searches
        </Typography>
        <Divider />
      </Box>
      <Box>
        <Stack spacing={2} component="ul" sx={{ p: "0", m: "0" }}>
          <RecentSearchItem />
          <RecentSearchItem />
          <RecentSearchItem />
        </Stack>
      </Box>
    </Stack>
  );
};
