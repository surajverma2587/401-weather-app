import { useFormik } from "formik";
import * as Yup from "yup";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const SearchForm = ({ onSuccess }) => {
  const initialValues = {
    city: "",
  };

  const validationSchema = Yup.object({
    city: Yup.string().required("Please enter a city name."),
  });

  const onSubmit = ({ city }) => {
    onSuccess(city);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Stack spacing={3} sx={{ padding: "1rem 2rem" }}>
      <Box>
        <Typography variant="h5" component="h2">
          Explore
        </Typography>
        <Divider />
      </Box>
      <Box>
        <Stack component="form" spacing={2} onSubmit={formik.handleSubmit}>
          <TextField
            label="City name"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && !!formik.errors.city}
            helperText={formik.errors.city}
          />
          <Button variant="contained" color="success" type="submit">
            Search
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};
