import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
// import { DOC_URL } from "../../../utility/getBaseUrl";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import toast from "react-hot-toast";
import useCountryForm from "../../../hooks/country/Country/useCountryForm";
import BlankImage from "../../../assets/BlankImage.jpg"

const CountryForm = ({ userInfoData }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const { formik } = useCountryForm({
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
      padding="1rem"
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
      }}
    >
      <Grid item xs={4}>
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
              <div style={{border:"1px solid rgb(140, 140, 140)"}}>
              <img src={BlankImage} style={{width:"100%",height:"100%"}}/>
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
                width="200px"
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
          <div>
            <label htmlFor="file">
              <input
                type="file"
                id="file"
                onChange={handleChangeImage}
                style={{ display: "none" }}
              />
              <Button
                className="chooseInput"
                sx={{
                  bgcolor: "#7d449d",
                  width: "300px",
                  height: "26px",
                  color: "black",
                  "&:hover": { bgcolor: "#7d449d", color: "#fff" },
                  textTransform: "none",
                }}
                component="span"
              >
                Add Country Image
              </Button>
            </label>
          </div>
          {/* </>
            )} */}
        </Box>
      </Grid>

      <Grid item xs={8}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            id="countryName"
            name="countryName"
            label="Country Name"
            placeholder="Enter country name "
            value={formik.values.countryName}
            onChange={formik.handleChange}
            error={
              formik.touched.countryName && Boolean(formik.errors.countryName)
            }
            helperText={formik.touched.countryName && formik.errors.countryName}
            variant="outlined"
            size="small"
          />
          <TextField
            id="countryCode"
            name="countryCode"
            label="Country Code"
            placeholder="Enter country code"
            value={formik.values.countryCode}
            onChange={formik.handleChange}
            error={
              formik.touched.countryCode && Boolean(formik.errors.countryCode)
            }
            helperText={formik.touched.countryCode && formik.errors.countryCode}
            variant="outlined"
            size="small"
          />

          <TextField
            id="countryDescription"
            name="countryDescription"
            label="Description"
            placeholder="Enter country description"
            value={formik.values.countryDescription}
            onChange={formik.handleChange}
            multiline
            rows={3}
            error={
              formik.touched.countryDescription &&
              Boolean(formik.errors.countryDescription)
            }
            helperText={
              formik.touched.countryDescription &&
              formik.errors.countryDescription
            }
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
              color: "#000",
              backgroundColor: "#E7E0EB",
              textTransform: "none",
              border: "1px solid #6750A4",
              "&:hover": {
                backgroundColor: "#7d449d",
                color: "#fff",
              },
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CountryForm;
