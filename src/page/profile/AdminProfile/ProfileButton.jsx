import { Button, Typography } from "@mui/material";
import React from "react";

const ProfileButton = ({userType}) => {
  return (
    <div>
      <Button
        className="primium-gradient-button"
        sx={{
          alignSelf: "center",
          border: "1px solid #7A757F",
          borderRadius: "8px",
          padding: "2px 10px",
          color: "black",
          gap: "9px",
          width: "fit-content",
          "&:hover": {
            bgcolor: "#E28C12",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
        >
          <path
            d="M1.62494 5.875H17.8749M1.13354 6.35195L9.24877 16.8777C9.30775 16.9546 9.38363 17.0169 9.47053 17.0598C9.55744 17.1026 9.65304 17.1249 9.74994 17.1249C9.84684 17.1249 9.94245 17.1026 10.0294 17.0598C10.1163 17.0169 10.1921 16.9546 10.2511 16.8777L18.3663 6.35195C18.4461 6.24807 18.4924 6.12235 18.4991 5.99153C18.5057 5.8607 18.4723 5.73095 18.4035 5.61953L15.6507 1.17617C15.5941 1.08422 15.5148 1.00828 15.4205 0.955567C15.3263 0.902856 15.2201 0.875122 15.1121 0.875H4.38783C4.27982 0.875122 4.17363 0.902856 4.07935 0.955567C3.98507 1.00828 3.90583 1.08422 3.84916 1.17617L1.09643 5.61953C1.02754 5.73095 0.994198 5.8607 1.00083 5.99153C1.00746 6.12235 1.05374 6.24807 1.13354 6.35195Z"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.375 1.5L13.5 5.875M13.5 5.875L9.75 0.875L6 5.875M13.5 5.875L9.75 16.5L6 5.875M4.125 1.5L6 5.875"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <Typography
          pt="2px"
          textTransform="capitalize"
          variant="h7"
          fontWeight="200"
          color="voilet"
        >
          {userType}
        </Typography>
      </Button>
    </div>
  );
};

export default ProfileButton;
