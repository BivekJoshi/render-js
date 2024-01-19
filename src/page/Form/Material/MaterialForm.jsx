import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  styled,
} from "@mui/material";
import toast from "react-hot-toast";
import BlankImage from "../../../assets/BlankImage.jpg";
import { useGetCountryCode } from "../../../hooks/country/useCountry";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import useMaterialForm from "../../../hooks/material/Material/useMaterialForm";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { LoadingButton } from "@mui/lab";

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

const MaterialForm = ({ data, onClose }) => {
  const [selectedProfile, setSelectedProfile] = useState();
  const [selectedSymbol, setSelectedSymbol] = useState();

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [imagePreview, setImagePreview] = useState(null);
  const { data: countryData, isLoading } = useGetCountryCode();

  const { formik, loading } = useMaterialForm({
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
    <Grid
      container
      spacing={3}
      margin="0"
      width="100%"
      padding="1rem"
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
      }}
    >
      <Grid item xs={12}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            id="name"
            name="name"
            label="Study Material"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            variant="outlined"
            size="small"
          />
          <Box component="form">
            <Autocomplete
              disableCloseOnSelect
              multiple
              id="ofCountryCodes"
              options={countryData || ""}
              value={selectedSymbol || []}
              isOptionEqualToValue={(option, value) =>
                option.countryName === value.countryName
              }
              onChange={(event, newValue) => {
                if (newValue != null) {
                  const multiScript = newValue.map((d) => d.countryCode);

                  formik.setFieldValue("ofCountryCodes", multiScript);
                  setSelectedSymbol(newValue);
                }
              }}
              getOptionLabel={(option) => option.countryName}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option?.countryName}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Countries"
                  error={
                    formik.touched.ofCountryCodes &&
                    Boolean(formik.errors.ofCountryCodes)
                  }
                  helperText={
                    formik.touched.ofCountryCodes &&
                    formik.errors.ofCountryCodes
                  }
                  size="small"
                  value={formik.values.ofCountryCodes}
                  focused
                  fullWidth
                  // InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </Box>
          <Box>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              onChange={handleChangeImage}
              sx={{ textTransform: "none" }}
              fullWidth
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>
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

export default MaterialForm;
