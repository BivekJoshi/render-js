import React from "react";
import PDFIMG from "../../../assets/pdf.webp";
import { useGetMaterial } from "../../../hooks/material/useMaterial";
import { DOC_URL } from "../../../api/axiosInterceptor";
import { Typography } from "@mui/material";

const StudyMaterial = () => {
  const { data: materialData, isLoading } = useGetMaterial();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "3rem",
      }}
    >
      {materialData?.data?.map((datas, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ height: "400px", width: "550px" }}>
              <iframe
                title="PDF Document"
                // src={`DOC_URL + datas?.filePath`}
                src={`${DOC_URL}${datas?.filePath}`}
                width="100%"
                height="100%"
              />
            </div>
            <Typography variant="h3"><b>{datas?.name}</b></Typography>
          </div>
        );
      })}
    </div>
  );
};

export default StudyMaterial;
