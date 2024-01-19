import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import React from "react";
import useTestimonialForm from "../../../hooks/testimonial/Testimonial/useTestimonialForm";
import { useGetUniversity } from "../../../hooks/university/useUniversity";
import RemarkField from "../../../components/form/RemarkField";

const TestimonialForm = ({ onClose }) => {
  const { formik } = useTestimonialForm({onClose});
  const { data: universityData, isLoading } = useGetUniversity();

  const handleFormSubmit = () => {
    formik.handleSubmit();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Autocomplete
          id="universityId"
          name="universityId"
          options={universityData?.data || []}
          getOptionLabel={(option) => option?.name || ""}
          value={universityData?.data?.find(
            (uId) => uId?.id === formik.values.uId || ""
          )}
          onChange={(event, newValue) => {
            formik.setFieldValue("universityId", newValue?.id || "");
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="University"
              placeholder="Select university"
              fullWidth
              required
              error={
                formik.touched.universityId &&
                Boolean(formik.errors.universityId)
              }
              helperText={
                formik.touched.universityId && formik.errors.universityId
              }
              size="small"
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          id="scholarship"
          name="scholarship"
          label="Scolarship"
          placeholder="Enter your scolarship amount"
          fullWidth
          required
          value={formik.values.scholarship}
          onChange={formik.handleChange}
          error={
            formik.touched.scholarship && Boolean(formik.errors.scholarship)
          }
          helperText={formik.touched.scholarship && formik.errors.scholarship}
          variant="outlined"
          size="small"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          id="visaDate"
          name="visaDate"
          label="Visa Date"
          type="date"
          fullWidth
          required
          value={formik.values.visaDate}
          onChange={formik.handleChange}
          error={formik.touched.visaDate && Boolean(formik.errors.visaDate)}
          helperText={formik.touched.visaDate && formik.errors.visaDate}
          variant="outlined"
          size="small"
          InputLabelProps={{shrink: true}}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <RemarkField
          id="description"
          name="description"
          label="Feed Back"
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
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button
          variant="contained"
          onClick={handleFormSubmit}
          sx={{ mt: 3, ml: 1, textTransform: "none" }}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{ mt: 3, ml: 1, textTransform: "none" }}
          color="error"
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default TestimonialForm;
