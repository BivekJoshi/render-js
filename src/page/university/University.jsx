import React, { useMemo, useState } from "react";
import { Button, Grid } from "@mui/material";
import { useGetUniversity } from "../../hooks/university/useUniversity";
import CustomTable from "../../components/customtable/CustomTable";
import UniversityForm from "../Form/University/UniversityForm";
import FormModal from "../../components/modal/FormModal";
import { DOC_URL } from "../../api/axiosInterceptor";

const University = () => {
  const { data, isLoading } = useGetUniversity();
  const [openUniversity, setOpenUniversity] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [rowData, setRowData] = useState();

  const handleButtonClick = () => {
    setOpenUniversity(true);
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
        Cell: (row) => (
          <div>
            <a
              href={row?.row?.original?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {row?.row?.original?.url}
            </a>
          </div>
        ),
      },
      {
        id: 4,
        accessorKey: "logoPath",
        header: "Image",
        Cell: ({ row }) => (
          <div style={{ width: "120px", height: "120px" }}>
            <img
              alt={row?.original?.name}
              src={DOC_URL + row?.original?.logoPath}
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
        enableRowNumbers={true}
        // headerColor={theme.palette.text.alt}
        // enableColumnActions
        // enableDelete
        // enableEditing={true}
        // handleDelete={deleteRow}
        // handleNotification={notificationRoute}
        // delete
        // notification
        enableEditing={true}
        enableEdit
        edit
        handleEdit={editRow}
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
      <FormModal
        open={isModalEditOpen}
        onClose={handleModalEditClose}
        formComponent={
          <>
            <UniversityForm onClose={() => setIsModalEditOpen(false)} data={rowData} />
          </>
        }
      />
    </>
  );
};

export default University;
