import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Tab } from "@mui/material";
import React, { useState } from "react";
import StudentGridView from "./ViewType/StudentGridView";
import StudentTableView from "./ViewType/StudentTableView";
import { useGetStudent } from "../../hooks/student/useStudent";
import StudentAddForm from "../StudentAdd/StudentAddForm";
import FormModal from "../../components/modal/FormModal";
const labelStyle = {
  backgroundColor: "#EBEDEF",
  marginLeft: ".5rem",
  textTransform: "none",
  borderRadius: ".5rem",
  color: "black",
  textDecoder: "none",
};
const activeLabelStyle = {
  ...labelStyle,
  backgroundColor: "#329EF4",
  borderBottom: "none",
  textDecoder: "none",
};

const Student = () => {
  const [value, setValue] = useState("1");
  const [openStudentModal, setOpenStudentModal] = useState(false);

  const handleButtonClick = () => {
    setOpenStudentModal(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { data: studentData, isLoading } = useGetStudent();

  return (
    <TabContext value={value}>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            indicatorColor="none"
          >
            <Tab
              label="Grid View"
              value="1"
              style={value === "1" ? activeLabelStyle : labelStyle}
            />
            <Tab
              label="Table View"
              value="2"
              style={value === "2" ? activeLabelStyle : labelStyle}
            />
          </TabList>
          <Box sx={{ display: "flex", gap: "12px" }}>
            <Button
              variant="contained"
              onClick={handleButtonClick}
              sx={{ textTransform: "none", color: "#fff" }}
            >
              + Add Student
            </Button>
          </Box>
        </Box>
        <TabPanel value="1">
          <StudentGridView studentData={studentData} />
        </TabPanel>
        <TabPanel value="2">
          <StudentTableView studentData={studentData} />
        </TabPanel>
      </Box>
      {openStudentModal && (
        <FormModal
          title="Add Student Detail"
          open={openStudentModal}
          onClose={() => setOpenStudentModal(false)}
          formComponent={
            <StudentAddForm onClose={() => setOpenStudentModal(false)} />
          }
        />
      )}
    </TabContext>
  );
};

export default Student;
