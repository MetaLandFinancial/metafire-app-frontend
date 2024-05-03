import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { ethers } from 'ethers';
import { useWriteContract, useAccount, useWalletClient } from "wagmi";


export default function Home() {
  const router = useRouter();
  const { address, connector, isConnected } = useAccount();
  const [signer, setSigner] = useState<ethers.Signer | null>(null);


  useEffect(() => {
    console.log("home page");
    router.push('/deposit');
    // connectWallet(signer);
    
    signMessage(signer);
  }, [router, isConnected,signer]) // Depend on router to ensure it's defined

  const signMessage = async (signer:any) => {
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
      const message = "Use MeteFire Protocol";
 
      
      const signature = await signer.signMessage(message);
    } catch (error) {
      console.error("Error initializing ethereum:", error);
    }

  }


  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
