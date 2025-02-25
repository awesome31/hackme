"use client";

import Lane from "@/components/Lane";
import { useMemo } from "react";

function Lanes(props) {
  const { lanes } = props;

  const northLanes = useMemo(() => {
    return lanes
      .filter((lane) => lane.direction === "N")
      .map((lane) => {
        return {
          status: lane.congestion_level,
          vehicleClassCode: lane.vehicle_class_code,
          imageUrl: lane.image_url,
          laneName: lane.lane.replace(/LANE/g, ""),
        };
      });
  }, [lanes]);

  const southLanes = useMemo(() => {
    return lanes
      .filter((lane) => lane.direction === "S")
      .map((lane) => ({
        status: lane.congestion_level,
        vehicleClassCode: lane.vehicle_class_code,
        imageUrl: lane.image_url,
        laneName: lane.lane.replace(/LANE/g, ""),
      }));
  }, [lanes]);

  console.log(northLanes);

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {northLanes.map((lane) => (
        <Lane
          status={lane.status}
          vehicleClassCode={lane.vehicleClassCode}
          imageUrl={lane.imageUrl}
          laneName={lane.laneName}
          direction="N"
        />
      ))}
      <div className="w-4"></div>
      {southLanes.map((lane) => (
        <Lane
          status={lane.status}
          vehicleClassCode={lane.vehicleClassCode}
          imageUrl={lane.imageUrl}
          laneName={lane.laneName}
          direction="S"
        />
      ))}
    </div>
  );
}

export default Lanes;
