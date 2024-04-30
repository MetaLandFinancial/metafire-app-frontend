// accordion in FAQ section
export interface MetaFireItem {
  title: string;
  content: string;
}

export const metaFireData: MetaFireItem[] = [
  {
    title: "What is MetaFire?",
    content: `We are a full-service Decentralized Finance solution for all Digital Assets. We understand how to work with complicated technological innovations in Web3 and the Metaverse. We are a global community committed to fostering safe, efficient, and effective DeFi Digital Asset Financing Solutions powered by You! You have a voice in shaping the future of open and transparent NFT financing.`,
  },
  {
    title: "How does NFT Financing (BNPL) Work?",
    content: `Our Buy Now Pay Later NFT Financing solution is a revolution for opening the doors of NFT ownership to more people. MetaFire is dedicated to making efficient and effective financing for buying the NFT of your choice. We work with OpenSea APIs to ensure the NFT is listed as a top tier asset before approving a loan. This is to ensure that the NFT has liquidity and safety. You select the NFT of your choice and we do the work to check all the details to make sure we can finance the Digital Asset. You then select the time period you wish to make payments. The intertest rate is set by the Supply and Demand for each product. When the Financing application is approved; we then procure the NFT and hold it in escrow with a Smart Contract. You make the payments as agreed and after the loan is paid off the NFT is transferred to your wallet. `,
  },
  {
    title: "How Do NFT Equity Loans Work?",
    content: ` If you own an NFT digital asset which is in the top 100 collection on Opensea then you can use the value of your digital asset to take out money against it. We can loan up to 60% of the estimated NFT value. No need to sell your favorite valuable assets when you can take a loan against it and pay it back later. Simply stake your digital asset using our smart contract for a defined period. This is the length of time you will repay the equity loan. The digital asset is staked and in escrow for the period of the loan. Once payments have been made according to the contract the NFT is released and transferred back to the borrower’s wallet. `,
  },
  {
    title: "Do you only work with Ethereum Blockchain assets?",
    content: `Yes, for now we only allow financing using Ethereum. We have plans to expand to other Coins and Blockchains. Send us a note on your recommendations to: Recommendations@Metafire.Financial`,
  },
  {
    title: "How do Deposits Work?",
    content: `Deposits are an excellent way to earn interest off your Ethereum balance. We offer several options for you to earn interest by staking your balance for a specified period of time. Then select the asset class you wish to allocate your balance too. Each asset class and time period offer different interest rates you can earn. `,
  },
  {
    title: "Can I take my deposit out anytime?",
    content: `Our algorithm works to leave an average amount of Ethereum in liquidity for customers to un-stake their deposits if needed. If liquidity needs surpass the average, then as the liquidity pool health increases with capacity it will then allow you to pull your staked balance. This is done on a first request basis. This allows customers the freedom to utilize their balance if needed and keeps the DeFi Solution healthy for both Depositors and Borrowers. Warning: When customers un-stake before the contract period agreed upon is completed this will forfeit the interest earned to date on the staking. `,
  },
  {
    title: "Are there any hidden Fees?",
    content: `NO; all fees should be shown in any agreement you sign.`,
  },
  {
    title: "What are the risks?",
    content: `We take mitigating risks seriously at MetaFire Financial. We offer loans to the NFT community who need financing. The loans made may be defaulted upon by borrowers causing a loss in the deposit pool. We only make loans to borrowers who are buying a Top Tier NFT asset using proprietary data. Each Loan is collateralized by the staked NFT in escrow and if the borrow defaults on the loan the NFT will be liquidated to pay back the loan.`,
  },
];
