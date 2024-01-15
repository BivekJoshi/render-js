import * as React from "react";
import { styled } from "@mui/material/styles";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";

import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";
import FormModal from "../modal/FormModal";
import TestimonialForm from "../../page/Form/Testimonial/TestimonialForm";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "fixed",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FeedbackRoundedIcon />, name: "Feed back" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <QrCodeScannerRoundedIcon />, name: "Follow Us on" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function SpeedDiall() {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = React.useState(false);

  const handleOpenFeedbackModal = () => {
    setIsFeedbackModalOpen(true);
  };

  return (
    <StyledSpeedDial
      ariaLabel="SpeedDial playground example"
      icon={<ThumbUpOffAltRoundedIcon />}
      sx={{
        textTransform: "none",
        animation: "hoverAnimation 0.5s infinite",
        "@keyframes hoverAnimation": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "&:hover": {
          animation: "none",
        },
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={
            action.name === "Feed back" ? handleOpenFeedbackModal : undefined
          }
        />
      ))}
      {isFeedbackModalOpen && (
        <FormModal
          title="Feed Back"
          open={isFeedbackModalOpen}
          onClose={() => setIsFeedbackModalOpen(false)}
          formComponent={
            <TestimonialForm onClose={()=>setIsFeedbackModalOpen(false)}/>
          }
        />
      )}
    </StyledSpeedDial>
  );
}
