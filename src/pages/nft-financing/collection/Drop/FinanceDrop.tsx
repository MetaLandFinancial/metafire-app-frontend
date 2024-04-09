import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";
import arrowD from "../../../../../public/img/arrowD.svg";

interface Option {
  id: number;
  name: string;
  unavailable: boolean;
}

interface FinanceDropProps {
  options: Option[];
  selectedValue: Option;
  onChange: (value: Option) => void;
}

const FinanceDrop: React.FC<FinanceDropProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!options || options.length === 0) {
    return null; // If options are undefined or empty, return null
  }

  return (
    <Listbox value={selectedValue} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Button
            className="FinanceDrop_BG w-full relative flex justify-between items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <label className="text-white/[0.8] font-semibold text-base leading-normal">
              {selectedValue ? selectedValue.name : ""}
            </label>
            <span className={`${open ? "transform rotate-180" : ""}`}>
              <Image src={arrowD} alt="arrowdown" className={`w-4 h-4`} />
            </span>
          </Listbox.Button>
          {open && (
            <Listbox.Options className="FinanceDrop_BG Customized_inputbox transition-all mt-1">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  value={option}
                  disabled={option.unavailable}
                  className="mb-1 text-white/[0.8] hover:text-white text-base font-semibold cursor-pointer"
                >
                  {option.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          )}
        </>
      )}
    </Listbox>
  );
};

export default FinanceDrop;
