import React, { useMemo, useState } from "react";
import CustomTable from "../../../components/customtable/CustomTable";
import { Avatar, Typography } from "@mui/material";
import { DOC_URL } from "../../../api/axiosInterceptor";
import { Link } from "react-router-dom";
import FormModal from "../../../components/modal/FormModal";
import StaffForm from "../../Form/Staff/StaffForm";

const TeamTableView = (staffData) => {
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
        accessorKey: "user.fullName",
        header: "Member Name",
        size: 250,
        sortable: false,
        Cell: ({ row }) => (
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <Avatar
              alt={row?.original?.user?.fullName}
              src={DOC_URL + row?.original?.user?.imageUrl}
            />
            <Typography variant="h6">{row.original.user.fullName}</Typography>
          </div>
        ),
      },
      {
        id: 2,
        accessorKey: "user.gender",
        header: "Gender",
        size: 130,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "user.dateOfBirth",
        header: "DOB",
        size: 130,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: "user.email",
        header: "Email",
        size: 200,
        sortable: false,
        Cell: ({ row }) => (
          <Link>
            <Typography variant="h6">{row.original.user.email}</Typography>
          </Link>
        ),
      },
      {
        id: 6,
        accessorKey: "user.mobileNumber",
        header: "Mobile Number",
        size: 150,
        sortable: false,
      },
      {
        id: 7,
        accessorKey: "position",
        header: "Position",
        size: 100,
        sortable: false,
      },
    ],
    []
  );
  return (
    <>
      <CustomTable
        title="Team"
        columns={columns}
        data={staffData?.staffData?.data}
        // state={{
        //   isLoading: isLoading,
        //   showSkeletons: isLoading,
        // }}
        // isLoading={isLoading}
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
      <FormModal
        open={isModalEditOpen}
        onClose={handleModalEditClose}
        formComponent={
          <>
            <StaffForm
              onClose={() => setIsModalEditOpen(false)}
              data={rowData}
            />
          </>
        }
      />
    </>
  );
};

export default TeamTableView;
