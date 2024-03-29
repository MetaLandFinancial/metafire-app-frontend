import React from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";
import arrowD from "../../../../public/img/arrowD.svg";

interface Option {
  id: number;
  name: string;
  unavailable: boolean;
}

interface CustomListboxProps {
  options: Option[];
  selectedValue: Option;
  onChange: (value: Option) => void;
}

const CustomListbox: React.FC<CustomListboxProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  if (!options || options.length === 0) {
    return null; // If options are undefined or empty, return null
  }
  return (
    <Listbox value={selectedValue} onChange={onChange}>
      <Listbox.Button className="Select_BG_Form relative flex justify-between">
        <label className="text-white/[0.8] font-bold text-base leading-normal">
          {selectedValue ? selectedValue.name : ""}
        </label>
        <span>
          <Image src={arrowD} alt="arrowdown" className={`w-6 h-6`} />
        </span>
      </Listbox.Button>
      <Listbox.Options className="Select_BG_Form Customized_inputbox transition-all mt-1">
        {options.map((option) => (
          <Listbox.Option
            key={option.id}
            value={option}
            disabled={option.unavailable}
            className="mb-1 text-white/[0.8] hover:text-white font-bold cursor-pointer"
          >
            {option.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default CustomListbox;
