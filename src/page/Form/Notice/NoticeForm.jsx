import React, { useState } from "react";
import { Box, Button, Grid, TextField, useTheme } from "@mui/material";
import useNoticeForm from "../../../hooks/notice/Notice/useNoticeForm";
// import { DOC_URL } from "../../../utility/getBaseUrl";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import toast from "react-hot-toast";
import BlankImage from "../../../assets/BlankImage.jpg"

const NoticeForm = ({ userInfoData }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const { formik } = useNoticeForm({
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
                Add Notice Picture
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
            id="title"
            name="title"
            label="Title"
            placeholder="Enter notice title"
            fullWidth
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            variant="outlined"
            size="small"
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            placeholder="Enter description fornotice"
            fullWidth
            multiline
            rows={3}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
            variant="outlined"
            size="small"
          />
          <TextField
            id="endDateTime"
            name="endDateTime"
            label="Date Time"
            placeholder="Select date time"
            fullWidth
            type="datetime-local"
            value={formik.values.endDateTime}
            onChange={formik.handleChange}
            error={
              formik.touched.endDateTime && Boolean(formik.errors.endDateTime)
            }
            helperText={formik.touched.endDateTime && formik.errors.endDateTime}
            variant="outlined"
            size="small"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="redirectingUrl"
            name="redirectingUrl"
            label="Redirecting Url"
            placeholder="Enter redirecting url if any"
            fullWidth
            value={formik.values.redirectingUrl}
            onChange={formik.handleChange}
            error={
              formik.touched.redirectingUrl &&
              Boolean(formik.errors.redirectingUrl)
            }
            helperText={
              formik.touched.redirectingUrl && formik.errors.redirectingUrl
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

export default NoticeForm;
