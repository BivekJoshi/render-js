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
import Icon1 from "../../assets/Icon/facebook.png";
import Icon2 from "../../assets/Icon/insta.png";
import Icon3 from "../../assets/Icon/P@.png";
import Icon4 from "../../assets/Icon/youtube.png";
import { Typography } from "@mui/material";

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
  { icon: <QrCodeScannerRoundedIcon />, name: "Follow Us on" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function SpeedDiall() {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = React.useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenFeedbackModal = () => {
    setIsFeedbackModalOpen(true);
  };

  const handleOpenShareModal = () => {
    setIsShareModalOpen(true);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
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
            action.name === "Feed back"
              ? handleOpenFeedbackModal
              : undefined || action.name === "Follow Us on"
              ? handleOpenShareModal
              : undefined || action.name === "Share"
              ? handleOpenModal
              : undefined
          }
        />
      ))}
      {isFeedbackModalOpen && (
        <FormModal
          title="Feed Back"
          open={isFeedbackModalOpen}
          onClose={() => setIsFeedbackModalOpen(false)}
          formComponent={
            <TestimonialForm onClose={() => setIsFeedbackModalOpen(false)} />
          }
        />
      )}
      {isShareModalOpen && (
        <FormModal
          title="Follow Us on"
          open={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          formComponent={
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={Icon1} alt="facebook" />
                <Typography>Facebook</Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={Icon2} alt="facebook" />
                <Typography>Instagram</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={Icon3} alt="Pi" />
                <Typography>P@</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={Icon4} alt="youtube" />
                <Typography>Youtube</Typography>
              </div>
            </div>
          }
        />
      )}
      {isModalOpen && (
        <FormModal
          title="Share with your Friends"
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          formComponent={
            <div><Typography variant="h4"><b>https://render.edu.np</b></Typography></div>
          }
        />
      )}
    </StyledSpeedDial>
  );
}
