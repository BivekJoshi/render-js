import React, { useMemo, useState } from "react";
import CustomTable from "../../components/customtable/CustomTable";
import { useGetNotice } from "../../hooks/notice/useNotice";
import { Button, Grid } from "@mui/material";
import NoticeForm from "../Form/Notice/NoticeForm";
import FormModal from "../../components/modal/FormModal";

const Notice = () => {
  const { data, isLoading } = useGetNotice();
  const [openNotice, setOpenNotice] = useState(false);

  const handleButtonClick = () => {
    setOpenNotice(true);
  };

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

  return (
    <>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={handleButtonClick}
        >
          + Add Notice
        </Button>
      </Grid>
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

      {openNotice && (
        <FormModal
          title="Add Notice Detail"
          open={openNotice}
          onClose={() => setOpenNotice(false)}
          formComponent={<NoticeForm onClose={() => setOpenNotice(false)} />}
        />
      )}
    </>
  );
};

export default Notice;
