import React, { useEffect, useState }  from "react";
import Image from "next/image";
import metricsS1 from "@/../../public/img/metricsS1.svg";
import metricsS2 from "@/../../public/img/metricsS2.svg";
import metricsS3 from "@/../../public/img/metricsS3.svg";
import metricsS4 from "@/../../public/img/metricsS4.svg";
import info from "@/../../public/img/info.svg";
import dollar from "@/../../public/img/dollar.svg";
import Link from "next/link";
const { ethers } = require("ethers")
import MToken from '../../../../contracts/mToken.json';


const StackingBlock = () => {
  const logos = [
    { l: metricsS1 },
    { l: metricsS2 },
    { l: metricsS3 },
    { l: metricsS4 },
  ];
  const MTOKEN_I_ADDRESS = process.env.NEXT_PUBLIC_MTOKEN_I_ADDRESS as string;
  const MTOKEN_II_ADDRESS = process.env.NEXT_PUBLIC_MTOKEN_II_ADDRESS as string;
  const MTOKEN_III_ADDRESS = process.env.NEXT_PUBLIC_MTOKEN_III_ADDRESS as string;
  const MTOKEN_IV_ADDRESS = process.env.NEXT_PUBLIC_MTOKEN_IV_ADDRESS as string;
  const mTokenAddresses = [ MTOKEN_I_ADDRESS, MTOKEN_II_ADDRESS, MTOKEN_III_ADDRESS, MTOKEN_IV_ADDRESS];
  const DEBT_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_DEBT_TOKEN_ADDRESS as string;

  const MAINNET_RPC_URL = process.env.NEXT_PUBLIC_MAINNET_RPC_URL as string; 

  const [Borrowvalue, setBorrowvalue] = useState<any>();
  const [Depositvalue, setDepositvalue] = useState<any>();
  // const { address, connector, isConnected } = useAccount();
  // const { data: walletClient, isError, isLoading } = useWalletClient();

  useEffect(() => {
    const initializeEthereum = async () => {
      const { ethereum } = window as any;
      if (!ethereum) {
        console.error("Ethereum object doesn't exist!");
        alert("Please install MetaMask.");
        return;
      }
    
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        // setSigner(signer);
      } catch (error) {
        console.error("Error initializing ethereum:", error);
      }
    };

    initializeEthereum();
  }, []);

  useEffect(() => {
    callWithdrawETH();
  }, []);

  const callWithdrawETH = async () => {
    console.log("Withdraw amount: ");

    try {

      const { ethers } = require("ethers")

      const provider = new ethers.JsonRpcProvider(MAINNET_RPC_URL);

      let totalDeposited = 0;
      for(let i = 0; i < mTokenAddresses.length; i++) {
        console.log("quesy toal suplly");



        const mTokenContract = new ethers.Contract(mTokenAddresses[i], MToken.abi, provider);
        const totalSupply = await mTokenContract.totalSupply();
        totalDeposited += parseFloat(ethers.formatEther(totalSupply));
      }

      const debtTokenContract = new ethers.Contract(DEBT_TOKEN_ADDRESS, MToken.abi, provider);
      const debtTokenTotalSupply = await debtTokenContract.totalSupply();
      setBorrowvalue(parseFloat(ethers.formatEther(debtTokenTotalSupply)).toFixed(2));
      console.log("Total Deposited: ", totalDeposited);
      setDepositvalue(totalDeposited.toFixed(2));


    }
    catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="relative">
      <div className="container">
        <div className={"p-6 md:p-8 lg:p-10 xl:p-12 mb-6 common_shadow_bg"}>
          <div className="flex flex-col sm:flex-row">
            <div className="w-full md:w-1/2 max-md:mb-7">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-[9px]">
                  <p className="text-white/70 text-xs md:text-sm font-medium leading-[150%]">
                    Available on
                  </p>
                  <div className="flex flex-row gap-[6px]">
                    {logos.map((data, index) => (
                      <Image
                        key={index}
                        src={data.l}
                        alt="metrics"
                        className="h-6 w-6 rounded-full"
                      />
                    ))}
                  </div>
                </div>
                <h1 className="text-white text-[40px] md:text-5xl lg:text-[52px] xl:text-[58px] font-bold leading-normal mb-4 md:mb-[18px]">
                  Metrics
                </h1>
                <p className="text-white/70 text-sm md:text-base font-normal leading-[150%] tracking-[0.15px] min-md:max-w-[550px]">
                  Stake to MetaFire and earn Safety Incentives! Stake your
                  assets holdings to contribute to protocol security and unlock
                  the rewards. Network supported: Ethereum
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white text-sm md:text-base font-normal leading-[150%] tracking-[0.15px] underline block mt-7 w-fit"
                  >
                    Learn more about risks involved
                  </Link>
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="sm:w-fit sm:ml-auto md:mr-0 lg:mr-20 xl:mr-[100px]">
                <div className="flex flex-col gap-2 md:gap-5">
                  <div>
                    <p className="flex  gap-2 text-white/70 text-sm md:text-base font-normal leading-[150%] tracking-[0.15px]">
                      Total deposited ETH
                      <Image
                        src={info}
                        alt="info"
                        className="h-[14px] w-[14px] my-auto"
                      />
                    </p>
                    <h3 className="flex items-center text-white text-2xl md:text-[28px] lg:text-3xl xl:text-[32px] font-semibold leading-[130%]">
                      <span className="text-[#A5A8B6] text-2xl md:text-[28px] lg:text-3xl xl:text-[32px] font-semibold leading-[130%]">
                        {/* <Image
                          src={dollar}
                          alt="info"
                          className="w-[24px] md:w-[28px] lg:w-[30px] xl:w-[32px] my-auto text-[#A5A8B6]"
                        /> */}
                      </span>
                      {Depositvalue}
                      <span className="text-white/70  text-xl lg:text-2xl font-medium leading-[130%] ml-2 ">
                        ETH
                      </span>
                    </h3>
                  </div>
                  <div>
                    <p className=" text-white/70 text-sm md:text-base font-normal leading-[150%] tracking-[0.15px] ">
                      Total loaned
                    </p>
                    <h3 className="flex items-center text-white text-2xl md:text-[28px] lg:text-3xl xl:text-[32px] font-semibold leading-[130%]">
                      {Borrowvalue}
                      <span className="text-white/70  text-xl lg:text-2xl font-medium leading-[130%] ml-2 ">
                        ETH
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackingBlock;
