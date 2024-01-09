import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import useRegistationForm from "../../hooks/registation/Registation/useregistationForm";
import Image from "../../assets/Usalogin.png";
import { LoadingButton } from "@mui/lab";
import { useGetCountryCode } from "../../hooks/country/useCountry";
import { useNavigate } from "react-router-dom";
import useForgotPasswordForm from "../../form/auth/ForgetPassword/useForgetPasswordForm";

const ForgetPassword = () => {
  const { formik, loading } = useForgotPasswordForm();
  const navigate = useNavigate();
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleFormSubmit = () => {
    formik.handleSubmit();
    navigate("/home");
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Grid container direction="column" gap="1rem" padding="0 5rem">
          <Typography
            variant="h4"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Forget Password?
          </Typography>
          <TextField
            id="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            fullWidth
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            variant="outlined"
            size="small"
          />
          <TextField
            id="dateOfBirth"
            name="dateOfBirth"
            label="Date of Birth"
            type="date"
            placeholder="Enter your date of birth"
            fullWidth
            required
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            error={
              formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
            }
            helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
            variant="outlined"
            size="small"
            InputLabelProps={{ shrink: true }}
          />

          <LoadingButton
            variant="contained"
            onClick={handleFormSubmit}
            loading={loading}
            sx={{ mt: 3, ml: 1, textTransform: "none" }}
          >
            Submit
          </LoadingButton>
          <br />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        {!isXsScreen ? (
          <Box sx={{ width: "cover", height: "616px" }}>
            <img
              src={Image}
              alt="Login Side Logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};

export default ForgetPassword;
