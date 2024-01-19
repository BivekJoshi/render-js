import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  styled,
} from "@mui/material";
import toast from "react-hot-toast";
import BlankImage from "../../assets/Person.png";
import useStudentForm from "../../form/Student/useStudentForm";
import {
  genderOptions,
  idType,
  maritalStatus,
  userTypeOptions,
} from "../../components/optionDropDowm/Option";
import { useGetCountryCode } from "../../hooks/country/useCountry";
import { LoadingButton } from "@mui/lab";
import { DOC_URL } from "../../api/axiosInterceptor";

const currentDate = new Date();
const minAge = new Date(
  currentDate.getFullYear() - 18,
  currentDate.getMonth(),
  currentDate.getDate()
)
  .toISOString()
  .split("T")[0];

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const StudentAddForm = ({ onClose, data }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const { data: countryData, isLoading } = useGetCountryCode();

  const { formik, loading } = useStudentForm({
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
      <Grid item xs={12} sm={12} md={4}>
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
            {data?"Change Photo":"Students Photo"}
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={8}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
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
          <Grid item xs={12} sm={6} md={6}>
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
          <Grid item xs={12} sm={6} md={6}>
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
          <Grid item xs={12} sm={6} md={6}>
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
          <Grid item xs={12} sm={6} md={6}>
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
          <Grid item xs={12} sm={6} md={6}>
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
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="nationality"
              name="nationality"
              label="Nationality"
              fullWidth
              required
              value={formik.values.nationality}
              onChange={formik.handleChange}
              error={
                formik.touched.nationality && Boolean(formik.errors.nationality)
              }
              helperText={
                formik.touched.nationality && formik.errors.nationality
              }
              InputLabelProps={{ shrink: Boolean(formik.values.nationality) }}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="maritalStatus"
              name="maritalStatus"
              select
              label="Marital Status"
              fullWidth
              required
              value={formik.values.maritalStatus}
              onChange={formik.handleChange}
              error={
                formik.touched.maritalStatus &&
                Boolean(formik.errors.maritalStatus)
              }
              helperText={
                formik.touched.maritalStatus && formik.errors.maritalStatus
              }
              InputLabelProps={{ shrink: Boolean(formik.values.maritalStatus) }}
              variant="outlined"
              onBlur={formik.handleBlur}
              size="small"
            >
              {maritalStatus?.map((option) => (
                <MenuItem key={option?.id} value={option?.value}>
                  {option?.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
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
                  InputLabelProps={{
                    shrink: Boolean(formik.values.appliedCountryCode),
                  }}
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="idType"
              name="idType"
              select
              label="Id type"
              fullWidth
              required
              value={formik.values.idType}
              onChange={formik.handleChange}
              error={formik.touched.idType && Boolean(formik.errors.idType)}
              helperText={formik.touched.idType && formik.errors.idType}
              InputLabelProps={{ shrink: Boolean(formik.values.idType) }}
              variant="outlined"
              onBlur={formik.handleBlur}
              size="small"
            >
              {idType?.map((option) => (
                <MenuItem key={option?.id} value={option?.value}>
                  {option?.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="idNumber"
              name="idNumber"
              label="Id Number"
              fullWidth
              required
              value={formik.values.idNumber}
              onChange={formik.handleChange}
              error={formik.touched.idNumber && Boolean(formik.errors.idNumber)}
              helperText={formik.touched.idNumber && formik.errors.idNumber}
              InputLabelProps={{ shrink: Boolean(formik.values.idNumber) }}
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

export default StudentAddForm;
