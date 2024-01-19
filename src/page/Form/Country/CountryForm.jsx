import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import toast from "react-hot-toast";
import useCountryForm from "../../../hooks/country/Country/useCountryForm";
import BlankImage from "../../../assets/BlankImage.jpg";
import RemarkField from "../../../components/form/RemarkField";
import { VisuallyHiddenInput } from "../../../components/form/UploadButton";
import { DOC_URL } from "../../../api/axiosInterceptor";
import { LoadingButton } from "@mui/lab";

const CountryForm = ({ data, onClose }) => {
  const [selectedProfile, setSelectedProfile] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const { formik, loading } = useCountryForm({
    selectedProfile,
    data,
    onClose,
  });

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setSelectedProfile(file);

    // Show image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = () => {
    if (selectedProfile) {
      formik.submitForm();
    } else {
      toast.error("Please select image first");
    }
  };
  return (
    <Grid container spacing={3} margin="0" justifyContent="center" width="100%">
      <Grid item xs={12} sm={12} md={5}>
        <Box>
          {!imagePreview ? (
            data ? (
              <img
                src={DOC_URL + data?.imagePath}
                alt="Profile"
                height="200px"
                width="180px"
              />
            ) : (
              <div style={{ height: "200px" }}>
                <img
                  src={BlankImage}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            )
          ) : (
            ""
          )}

          {imagePreview && (
            <Grid item xs={12} sm={12}>
              <img
                src={imagePreview}
                alt="Selected Profile"
                height="200px"
                width="180px"
              />
            </Grid>
          )}
          {/* {!imagePreview && (
              <Grid item xs={12} sm={12}>
                <TextField
                  type="file"
                  onChange={handleChangeImage}
                  style={{
                    cursor: "pointer",
                    width: "100%",
                  }}
                />
              </Grid>
            )} */}
          {/* {imagePreview && (
              <> */}
          <Button
            component="label"
            variant="contained"
            onChange={handleChangeImage}
            sx={{ textTransform: "none" }}
            fullWidth
          >
            Add Country Photo
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={7}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            id="countryName"
            name="countryName"
            label="Country Name"
            value={formik.values.countryName}
            onChange={formik.handleChange}
            error={
              formik.touched.countryName && Boolean(formik.errors.countryName)
            }
            helperText={formik.touched.countryName && formik.errors.countryName}
            // InputLabelProps={{ shrink: Boolen(formik.values.countryName) }}
            variant="outlined"
            size="small"
          />
          <TextField
            id="countryCode"
            name="countryCode"
            label="Country Code"
            value={formik.values.countryCode}
            onChange={formik.handleChange}
            error={
              formik.touched.countryCode && Boolean(formik.errors.countryCode)
            }
            helperText={formik.touched.countryCode && formik.errors.countryCode}
            // InputLabelProps={{ shrink: Boolean(formik.values.countryCode) }}
            variant="outlined"
            size="small"
          />
          <RemarkField
            id="countryDescription"
            name="countryDescription"
            label="Country Description"
            fullWidth
            formik={formik}
            maxLength={255}
            variant="outlined"
            multiline
            // InputLabelProps={{
            //   shrink: Boolean(formik.values.countryDescription),
            // }}
            rows={4}
            inputProps={{ maxLength: 250 }}
          />
        </div>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={handleSubmit}
            sx={{
              mt: 3,
              ml: 1,
              textTransform: "none",
            }}
          >
            Upload
          </LoadingButton>
          <Button
            variant="contained"
            color="error"
            onClick={onClose}
            sx={{
              mt: 3,
              ml: 1,
              textTransform: "none",
            }}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CountryForm;
