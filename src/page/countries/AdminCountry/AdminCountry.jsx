import React, { useMemo, useState } from "react";
import { Button, Grid } from "@mui/material";
import { useGetCountry } from "../../../hooks/country/useCountry";
import CustomTable from "../../../components/customtable/CustomTable";
import CountryForm from "../../Form/Country/CountryForm";

const AdminCountry = () => {
  const { data, isLoading } = useGetCountry();
  const [openNotice, setOpenNotice] = useState(false);
  console.log(data,"dta here");

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "countryCode",
        header: "Country Code",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "countryName",
        header: "Country Name",
        size: 300,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "countryDescription",
        header: "Description",
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
          + Add Notice
        </Button>
      </Grid>

      {openNotice && <CountryForm/>}
      <br />
      <CustomTable
        title="Country"
        columns={columns}
        data={data}
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

export default AdminCountry;
