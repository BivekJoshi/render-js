import React from "react";
import FormModal from "./FormModal";
import { Button } from "@mui/material";

const ImagePreviewModal = ({open,onClose,formComponent,title}) => {
  return (
    <FormModal
      title={title}
      open={open}
      onClose={onClose}
      formComponent={
      <>
      <Button>Close</Button>
      </>
    }
    />
  );
};

export default ImagePreviewModal;
