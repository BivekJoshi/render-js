import React, { useMemo, useState } from "react";
import { useGetMaterial } from "../../hooks/material/useMaterial";
import CustomTable from "../../components/customtable/CustomTable";
import { Button, Grid, Typography } from "@mui/material";
import MaterialForm from "../Form/Material/MaterialForm";
import { DOC_URL } from "../../api/axiosInterceptor";
import FormModal from "../../components/modal/FormModal";

const Material = () => {
  const { data, isLoading } = useGetMaterial();
  const [openAddModal, setOpenAddModal] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [rowData, setRowData] = useState();
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
        accessorKey: "name",
        header: "File Name",
        size: 150,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "fileType",
        header: "File Type",
        size: 200,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "filePath",
        header: "filePath",
        size: 650,
        sortable: false,
        Cell: ({ row }) => (
          <Typography variant="h6">
            <a href={DOC_URL + row?.original?.filePath}>
              {DOC_URL}
              {row?.original?.filePath}
            </a>
          </Typography>
        ),
      },
    ],
    []
  );

  const handleClickButton = () => {
    setOpenAddModal(true);
  };
  return (
    <>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={handleClickButton}
        >
          + Add Material
        </Button>
      </Grid>
      <br />
      <CustomTable
        title="Study Material"
        columns={columns}
        data={data?.data}
        state={{
          isLoading: isLoading,
          showSkeletons: isLoading,
        }}
        isLoading={isLoading}
        headerBackgroundColor="#259CE3"
        enableRowNumbers={true}
        enableEditing={true}
        enableEdit
        edit
        handleEdit={editRow}
      />
      {openAddModal && (
        <FormModal
          title="Add Study Material"
          open={openAddModal}
          onClose={() => setOpenAddModal(false)}
          formComponent={
            <MaterialForm onClose={() => setOpenAddModal(false)} />
          }
        />
      )}
      <FormModal
        open={isModalEditOpen}
        title="Edit Study Material"
        onClose={handleModalEditClose}
        formComponent={
          <>
            <MaterialForm onClose={() => setIsModalEditOpen(false)} data={rowData} />
          </>
        }
      />
    </>
  );
};

export default Material;
