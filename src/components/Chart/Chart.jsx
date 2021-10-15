import React from "react";
import CharBar from "./ChartBar";
import "./Chart.css";
export default function Chart(props) {
  const dataPointValue = props.dataPoint.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        
        <CharBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
