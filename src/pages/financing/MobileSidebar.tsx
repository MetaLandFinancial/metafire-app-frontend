import { Fragment, useState } from "react";
import Image from "next/image";
import close1 from "../../../public/img/close1.svg";
import React, { useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import FinanceDrop from "./Drop/FinanceDrop";
interface SidebarProps {
  IsOpen: boolean;
  closeModal: () => void;
}
const MobileSidebar: React.FC<SidebarProps> = ({ IsOpen, closeModal }) => {
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
    { id: 1, name: "Sody", unavailable: false },
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
      <Transition appear show={IsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="container">
                  <div className="Sidebar_BG_Mobile relative">
                    <div
                      className="absolute top-5 right-[30px] text-white"
                      onClick={closeModal}
                    >
                      <Image
                        src={close1}
                        alt="close"
                        className="text-white"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="status mb-6">
                      <h2 className="text-white text-left lg:text-center text-base mb-4">
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
                      <h2 className="text-white text-left lg:text-center text-base mb-4">
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
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileSidebar;