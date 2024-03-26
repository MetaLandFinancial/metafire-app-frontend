import { useState } from "react";
import CustomListbox from "./Form/CustomListbox ";
import Connect from "./Form/ConnectBtn";
import StakeBtn from "./Form/StakeBtn";
const DForm: React.FC = () => {
  const people = [
    { id: 1, name: "5 Stars", unavailable: false },
    { id: 2, name: "4 Stars", unavailable: false },
    { id: 3, name: "3 Stars", unavailable: false },
    { id: 4, name: "2 Stars", unavailable: true },
    { id: 5, name: "1 Stars", unavailable: false },
  ];
  const depositPeriodOptions = [
    { id: 1, name: "Anytime", unavailable: false },
    { id: 2, name: "120 Days", unavailable: false },
    { id: 3, name: "210 Days", unavailable: false },
    { id: 4, name: "300 Days", unavailable: true }
  ];
  const stakeOptions = [
    { id: 1, name: "ETH", unavailable: false },
    // { id: 2, name: "ETH", unavailable: false },
    // { id: 3, name: "ETH", unavailable: false },
    // { id: 4, name: "ETH", unavailable: true },
    // { id: 5, name: "ETH", unavailable: false },
  ];
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [selectedDepositPeriod, setSelectedDepositPeriod] = useState(depositPeriodOptions[0]);
  const [selectedStake, setSelectedStake] = useState(stakeOptions[0]);
  return (
    <>
      <div className="relative my-0 md:my-28">
        <div className="md:container">
          <div className="Form_BG">
            <div className="w-full max-w-[801px] mx-auto flex flex-col gap-12">
              {/* _________ Form / input _________ */}
              <div className="FOrm_G_1">
                <p className="text-white text-[27px] font-bold text-center md:text-start mb-[31px]">
                  1. Choose Your Deposit Selection
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="mb-4 text-white/[0.8]">
                      1. Choose Your Deposit Selection
                    </label>
                    <div className="relative">
                      <CustomListbox
                        options={people}
                        selectedValue={selectedPerson}
                        onChange={setSelectedPerson}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-4 text-white/[0.8]">
                      Select Deposit Time Period
                    </label>
                    <div className="relative">
                      <CustomListbox
                        options={depositPeriodOptions}
                        selectedValue={selectedDepositPeriod}
                        onChange={setSelectedDepositPeriod}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* _________ Form / input _________ */}
              <div className="FOrm_G_2">
                <p className="text-white text-[27px] font-bold text-center md:text-start mb-[31px]">
                  2. Supply Your Deposit Amount
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="mb-4 text-white/[0.8]">
                      Select Crypto type
                    </label>
                    <div className="relative">
                      <CustomListbox
                        options={stakeOptions}
                        selectedValue={selectedStake}
                        onChange={setSelectedStake}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="mb-4 flex justify-between">
                      <label className="text-white/[0.8]">Enter amount</label>
                      {/* <label className="text-white/[0.8]">Balance: 0.00 </label> */}
                    </div>
                    <div>
                      <input
                        type="text"
                        className="Select_BG_Form Text_gradient"
                        placeholder="0.05"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* _________ buttons ___________ */}
              <div className="flex flex-col items-center md:items-start">
                <p className="text-white text-[27px] font-bold mb-[31px]">
                  wallet balance
                </p>
                <Connect />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-white text-[27px] font-bold mb-[31px]">
                  3. Stake My Deposit
                </p>
                <StakeBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DForm;
