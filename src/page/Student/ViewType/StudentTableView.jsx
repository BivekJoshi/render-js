import React, { useMemo, useState } from "react";
import CustomTable from "../../../components/customtable/CustomTable";

const StudentTableView = (studentData) => {
  console.log(studentData?.studentData?.data?.data, "studentData");

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "user.fullName",
        header: "Student",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "user.gender",
        header: "Gender",
        size: 100,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "user.dateOfBirth",
        header: "DOB",
        size: 100,
        sortable: false,
      },

      {
        id: 4,
        accessorKey: "appliedCountryCode.countryName",
        header: "Applied For",
        size: 100,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: "user.email",
        header: "Email",
        size: 200,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: "user.mobileNumber",
        header: "Mobile Number",
        size: 100,
        sortable: false,
      },
    ],
    []
  );
  return (
    <>
      <CustomTable
        title="Students"
        columns={columns}
        data={studentData?.studentData?.data?.data}
        // state={{
        //   isLoading: isLoading,
        //   showSkeletons: isLoading,
        // }}
        // isLoading={isLoading}
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

export default StudentTableView;
