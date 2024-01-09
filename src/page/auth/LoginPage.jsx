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
import { useLoginForm } from "../../form/auth/useLoginForm";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const {
    formik,
    showValues,
    loading,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = useLoginForm();

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
            Welcome
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
            required
            variant="outlined"
            label="Password"
            name="password"
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            onKeyPress={(ev) => {
              if (ev.key === "Enter") {
                formik.handleSubmit();
                ev.preventDefault();
              }
            }}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
          />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link
              to="/authRegister"
              style={{ color: "#1976D2", textDecoration: "none" }}
            >
              <Typography variant="p">Register Now!</Typography>
            </Link>
            <Link
              to="/forget-password"
              style={{ color: "#1976D2", textDecoration: "none" }}
            >
              <Typography variant="p">Forget password?</Typography>
            </Link>
          </Grid>
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={() => formik.submitForm()}
          >
            Login
          </LoadingButton>
          <br/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
