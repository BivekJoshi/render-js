import React, { useMemo, useState } from "react";
import CustomTable from "../../components/customtable/CustomTable";
import { useGetNotice } from "../../hooks/notice/useNotice";
import { Button, Grid } from "@mui/material";
import NoticeForm from "../Form/Notice/NoticeForm";
import FormModal from "../../components/modal/FormModal";
import { DOC_URL } from "../../api/axiosInterceptor";

const Notice = () => {
  const { data, isLoading } = useGetNotice();
  const [openNotice, setOpenNotice] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [rowData, setRowData] = useState();

  const handleButtonClick = () => {
    setOpenNotice(true);
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
        accessorKey: "title",
        header: "Title",
        size: 180,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "endDateTime",
        header: "End Date Time",
        size: 150,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "description",
        header: "Description",
        size: 300,
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
            {row?.row?.original?.description}
          </div>
        ),
      },
      {
        id: 4,
        accessorKey: "redirectingUrl",
        header: "Redirecting URL",
        size: 250,
        sortable: false,
        Cell: (row) => (
          <div>
            <a
              href={row?.row?.original?.redirectingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {row?.row?.original?.redirectingUrl}
            </a>
          </div>
        ),
      },
      {
        id: 5,
        accessorKey: "imagePath",
        header: "Image",
        Cell: ({ row }) => (
          <div style={{ width: "120px", height: "120px" }}>
            <img
              alt={row?.original?.title}
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

      {openNotice && (
        <FormModal
          title="Add Notice Detail"
          open={openNotice}
          onClose={() => setOpenNotice(false)}
          formComponent={<NoticeForm onClose={() => setOpenNotice(false)} />}
        />
      )}
      <FormModal
        open={isModalEditOpen}
        title="Edit Notice Detail"
        onClose={handleModalEditClose}
        formComponent={
          <>
            <NoticeForm onClose={() => setIsModalEditOpen(false)} data={rowData} />
          </>
        }
      />
    </>
  );
};

export default Notice;
