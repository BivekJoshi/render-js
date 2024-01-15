import React from "react";
import PDFIMG from "../../../assets/pdf.webp";
import { useGetMaterial } from "../../../hooks/material/useMaterial";
import { DOC_URL } from "../../../api/axiosInterceptor";
import { Typography } from "@mui/material";

const StudyMaterial = () => {
  const { data: materialData, isLoading } = useGetMaterial();
  console.log(materialData?.data, "data ma nasx");


  const LIST=[
    {
        value:"sahxasnxklasx",
    },
    {
        value:"sahxasnxklasx",
    }, {
        value:"sahxasnxklasx",
    }, {
        value:"sahxasnxklasx",
    }, {
        value:"sahxasnxklasx",
    }, {
        value:"sahxasnxklasx",
    }, {
        value:"sahxasnxklasx",
    },
  ]
  return (
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"3rem"}}>
      {materialData?.data?.map((datas, index) => {
        return (
          <div key={index} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <a href={DOC_URL + datas?.filePath}>
              <div style={{ width: "250px", height: "300px" }}>
                <img
                  src={PDFIMG}
                  alt={datas?.name}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </a>
            <Typography variant="h3"><b>{datas?.name}</b></Typography>
            <br/>
          </div>
        );
      })}
    </div>
  );
};

export default StudyMaterial;
