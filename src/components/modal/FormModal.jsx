import React from "react";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FormModal = ({ open, onClose, formComponent, sx, width, title }) => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isXsScreen ? "233px" : "490px",
    bgcolor: "background.paper",
    border: "1px solid #808080",
    borderRadius: 2,
    boxShadow: 24,
    p: "12px 24px",
    height: isXsScreen ? "423px" : "cover",
    overflowY: isXsScreen?"scroll":"hidden",
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // sx={sx}
      >
        <Box sx={style}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
              position: "relative",
            }}
          >
            <Typography variant="h6">{title ?? title}</Typography>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#e0e0e0",
                position: "absolute",
                bottom: "0",
              }}
            />
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
          {formComponent}
        </Box>
      </Modal>
    </>
  );
};

export default FormModal;
