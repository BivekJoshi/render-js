import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import React from "react";
import useRegistationForm from "../../../hooks/registation/Registation/useregistationForm";
import { useGetCountryCode } from "../../../hooks/country/useCountry";

const RegistationForm = ({onClose}) => {
  const { formik } = useRegistationForm(onClose);
  const { data: countryData, isLoading } = useGetCountryCode();

  const handleFormSubmit = () => {
    formik.handleSubmit();
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
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
      </Grid>
      <Grid item xs={12} md={12}>
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
      </Grid>
      <Grid item xs={12} md={12}>
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
          helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={12}>
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
         <Grid
          container
          direction='row'
          justifyContent='flex-end'
          alignItems='flex-end'
        >
          <Button
            variant='contained'
            onClick={handleFormSubmit}
            sx={{ mt: 3, ml: 1 ,textTransform:"none"}}
          >
            Submit
          </Button>
          <Button
            variant='contained'
            onClick={onClose}
            sx={{ mt: 3, ml: 1 ,textTransform:"none"}}
            color='error'
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegistationForm;
