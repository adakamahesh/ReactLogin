import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const gData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const cData = [2400, 1398, 1800, 1908, 1800, 1800, 2300];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function SimpleBarChart() {
  return (
    <Box sx={{ width: "50%", height: 300, bgcolor: "whitesmoke" }}>
      <Typography>BarGraph</Typography>
      <BarChart
        series={[
          { data: gData, label: "Given", id: "GId", color: "orange" },
          { data: cData, label: "Collect", id: "CId", color: "green" },
        ]}
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 50 }]}
      />
    </Box>
  );
}
