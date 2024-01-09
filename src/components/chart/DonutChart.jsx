import { Grid, Typography } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = ({ dataValue, title ,subTitle}) => {
  const totalValue = 100;

  const percentage = (dataValue / totalValue) * 100;
  const remainingPercentage = 100 - percentage;

  const colors = ["#36A2EB", "rgb(201, 195, 199)"];

  const chartOptions = {
    series: [percentage, remainingPercentage],
    chart: {
      width: 240,
      type: "donut",
    },
    fill: {
      type: "gradient",
      hover: {
        opacity: 0.9,
      },
    },
    colors: colors,
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" sx={{color:'rgb(33, 150, 243)'}}>
        <b>{title}</b>
      </Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series}
          type={chartOptions.chart.type}
          width={chartOptions.chart.width}
        />
        <div>
        <Typography variant="button" display="block" gutterBottom sx={{display:"flex",justifyContent:'center'}}>
          <b>{dataValue} %</b>
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          <b>{subTitle}</b>
        </Typography>
        </div>
      </div>
    </Grid>
  );
};

export default DonutChart;
