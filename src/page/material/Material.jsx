import React, { useMemo, useState } from 'react';
import { useGetMaterial } from '../../hooks/material/useMaterial';
import CustomTable from '../../components/customtable/CustomTable';
import { Button, Grid } from '@mui/material';
import MaterialForm from '../Form/Material/MaterialForm';

const Material = () => {
  const { data, isLoading } = useGetMaterial();
  const [openNotice, setOpenNotice] = useState(false);

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "name",
        header: "File Name",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "fileType",
        header: "File Type",
        size: 300,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "filePath",
        header: "filePath",
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
          + Add Material
        </Button>
      </Grid>

      {openNotice && <MaterialForm/>}
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
}

export default Material;
