import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import toast from "react-hot-toast";
import BlankImage from "../../assets/BlankImage.jpg";
import useStudentForm from "../../form/Student/useStudentForm";
import {
  genderOptions,
  idType,
  maritalStatus,
  userTypeOptions,
} from "../../components/optionDropDowm/Option";
import { useGetCountryCode } from "../../hooks/country/useCountry";

const currentDate = new Date();
const minAge = new Date(
  currentDate.getFullYear() - 18,
  currentDate.getMonth(),
  currentDate.getDate()
)
  .toISOString()
  .split("T")[0];

const StudentAddForm = ({ userInfoData }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const { data: countryData, isLoading } = useGetCountryCode();

  const { formik } = useStudentForm({
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
      spacing={0.2}
      margin="0"
      justifyContent="center"
      width="100%"
      padding="1rem"
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
      }}
    >
      <Grid item xs={12}>
        <Box sx={{display:"flex",justifyContent:'center',flexDirection:"column",alignItems:'center'}}>
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
              <div style={{ border: "1px solid rgb(140, 140, 140)" ,width:"100px",height:'100px'}}>
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
            <div style={{width:"100px",height:'100px'}}>
              <img
                src={imagePreview}
                alt="Selected Profile"
                height="100%"
                width="100%"
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

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="fullName"
              name="fullName"
              label="Full Name"
              placeholder="Enter full name of student"
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
          <Grid item xs={6}>
            <TextField
              id="gender"
              name="gender"
              select
              label="Gender"
              placeholder="Select your gender"
              fullWidth
              required
              value={formik.values.gender}
              onChange={formik.handleChange}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              helperText={formik.touched.gender && formik.errors.gender}
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
              placeholder="Enter address of student"
              fullWidth
              required
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="userType"
              name="userType"
              select
              label="User Type"
              placeholder="Select a user type"
              fullWidth
              required
              value={formik.values.userType}
              onChange={formik.handleChange}
              error={formik.touched.userType && Boolean(formik.errors.userType)}
              helperText={formik.touched.userType && formik.errors.userType}
              variant="outlined"
              onBlur={formik.handleBlur}
              size="small"
            >
              {userTypeOptions?.map((option) => (
                <MenuItem key={option?.id} value={option?.value}>
                  {option?.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="email"
              name="email"
              label="Email"
              placeholder="Enter email"
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
          <Grid item xs={6}>
            <TextField
              id="mobileNumber"
              name="mobileNumber"
              label="Mobile Number"
              placeholder="Enter mobile number"
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
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="nationality"
              name="nationality"
              label="Nationality"
              placeholder="Enter students nationality"
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
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="maritalStatus"
              name="maritalStatus"
              select
              label="Marital Status"
              placeholder="Select a marital status"
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
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="idType"
              name="idType"
              select
              label="Id type"
              placeholder="Select students id type"
              fullWidth
              required
              value={formik.values.idType}
              onChange={formik.handleChange}
              error={formik.touched.idType && Boolean(formik.errors.idType)}
              helperText={formik.touched.idType && formik.errors.idType}
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
          <Grid item xs={6}>
            <TextField
              id="idNumber"
              name="idNumber"
              label="Id Number"
              placeholder="Enter students id number"
              fullWidth
              required
              value={formik.values.idNumber}
              onChange={formik.handleChange}
              error={formik.touched.idNumber && Boolean(formik.errors.idNumber)}
              helperText={formik.touched.idNumber && formik.errors.idNumber}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
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

export default StudentAddForm;
