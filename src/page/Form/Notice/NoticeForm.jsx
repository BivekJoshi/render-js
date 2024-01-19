import React, { useState } from "react";
import { Box, Button, Grid, TextField, useTheme } from "@mui/material";
import useNoticeForm from "../../../hooks/notice/Notice/useNoticeForm";
import toast from "react-hot-toast";
import BlankImage from "../../../assets/BlankImage.jpg";
import { VisuallyHiddenInput } from "../../../components/form/UploadButton";
import RemarkField from "../../../components/form/RemarkField";
import { DOC_URL } from "../../../api/axiosInterceptor";
import { LoadingButton } from "@mui/lab";

const NoticeForm = ({ data, onClose }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const { formik, loading } = useNoticeForm({
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
    if (selectedProfile || data) {
      formik.submitForm();
    } else {
      toast.error("Please select image first");
    }
  };

  return (
    <Grid container spacing={3} margin="0" justifyContent="center" width="100%">
      <Grid item xs={12}>
        <TextField
          id="title"
          name="title"
          label="Title"
          fullWidth
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          variant="outlined"
          size="small"
          // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
        />
      </Grid>
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
            <div>
              <img
                src={imagePreview}
                alt="Selected Profile"
                height="200px"
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
            {data ? "Update Notice Image" : "Add Notice Image"}

            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={7}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            id="endDateTime"
            name="endDateTime"
            label="Date Time"
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
            // InputLabelProps={{ shrink: Boolen(formik.values.redirectingUrl) }}
            variant="outlined"
            size="small"
          />
          <RemarkField
            id="description"
            name="description"
            label="Description"
            fullWidth
            formik={formik}
            maxLength={255}
            variant="outlined"
            multiline
            InputLabelProps={{
              shrink: Boolean(formik.values.description),
            }}
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

export default NoticeForm;
