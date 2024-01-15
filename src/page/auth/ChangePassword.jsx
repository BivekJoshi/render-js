import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Usalogo from "../../assets/Usalogin.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
import useChangePasswordForm from "../../form/auth/ChangePassword/useChangePasswordForm";

const ChangePassword = ({ data }) => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { formik } = useChangePasswordForm();

  // React.useEffect(() => {
  //   // Assuming `data.email` is the email you want to set
  //   formik.setFieldValue("email", data?.email || "");
  // }, [data?.email, formik]);
  return (
    <Grid
      container
      rowSpacing={1}
      sx={{ backgroundColor: "#fff", padding: "0" }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12} md={6}>
        {!isXsScreen ? (
          <Box sx={{ width: "100%", height: "516px" }}>
            <img
              src={Usalogo}
              alt="Login Side Logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        ) : (
          ""
        )}
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid
          container
          direction="column"
          gap="1rem"
          padding="0 5rem"
          // justifyContent="center"
          // alignItems="center"
        >
          <Typography
            variant="h4"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Change Password for {data?.fullName}
          </Typography>
          {/* <TextField
            required
            variant="outlined"
            label="Old Password"
            name="oldPassword"
            fullWidth
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            onKeyPress={(ev) => {
              if (ev.key === "Enter") {
                formik.handleSubmit();
                ev.preventDefault();
              }
            }}
            error={
              formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
            }
            helperText={formik.touched.oldPassword && formik.errors.oldPassword}
            type={showValues.showPassword ? "text" : "password"}
            sx={{ minWidth: "10vw", mt: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showValues.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            size="small"
          /> */}
          <TextField
            id="oldPassword"
            name="oldPassword"
            label="Old Password"
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
            }
            helperText={formik.touched.oldPassword && formik.errors.oldPassword}
            // InputLabelProps={{ shrink: Boolean(formik.values.countryCode) }}
            variant="outlined"
            size="small"
          />
          <TextField
            id="newPassword"
            name="newPassword"
            label="New Password"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            // InputLabelProps={{ shrink: Boolean(formik.values.countryCode) }}
            variant="outlined"
            size="small"
          />
          <LoadingButton
            // loading={loading}
            variant="contained"
            onClick={() => formik.submitForm()}
            sx={{ textTransform: "none" }}
          >
            Change Password
          </LoadingButton>
          <br />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChangePassword;
