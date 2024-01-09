import React, { useState } from "react";
import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import toast from "react-hot-toast";
import BlankImage from "../../../assets/BlankImage.jpg"
import useUniversityForm from "../../../hooks/university/University/useUniversityForm";
import { useGetCountry, useGetCountryCode } from "../../../hooks/country/useCountry";

const UniversityForm = ({ userInfoData }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const {data: countryData,isLoading}=useGetCountryCode();

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
            <div>
              <img
                src={imagePreview}
                alt="Selected Profile"
                height="200px"
                width="200px"
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
          <div>
            <label htmlFor="file" className="file-label">
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
                Add University Logo
              </Button>
            </label>
          </div>
          {/* </>
            )} */}
        </Box>
      </Grid>

      <Grid item xs={8}>
        <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
          <TextField
            id="name"
            name="name"
            label="University Name"
            placeholder="Enter university name"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            variant="outlined"
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
                placeholder="Select country"
                fullWidth
                required
                error={
                  formik.touched.countryCode &&
                  Boolean(formik.errors.countryCode)
                }
                helperText={
                  formik.touched.countryCode &&
                  formik.errors.countryCode
                }
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
          <TextField
            id="url"
            name="url"
            label="Redirecting Url"
            placeholder="Enter redirecting url if any"
            fullWidth
            value={formik.values.url}
            onChange={formik.handleChange}
            error={
              formik.touched.url &&
              Boolean(formik.errors.url)
            }
            helperText={
              formik.touched.url && formik.errors.url
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
            Upload
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UniversityForm;
