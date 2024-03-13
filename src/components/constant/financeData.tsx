// financeData.tsx   Finance data section
import f1 from "../../../public/img/f1.svg";
import f2 from "../../../public/img/f2.svg";
import f3 from "../../../public/img/f3.svg";
export interface FinanceCard {
  imageSrc: string;
  altText: string;
  title: string;
}

const financeData: FinanceCard[] = [
  {
    imageSrc: f1,
    altText: "f1",
    title: "Pay for your NFT Monthly",
  },
  {
    imageSrc: f2,
    altText: "f2",
    title: "Afford More and Buy More Now",
  },
  {
    imageSrc: f3,
    altText: "f3",
    title: "Dream Big NFT Expert Level Guru",
  },
];

export default financeData;
