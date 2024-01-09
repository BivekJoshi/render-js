import React, { useMemo, useState } from "react";
import CustomTable from "../../components/customtable/CustomTable";
import { useGetNotice } from "../../hooks/notice/useNotice";
import { Button, Grid } from "@mui/material";
import NoticeForm from "../Form/Notice/NoticeForm";

const Notice = () => {
  const { data, isLoading } = useGetNotice();
  const [openNotice, setOpenNotice] = useState(false);

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "title",
        header: "Title",
        // size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "description",
        header: "Description",
        size: 300,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "endDateTime",
        header: "End Date Time",
        // size: 100,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "redirectingUrl",
        header: "Redirecting URL",
        size: 200,
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

      {openNotice && <NoticeForm />}
      <br />
      <CustomTable
        title="Notice"
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

export default Notice;
