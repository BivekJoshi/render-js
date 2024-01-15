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
import { useLoginForm } from "../../form/auth/useLoginForm";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
import useResetPasswordForm from "../../form/auth/ResetPassword/useResetPasswordForm";
import { useState } from "react";

const currentDate = new Date();
const minAge = new Date(
  currentDate.getFullYear() - 18,
  currentDate.getMonth(),
  currentDate.getDate()
)
  .toISOString()
  .split("T")[0];

const ResetPassword = () => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { formik } = useResetPasswordForm();

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
            Change Password
          </Typography>
          <TextField
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            name="email"
            label="E-mail"
            fullWidth
            variant="outlined"
            type="text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
            size="small"
          />
          <TextField
            id="oldPassword"
            name="oldPassword"
            label="Old Password"
            fullWidth
            required
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.oldPassword &&
              Boolean(formik.errors.oldPassword)
            }
            helperText={
              formik.touched.oldPassword && formik.errors.oldPassword
            }
            variant="outlined"
            size="small"
            type={showOldPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip
                    title={`Show ${
                      showOldPassword ? "Hidden" : "Visible"
                    } Confirm Password`}
                  >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowOldPassword(!showOldPassword)
                      }
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
            fullWidth
            required
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.newPassword &&
              Boolean(formik.errors.newPassword)
            }
            helperText={
              formik.touched.newPassword && formik.errors.newPassword
            }
            variant="outlined"
            size="small"
            type={showNewPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip
                    title={`Show ${
                      showNewPassword ? "Hidden" : "Visible"
                    } Confirm Password`}
                  >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowNewPassword(!showNewPassword)
                      }
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
            size="small"
            type={showConfirmPassword ? "text" : "password"}
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
          <TextField
            required
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            error={
              formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
            }
            helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
            name="dateOfBirth"
            label="Date of Birth"
            fullWidth
            variant="outlined"
            size="small"
            type="date"
            InputLabelProps={{ shrink: true }}
            inputProps={{ max: minAge }}
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

export default ResetPassword;
