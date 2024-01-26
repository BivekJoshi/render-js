import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
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
import { getUser } from "../../utility/cookieHelper";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

const ChangePassword = ({ data }) => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const token = getUser();
  const decoded = jwtDecode(token);
  const userEmail = decoded?.sub;
  const { formik } = useChangePasswordForm({ userEmail });
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          <TextField
            id="oldPassword"
            name="oldPassword"
            label="Old Password"
            placeholder="Enter your old password"
            fullWidth
            required
            value={formik.values.oldPassword}
            onChange={(e) => {
              formik.handleChange(e);
            }}
            error={
              formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
            }
            helperText={formik.touched.oldPassword && formik.errors.oldPassword}
            variant="outlined"
            type={showOldPassword ? "text" : "password"}
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip
                    title={`Show ${
                      showOldPassword ? "Hidden" : "Visible"
                    } Old Password`}
                  >
                    <IconButton
                      aria-label="toggle old password visibility"
                      onClick={() => setShowOldPassword(!showOldPassword)}
                      edge="end"
                    >
                      {showOldPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
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
            variant="outlined"
            type={showNewPassword ? "text" : "password"}
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip
                    title={`Show ${
                      showNewPassword ? "Hidden" : "Visible"
                    } New Password`}
                  >
                    <IconButton
                      aria-label="toggle old password visibility"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      edge="end"
                    >
                      {showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm New Password"
            placeholder="Confirm your new password"
            fullWidth
            required
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            variant="outlined"
            type={showConfirmPassword ? "text" : "password"}
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip
                    title={`Show ${
                      showConfirmPassword ? "Hidden" : "Visible"
                    } Confirm Password`}
                  >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
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
