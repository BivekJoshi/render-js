import React, { useMemo, useState } from "react";
import { Button, Grid } from "@mui/material";
import { useGetUniversity } from "../../hooks/university/useUniversity";
import CustomTable from "../../components/customtable/CustomTable";
import UniversityForm from "../Form/University/UniversityForm";
import FormModal from "../../components/modal/FormModal";

const University = () => {
  const { data, isLoading } = useGetUniversity();
  const [openUniversity, setOpenUniversity] = useState(false);

  const handleButtonClick = () => {
    setOpenUniversity(true);
  };

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "country.countryName",
        header: "Country",
        size: 200,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "name",
        header: "University",
        size: 300,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "url",
        header: "URL",
        size: 400,
        sortable: false,
      },
    ],
    []
  );

  return (
    <>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={handleButtonClick}
        >
          + Add University
        </Button>
      </Grid>
      <br />
      <CustomTable
        title="University"
        columns={columns}
        data={data?.data}
        state={{
          isLoading: isLoading,
          showSkeletons: isLoading,
        }}
        isLoading={isLoading}
        headerBackgroundColor="#259CE3"
        // headerColor={theme.palette.text.alt}
        // enableColumnActions
        // enableDelete
        // enableEditing={true}
        // handleDelete={deleteRow}
        // handleNotification={notificationRoute}
        // delete
        // notification
      />
      {openUniversity && (
        <FormModal
          title="Add University Detail"
          open={openUniversity}
          onClose={() => setOpenUniversity(false)}
          formComponent={
            <UniversityForm onClose={() => setOpenUniversity(false)} />
          }
        />
      )}
    </>
  );
};

export default University;
