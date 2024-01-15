import React, { useMemo } from "react";
import { useGetTestimonial } from "../../hooks/testimonial/useTestimonial";
import CustomTable from "../../components/customtable/CustomTable";
import { DOC_URL } from "../../api/axiosInterceptor";
import { Avatar, Typography } from "@mui/material";

const AdminTestimonial = () => {
  const { data: testimonialData, isLoading } = useGetTestimonial();
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "student.user.fullName",
        header: "Student",
        size: 200,
        sortable: false,
        Cell: ({ row }) => (
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <Avatar
              alt={row?.original?.student?.user?.fullName}
              src={DOC_URL + row?.original?.student?.user?.imageUrl}
            />
            <Typography variant="h6">
              {row?.original?.student?.user?.fullName}
            </Typography>
          </div>
        ),
      },
      {
        id: 2,
        accessorKey: "university.name",
        header: "University",
        size: 150,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "university.country.countryName",
        header: "Country",
        size: 150,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "scholarship",
        header: "Scholorship",
        size: 150,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: "description",
        header: "Message",
        size: 300,
        sortable: false,
      },
    ],
    []
  );

  return (
    <>
      <CustomTable
        title="Testimonial"
        columns={columns}
        data={testimonialData}
        state={{
          isLoading: isLoading,
          showSkeletons: isLoading,
        }}
        isLoading={isLoading}
        headerBackgroundColor="#259CE3"
        enableRowNumbers={true}
      />
    </>
  );
};

export default AdminTestimonial;
