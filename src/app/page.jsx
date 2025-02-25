"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Lanes from "@/components/Lanes";
import Image from "next/image";
import { apiRes } from "./response";

function Home() {
  const [selectedTime, setSelectedTime] = useState("17:00");
  const [selectedBooth, setSelectedBooth] = useState(
    "Bannerghatta Road (P2) Plaza"
  );
  const [lanes, setLanes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedBooth && selectedTime) {
      setLoading(true);

      setTimeout(() => {
        //Generate random ID between 1 to 10,
        const id = Math.floor(Math.random() * 4) + 1;

        setLanes(apiRes[id]);

        setLoading(false);
      }, 2000);
    }
  }, [selectedBooth, selectedTime]);

  const onChangeSelectTime = (event) => {
    setSelectedTime(event.target.value);
  };

  const onChangeSelectBooth = (event) => {
    setSelectedBooth(event.target.value);
  };

  if (loading) {
    return (
      <div className="h-screen w-screen bg-white flex flex-col justify-center items-center">
        <div className="text-bold text-3xl text-black">
          Predicting Toll Traffic...
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      <Header />

      <div className="flex flex-row items-center justify-between">
        <div>
          <div className="p-6 px-8 flex">
            <label htmlFor="cars" className="text-base text-black font-bold">
              Choose a booth:
            </label>

            <select
              name="cars"
              id="cars"
              className="text-base text-black"
              onChange={onChangeSelectBooth}
            >
              <option
                value="Bannerghatta Road (P2) Plaza"
                className="text-base text-black font-bold"
                selected
              >
                Bannerghatta Road (P2) Plaza
              </option>
              <option
                value="Kadathanamale Toll Plaza"
                className="text-base text-black font-bold"
              >
                Kadathanamale Toll Plaza
              </option>
              <option
                value="Kanakapura Road (P3) Plaza"
                className="text-base text-black font-bold"
              >
                Kanakapura Road (P3) Plaza
              </option>
              <option
                value="ELECTRONIC CITY Phase 1"
                className="text-base text-black font-bold"
              >
                ELECTRONIC CITY Phase 1
              </option>
              <option
                value="Tumkur Road (P7) Toll"
                className="text-base text-black font-bold"
              >
                Tumkur Road (P7) Toll
              </option>
              <option
                value="Magadi Road (P6) Plaza"
                className="text-base text-black font-bold"
              >
                Magadi Road (P6) Plaza
              </option>
              <option
                value="Kulumapalya toll plaza"
                className="text-base text-black font-bold"
              >
                Kulumapalya toll plaza
              </option>
              <option
                value="Hosur Road (P1) Toll"
                className="text-base text-black font-bold"
              >
                Hosur Road (P1) Toll
              </option>
              <option
                value="Laxamannath Plaza"
                className="text-base text-black font-bold"
              >
                Laxamannath Plaza
              </option>
              <option
                value="Banglaore-Nelamangala Plaza"
                className="text-base text-black font-bold"
              >
                Banglaore-Nelamangala Plaza
              </option>
              <option
                value="Mysore Road (P5) Plaza"
                className="text-base text-black font-bold"
              >
                Mysore Road (P5) Plaza
              </option>
              <option
                value="Link Road (L1) Toll"
                className="text-base text-black font-bold"
              >
                Link Road (L1) Toll
              </option>
              <option
                value="ATTIBELLE"
                className="text-base text-black font-bold"
              >
                ATTIBELLE
              </option>
              <option
                value="Nelamangala Toll Plaza"
                className="text-base text-black font-bold"
              >
                Nelamangala Toll Plaza
              </option>
              <option
                value="Devanahalli Toll Plaza"
                className="text-base text-black font-bold"
              >
                Devanahalli Toll Plaza
              </option>
              <option
                value="Hoskote Toll Plaza"
                className="text-base text-black font-bold"
              >
                Hoskote Toll Plaza
              </option>
              <option
                value="Kaniminike Toll Plaza"
                className="text-base text-black font-bold"
              >
                Kaniminike Toll Plaza
              </option>
            </select>
          </div>
          <div className="px-8 flex">
            <div className="flex flex-col">
              <div className="text-base text-black font-bold">Select Date</div>
              <div className="h-2" />
              <input
                type="date"
                value={"2024-02-26"}
                className="border rounded p-2 w-[250px] text-gray-500"
                readOnly
              />
              <div className="h-4" />
              <div className="text-base text-black font-bold">Select Time</div>
              <div className="h-2" />
              <input
                type="time"
                value={selectedTime}
                onChange={onChangeSelectTime}
                className="border rounded p-2 w-[250px] text-black"
              />
            </div>
          </div>
        </div>
        <Image
          src="/label.png"
          alt="footer"
          width={200}
          height={200}
          className="w-[400px] h-[200px]"
        />
      </div>

      <div className="flex-1 p-6 px-8 flex flex-col justify-center items-center">
        <Lanes lanes={lanes} />
      </div>
      <div></div>
    </div>
  );
}

export default Home;
