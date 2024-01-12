import React, { useState } from "react";
import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import toast from "react-hot-toast";
import BlankImage from "../../../assets/BlankImage.jpg";
import useUniversityForm from "../../../hooks/university/University/useUniversityForm";
import {
  useGetCountry,
  useGetCountryCode,
} from "../../../hooks/country/useCountry";
import { VisuallyHiddenInput } from "../../../components/form/UploadButton";
import RemarkField from "../../../components/form/RemarkField";

const UniversityForm = ({ userInfoData }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const { data: countryData, isLoading } = useGetCountryCode();

  const { formik } = useUniversityForm({
    selectedProfile,
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
    <Grid
      container
      spacing={3}
      margin="0"
      justifyContent="center"
      width="100%"
    >
      <Grid item xs={5}>
        <Box>
          {!imagePreview ? (
            userInfoData?.imageFilePath ? (
              // <img
              //   src={`${DOC_URL}${userInfoData?.imageFilePath}`}
              //   alt="Profile"
              //   height="auto"
              //   width="200px"
              //   style={{ borderRadius: "20%" }}
              // />
              <div>image</div>
            ) : (
              <div style={{height:"140px" }}>
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
            <div>
              <img
                src={imagePreview}
                alt="Selected Profile"
                height="140px"
                width="180px"
              />
            </div>
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
            Add University Logo
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
      </Grid>

      <Grid item xs={7}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            id="name"
            name="name"
            label="University Name"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            variant="outlined"
            InputLabelProps={{ shrink: Boolean(formik.values.name) }}
            size="small"
          />
          <Autocomplete
            id="countryCode"
            name="countryCode"
            options={countryData || []}
            getOptionLabel={(option) => option?.countryName || ""}
            value={countryData?.find(
              (countrycode) =>
                countrycode?.countryCode === formik.values.countryCode || ""
            )}
            onChange={(event, newValue) => {
              formik.setFieldValue("countryCode", newValue?.countryCode || "");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Country"
                fullWidth
                required
                error={
                  formik.touched.countryCode &&
                  Boolean(formik.errors.countryCode)
                }
                helperText={
                  formik.touched.countryCode && formik.errors.countryCode
                }
                InputLabelProps={{ shrink: Boolean(formik.values.countryCode) }}
                size="small"
              />
            )}
          />
          <TextField
            id="url"
            name="url"
            label="Redirecting Url"
            fullWidth
            multiline
            rows={2}
            value={formik.values.url}
            onChange={formik.handleChange}
            error={formik.touched.url && Boolean(formik.errors.url)}
            helperText={formik.touched.url && formik.errors.url}
            InputLabelProps={{ shrink: Boolean(formik.values.url) }}
            variant="outlined"
            size="small"
          />
        </div>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              mt: 3,
              ml: 1,
              textTransform: "none",
            }}
          >
            Upload
          </Button>
          <Button
            variant="contained"
            color="error"
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

export default UniversityForm;
