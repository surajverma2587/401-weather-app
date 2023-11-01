import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const RecentSearchItem = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Box>
        <Typography variant="subtitle1">London</Typography>
      </Box>
      <Box>
        <IconButton>
          <VisibilityIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Stack>
  );
};
