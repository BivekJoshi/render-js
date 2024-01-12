import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Tab } from "@mui/material";
import React, { useState } from "react";
import Team from "../Team";
import StaffForm from "../../Form/Staff/StaffForm";
import FormModal from "../../../components/modal/FormModal";
import TeamTableView from "./TeamTableView";
import { useGetStaff } from "../../../hooks/staff/useStaff";

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

const AdminTeam = () => {
  const [value, setValue] = useState("1");
  const [openStaffModal, setOpenStaffModal] = useState(false);
  const { data: staffData, isLoading } = useGetStaff();

  const handleButtonClick = () => {
    setOpenStaffModal(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              + Add Staff
            </Button>
          </Box>
        </Box>
        <TabPanel value="1">
          <Team />
        </TabPanel>
        <TabPanel value="2">
          <TeamTableView staffData={staffData}/>
        </TabPanel>
      </Box>
      {openStaffModal && (
        <FormModal
          title="Add Team Detail"
          open={openStaffModal}
          onClose={() => setOpenStaffModal(false)}
          formComponent={<StaffForm onClose={() => setOpenStaffModal(false)} />}
        />
      )}
    </TabContext>
  );
};

export default AdminTeam;
