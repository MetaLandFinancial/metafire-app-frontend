import React, { useEffect, useState } from "react";
import FinanceDrop from "./Drop/FinanceDrop";

const Sidebar = () => {
  const properties = [
    { id: 1, name: "Background", unavailable: false },
    { id: 2, name: "Color", unavailable: false },
    { id: 3, name: "font", unavailable: false },
    { id: 4, name: "text", unavailable: false },
    { id: 5, name: "1 Stars", unavailable: false },
  ];
  const skin1 = [
    { id: 1, name: "Skin", unavailable: false },
    { id: 2, name: "Color", unavailable: false },
    { id: 3, name: "font", unavailable: false },
    { id: 4, name: "text", unavailable: false },
    { id: 5, name: "1 Stars", unavailable: false },
  ];
  const body1 = [
    { id: 1, name: "Body", unavailable: false },
    { id: 2, name: "Color", unavailable: false },
    { id: 3, name: "font", unavailable: false },
    { id: 4, name: "text", unavailable: false },
    { id: 5, name: "1 Stars", unavailable: false },
  ];
  const face1 = [
    { id: 1, name: "Face", unavailable: false },
    { id: 2, name: "Color", unavailable: false },
    { id: 3, name: "font", unavailable: false },
    { id: 4, name: "text", unavailable: false },
    { id: 5, name: "1 Stars", unavailable: false },
  ];
  const head1 = [
    { id: 1, name: "Head", unavailable: false },
    { id: 2, name: "Color", unavailable: false },
    { id: 3, name: "font", unavailable: false },
    { id: 4, name: "text", unavailable: false },
    { id: 5, name: "1 Stars", unavailable: false },
  ];

  const [selectedPerson, setSelectedPerson] = useState(properties[0]);
  const [skin, setSkin] = useState(skin1[0]);
  const [body, setBody] = useState(body1[0]);
  const [face, setFace] = useState(face1[0]);
  const [head, setHead] = useState(head1[0]);

  return (
    <>
      <div className="hidden lg:block relative basis">
        <div className="Sidebar_BG">
          <div className="status mb-6">
            <h2 className="text-white text-left lg:text-center font-semibold text-base mb-4">
              Status
            </h2>
            <div className="grid grid-cols-2 gap-3 place-items-center place-content-center">
              <button className="Status_Btn_Bg ">All</button>
              <button className="Status_Btn_Bg ">Listed</button>
              <button className="Status_Btn_Bg ">On auction</button>
              <button className="Status_Btn_Bg ">New</button>
              <button className="Status_Btn_Bg ">Has offer</button>
            </div>
          </div>
          <div className="filter">
            <h2 className="text-white text-left lg:text-center font-semibold text-base mb-4">
              Filters
            </h2>
            <div className="mt-[13px]">
              <FinanceDrop
                options={properties}
                selectedValue={selectedPerson}
                onChange={setSelectedPerson}
              />
            </div>
            <div className="mt-[13px]">
              <FinanceDrop
                options={skin1}
                selectedValue={skin}
                onChange={setSkin}
              />
            </div>
            <div className="mt-[13px]">
              <FinanceDrop
                options={body1}
                selectedValue={body}
                onChange={setBody}
              />
            </div>
            <div className="mt-[13px]">
              <FinanceDrop
                options={face1}
                selectedValue={face}
                onChange={setFace}
              />
            </div>
            <div className="mt-[13px]">
              <FinanceDrop
                options={head1}
                selectedValue={head}
                onChange={setHead}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
