import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useSiteDetailForm from "../../../hooks/siteDetail/SiteDetail/useSiteDetailForm";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Img1 from "../../../assets/AboutUs1.png";

const SiteControl = () => {
  const [selectedProfile, setSelectedProfile] = useState();
  const { formik } = useSiteDetailForm({
    selectedProfile,
  });
  const handleSubmit = () => {
    formik.submitForm();
  };
  const [addAbout, setAddAbout] = useState(false);
  const [addAboutMultiple, setAddAboutMultiple] = useState(false);

  const handleClickFirst = () => {
    setAddAbout(true);
  };
  const handleClickSecond = () => {
    setAddAboutMultiple(true);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ borderBottom: "2px solid orange" }}>
          Site Detail
        </Typography>
      </Grid>
      <br />
      <Grid container spacing={3} margin="0" width="100%">
        <Grid item xs={3}>
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
        <Grid item xs={3}>
          <TextField
            id="companyName"
            name="companyName"
            label="Company Name"
            fullWidth
            value={formik.values.companyName}
            onChange={formik.handleChange}
            error={
              formik.touched.companyName && Boolean(formik.errors.companyName)
            }
            helperText={formik.touched.companyName && formik.errors.companyName}
            variant="outlined"
            size="small"
            // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="address"
            name="address"
            label="Address"
            fullWidth
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            variant="outlined"
            size="small"
            // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="contact1"
            name="contact1"
            label="Contact 1"
            fullWidth
            value={formik.values.contact1}
            onChange={formik.handleChange}
            error={formik.touched.contact1 && Boolean(formik.errors.contact1)}
            helperText={formik.touched.contact1 && formik.errors.contact1}
            variant="outlined"
            size="small"
            // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="contact2"
            name="contact2"
            label="Contact 2"
            fullWidth
            value={formik.values.contact2}
            onChange={formik.handleChange}
            error={formik.touched.contact2 && Boolean(formik.errors.contact2)}
            helperText={formik.touched.contact2 && formik.errors.contact2}
            variant="outlined"
            size="small"
            // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
          />
        </Grid>
        <Grid item xs={9}>
          <TextField
            id="quote"
            name="quote"
            label="Quote"
            fullWidth
            value={formik.values.quote}
            onChange={formik.handleChange}
            error={formik.touched.quote && Boolean(formik.errors.quote)}
            helperText={formik.touched.quote && formik.errors.quote}
            variant="outlined"
            size="small"
            // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ width: "20%" }}>
            <div style={{ width: "180px", height: "180px" }}>
              <img
                src={Img1}
                alt="AboutUs!"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Box>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {/* <TextField
              id="aboutUsTitle1"
              name="aboutUsTitle1"
              label="AboutUs Title1"
              fullWidth
              value={formik.values.aboutUsTitle1}
              onChange={formik.handleChange}
              error={
                formik.touched.aboutUsTitle1 &&
                Boolean(formik.errors.aboutUsTitle1)
              }
              helperText={
                formik.touched.aboutUsTitle1 && formik.errors.aboutUsTitle1
              }
              variant="outlined"
              size="small"
            /> */}
            <TextField
              id="aboutUsDescription1"
              name="aboutUsDescription1"
              label="AboutUs Description1"
              fullWidth
              multiline
              rows={7}
              value={formik.values.aboutUsDescription1}
              onChange={formik.handleChange}
              error={
                formik.touched.aboutUsDescription1 &&
                Boolean(formik.errors.aboutUsDescription1)
              }
              helperText={
                formik.touched.aboutUsDescription1 &&
                formik.errors.aboutUsDescription1
              }
              variant="outlined"
              size="small"
            />
          </Box>
        </Grid>
        {addAbout === true ? (
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h4" sx={{ borderBottom: "2px solid orange" }}>
              More Info About
            </Typography>
          </Grid>
        ) : (
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              onClick={handleClickFirst}
              sx={{ textTransform: "none" }}
            >
              Add more
            </Button>
          </Grid>
        )}
        {addAbout && (
          <>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", flexDirection: "row", gap: "1.5rem" }}
            >
              <Box
                sx={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <TextField
                  id="aboutUsTitle2"
                  name="aboutUsTitle2"
                  label="AboutUs Title2"
                  fullWidth
                  value={formik.values.aboutUsTitle2}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.aboutUsTitle2 &&
                    Boolean(formik.errors.aboutUsTitle2)
                  }
                  helperText={
                    formik.touched.aboutUsTitle2 && formik.errors.aboutUsTitle2
                  }
                  variant="outlined"
                  size="small"
                  // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
                />
                <TextField
                  id="aboutUsDescription2"
                  name="aboutUsDescription2"
                  label="AboutUs Description2"
                  fullWidth
                  multiline
                  rows={4}
                  value={formik.values.aboutUsDescription2}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.aboutUsDescription2 &&
                    Boolean(formik.errors.aboutUsDescription2)
                  }
                  helperText={
                    formik.touched.aboutUsDescription2 &&
                    formik.errors.aboutUsDescription2
                  }
                  variant="outlined"
                  size="small"
                  // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
                />
              </Box>
              <Box sx={{ width: "20%" }}>
                <div style={{ width: "180px", height: "180px" }}>
                  <img
                    src={Img1}
                    alt="AboutUs!"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </Box>
            </Grid>
            {addAboutMultiple === true ? (
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography
                  variant="h4"
                  sx={{ borderBottom: "2px solid orange" }}
                >
                  More Info About
                </Typography>
              </Grid>
            ) : (
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button variant="contained" onClick={handleClickSecond} sx={{textTransform:"none"}}>
                  Add more
                </Button>
              </Grid>
            )}
          </>
        )}

        {addAboutMultiple && (
          <>
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ width: "20%" }}>
                <div style={{ width: "180px", height: "180px" }}>
                  <img
                    src={Img1}
                    alt="AboutUs!"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </Box>
              <Box
                sx={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <TextField
                  id="aboutUsTitle3"
                  name="aboutUsTitle3"
                  label="AboutUs Title3"
                  fullWidth
                  value={formik.values.aboutUsTitle3}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.aboutUsTitle3 &&
                    Boolean(formik.errors.aboutUsTitle3)
                  }
                  helperText={
                    formik.touched.aboutUsTitle3 && formik.errors.aboutUsTitle3
                  }
                  variant="outlined"
                  size="small"
                  // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
                />
                <TextField
                  id="aboutUsDescription3"
                  name="aboutUsDescription3"
                  label="AboutUs Description3"
                  fullWidth
                  multiline
                  rows={4}
                  value={formik.values.aboutUsDescription3}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.aboutUsDescription3 &&
                    Boolean(formik.errors.aboutUsDescription3)
                  }
                  helperText={
                    formik.touched.aboutUsDescription3 &&
                    formik.errors.aboutUsDescription3
                  }
                  variant="outlined"
                  size="small"
                  // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
                />
              </Box>
            </Grid>
          </>
        )}

        <Grid item xs={3}>
          <TextField
            id="facebookUrl"
            name="facebookUrl"
            label="Facebook Url"
            fullWidth
            value={formik.values.facebookUrl}
            onChange={formik.handleChange}
            error={
              formik.touched.facebookUrl && Boolean(formik.errors.facebookUrl)
            }
            helperText={formik.touched.facebookUrl && formik.errors.facebookUrl}
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FacebookIcon sx={{ color: "blue" }} />
                </InputAdornment>
              ),
            }}
            // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="pinterestUrl"
            name="pinterestUrl"
            label="Pinterest Url"
            fullWidth
            value={formik.values.pinterestUrl}
            onChange={formik.handleChange}
            error={
              formik.touched.pinterestUrl && Boolean(formik.errors.pinterestUrl)
            }
            helperText={
              formik.touched.pinterestUrl && formik.errors.pinterestUrl
            }
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PinterestIcon sx={{ color: "red" }} />
                </InputAdornment>
              ),
            }}
            // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="youtubeUrl"
            name="youtubeUrl"
            label="Youtube Url"
            fullWidth
            value={formik.values.youtubeUrl}
            onChange={formik.handleChange}
            error={
              formik.touched.youtubeUrl && Boolean(formik.errors.youtubeUrl)
            }
            helperText={formik.touched.youtubeUrl && formik.errors.youtubeUrl}
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <YouTubeIcon sx={{ color: "red" }} />
                </InputAdornment>
              ),
            }}
            // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="instagramUrl"
            name="instagramUrl"
            label="Instagram Url"
            fullWidth
            value={formik.values.instagramUrl}
            onChange={formik.handleChange}
            error={
              formik.touched.instagramUrl && Boolean(formik.errors.instagramUrl)
            }
            helperText={
              formik.touched.instagramUrl && formik.errors.instagramUrl
            }
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <InstagramIcon sx={{ color: "red" }} />
                </InputAdornment>
              ),
            }}
            // InputLabelProps={{ shrink: Boolen(formik.values.title) }}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={handleSubmit} sx={{textTransform:"none"}}>
            Make Changes
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SiteControl;
