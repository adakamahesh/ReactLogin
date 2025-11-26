import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieChartWithCustomLegendAndTooltip() {
  return (
    <Box sx={{ width: "50%", height: 300, bgcolor: "whitesmoke" }}>
      <Typography>Pichart</Typography>
      <PieChart
        series={[
          {
            data: [
              {
                value: 15,
                label: "given",
                labelMarkType: "circle",
                color: "orange",
              },
              {
                value: 10,
                label: "Collect",
                labelMarkType: "circle",
                color: "green",
              },
            ],
          },
        ]}
        width={200}
        height={300}
      />
    </Box>
  );
}
