import React, { useMemo } from "react";
import CustomTable from "../../components/customtable/CustomTable";
import { useGetRegistation } from "../../hooks/registation/useRegistation";

const Registation = () => {
  const { data, isLoading } = useGetRegistation();
  const columns = useMemo(
    () => [
      {
        id: 5,
        accessorKey: "registrationDate",
        header: "Registation Date",
        // size: 100,
        sortable: false,
      },
      {
        id: 1,
        accessorKey: "fullName",
        header: "Full Name",
        // size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "email",
        header: "Email",
        size: 300,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "mobileNumber",
        header: "Mobile Number",
        // size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "appliedCountry.countryName",
        header: "Applied Country",
        // size: 100,
        sortable: false,
      },
    ],
    []
  );
  return (
    <CustomTable
      title="Applicants"
      columns={columns}
      data={data?.data?.data}
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
  );
};

export default Registation;
