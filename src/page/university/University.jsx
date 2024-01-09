import React, { useMemo, useState } from "react";
import { Button, Grid } from "@mui/material";
import { useGetUniversity } from "../../hooks/university/useUniversity";
import CustomTable from "../../components/customtable/CustomTable";
import UniversityForm from "../Form/University/UniversityForm";

const University = () => {
  const { data, isLoading } = useGetUniversity();
  const [openNotice, setOpenNotice] = useState(false);

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "countryCode",
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

  const handleClickButton = () => {
    setOpenNotice(true);
  };
  return (
    <>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={handleClickButton}
        >
          + Add University
        </Button>
      </Grid>

      {openNotice && <UniversityForm />}
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
    </>
  );
};

export default University;
