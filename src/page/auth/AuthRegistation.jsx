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

const AuthRegistation = () => {
  const { formik, loading } = useRegistationForm();
  const { data: countryData, isLoading } = useGetCountryCode();
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
            Apply Now !!
          </Typography>
          <TextField
            id="fullName"
            name="fullName"
            label="Full Name"
            placeholder="Enter your full name"
            fullWidth
            required
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            variant="outlined"
            size="small"
          />
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
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile Number"
            placeholder="Enter your mobile number"
            fullWidth
            required
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)
            }
            helperText={
              formik.touched.mobileNumber && formik.errors.mobileNumber
            }
            variant="outlined"
            size="small"
          />
          <Autocomplete
            id="appliedCountryCode"
            name="appliedCountryCode"
            options={countryData || []}
            getOptionLabel={(option) => option?.countryName || ""}
            value={countryData?.find(
              (countrycode) =>
                countrycode?.countryCode === formik.values.countryCode || ""
            )}
            onChange={(event, newValue) => {
              formik.setFieldValue(
                "appliedCountryCode",
                newValue?.countryCode || ""
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Country"
                placeholder="Select country"
                fullWidth
                required
                error={
                  formik.touched.appliedCountryCode &&
                  Boolean(formik.errors.appliedCountryCode)
                }
                helperText={
                  formik.touched.appliedCountryCode &&
                  formik.errors.appliedCountryCode
                }
                size="small"
              />
            )}
          />
          <LoadingButton
            variant="contained"
            onClick={handleFormSubmit}
            loading={loading}
            sx={{ mt: 3, ml: 1, textTransform: "none" }}
          >
            Submit
          </LoadingButton>
          <br/>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
      {!isXsScreen ? (
        <Box sx={{ width: "cover", height: "516px" }}>
          <img
            src={Image}
            alt="Login Side Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      ):""}
      </Grid>
    </Grid>
  );
};

export default AuthRegistation;
