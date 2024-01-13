import React, { useMemo, useState } from "react";
import { Avatar, Button, Grid } from "@mui/material";
import { useGetCountry } from "../../../hooks/country/useCountry";
import CustomTable from "../../../components/customtable/CustomTable";
import CountryForm from "../../Form/Country/CountryForm";
import FormModal from "../../../components/modal/FormModal";
import { DOC_URL } from "../../../api/axiosInterceptor";

const AdminCountry = () => {
  const { data, isLoading } = useGetCountry();
  const [openCountry, setOpenCountry] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [rowData, setRowData] = useState();

  const handleButtonClick = () => {
    setOpenCountry(true);
  };

  const handleModalEditClose = () => {
    setIsModalEditOpen(false);
  };

  const editRow = (row) => {
    setIsModalEditOpen(true);
    setRowData(row?.original);
  };
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "countryCode",
        header: "Country Code",
        size: 150,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "countryName",
        header: "Country Name",
        size: 200,
        sortable: false,
        Cell: (row) => (
          <div
            style={{
              fontWeight:'bold',color:"#259CE3"
            }}
          >
            {row?.row?.original?.countryName}
          </div>
        ),
      },
      {
        id: 3,
        accessorKey: "countryDescription",
        header: "Description",
        size: 420,
        sortable: false,
        Cell: (row) => (
          <div
            style={{
              whiteSpace: "normal",
              overflowWrap: "break-word",
              wordWrap: "break-word",
              wordBreak: "break-all",
            }}
          >
            {row?.row?.original?.countryDescription}
          </div>
        ),
      },
      {
        id: 4,
        accessorKey: "imagePath",
        header: "Image",
        Cell: ({ row }) => (
          <div style={{ width: "120px", height: "120px" }}>
            <img
              alt={row?.original?.countryName}
              src={DOC_URL + row?.original?.imagePath}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ),
        size: 130,
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
          + Add Country
        </Button>
      </Grid>

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
        enableRowNumbers={true}
        enableEditing={true}
        enableEdit
        edit
        handleEdit={editRow}
      />

      {openCountry && (
        <FormModal
          title="Add Country Detail"
          open={openCountry}
          onClose={() => setOpenCountry(false)}
          formComponent={<CountryForm onClose={() => setOpenCountry(false)} />}
        />
      )}
      <FormModal
        open={isModalEditOpen}
        onClose={handleModalEditClose}
        formComponent={
          <>
            <CountryForm onClose={() => setOpenCountry(false)} data={rowData} />
          </>
        }
      />
    </>
  );
};

export default AdminCountry;
