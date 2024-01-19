import React, { useState } from "react";
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import toast from "react-hot-toast";
import BlankImage from "../../../assets/Person.png";
import { VisuallyHiddenInput } from "../../../components/form/UploadButton";
import { useStaffForm } from "../../../hooks/staff/Staff/useStaffForm";
import { genderOptions } from "../../../components/optionDropDowm/Option";
import { LoadingButton } from "@mui/lab";
import { DOC_URL } from "../../../api/axiosInterceptor";

const currentDate = new Date();
const minAge = new Date(
  currentDate.getFullYear() - 18,
  currentDate.getMonth(),
  currentDate.getDate()
)
  .toISOString()
  .split("T")[0];

const StaffForm = ({ onClose, data }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [imagePreview, setImagePreview] = useState(null);

  const { formik, loading } = useStaffForm({
    selectedProfile,
    onClose,
    data,
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
    <Grid
      container
      spacing={2}
      margin="0"
      justifyContent="space-between"
      width="100%"
      padding=".5rem"
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
      }}
    >
      <Grid item xs={4}>
        <Box>
          {!imagePreview ? (
            data ? (
              <img
                src={DOC_URL + data?.user?.imageUrl}
                alt="Profile"
                height="100px"
                width="120px"
              />
            ) : (
              <div
                style={{
                  height: "120px",
                  width: "100%",
                }}
              >
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
            <div
              style={{
                width: "100%",
                height: "120px",
              }}
            >
              <img
                src={imagePreview}
                alt="Selected Profile"
                height="100%"
                width="100%"
              />
            </div>
          )}

          <Button
            component="label"
            variant="contained"
            onChange={handleChangeImage}
            sx={{ textTransform: "none" }}
            fullWidth
          >
            Staff's Photo
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
      </Grid>

      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="fullName"
              name="fullName"
              label="Full Name"
              fullWidth
              required
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
              InputLabelProps={{ shrink: Boolean(formik.values.fullName) }}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="gender"
              name="gender"
              select
              label="Gender"
              fullWidth
              required
              value={formik.values.gender}
              onChange={formik.handleChange}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              helperText={formik.touched.gender && formik.errors.gender}
              InputLabelProps={{ shrink: Boolean(formik.values.gender) }}
              variant="outlined"
              onBlur={formik.handleBlur}
              size="small"
            >
              {genderOptions?.map((option) => (
                <MenuItem key={option?.id} value={option?.value}>
                  {option?.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="dateOfBirth"
              label="Date of Birth"
              type="date"
              required
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              error={
                formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
              }
              inputProps={{ max: minAge }}
              helperText={
                formik.touched.dateOfBirth && formik.errors.dateOfBirth
              }
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="address"
              name="address"
              label="Address"
              fullWidth
              required
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              InputLabelProps={{ shrink: Boolean(formik.values.address) }}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="email"
              name="email"
              label="Email"
              fullWidth
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputLabelProps={{ shrink: Boolean(formik.values.email) }}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="mobileNumber"
              name="mobileNumber"
              label="Mobile Number"
              fullWidth
              required
              value={formik.values.mobileNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.mobileNumber &&
                Boolean(formik.errors.mobileNumber)
              }
              helperText={
                formik.touched.mobileNumber && formik.errors.mobileNumber
              }
              InputLabelProps={{ shrink: Boolean(formik.values.mobileNumber) }}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="position"
              name="position"
              label="Position"
              fullWidth
              required
              value={formik.values.position}
              onChange={formik.handleChange}
              error={formik.touched.position && Boolean(formik.errors.position)}
              helperText={formik.touched.position && formik.errors.position}
              InputLabelProps={{ shrink: Boolean(formik.values.position) }}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            gap="1rem"
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
              onClick={onClose}
              color="error"
              sx={{ textTransform: "none" }}
            >
              Close
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StaffForm;
