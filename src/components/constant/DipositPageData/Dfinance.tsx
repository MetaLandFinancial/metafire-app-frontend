// financeData.tsx   Finance data section
import f1 from "../../../../public/img/f1.svg";
import f2 from "../../../../public/img/f2.svg";
import f3 from "../../../../public/img/f3.svg";
import f4 from "../../../../public/img/f4.svg";
export interface DFinanceCard {
  imageSrc: string;
  altText: string;
  title: string;
}

const DfinanceData: DFinanceCard[] = [
  {
    imageSrc: f2,
    altText: "f2",
    title: "Industry Best Returns",
  },
  {
    imageSrc: f3,
    altText: "f3",
    title: "Deposits Backed By Assets",
  },
  {
    imageSrc: f1,
    altText: "f1",
    title: "Investing in the Digital Future",
  },
  {
    imageSrc: f4,
    altText: "f4",
    title: "Due Diligence and Safeguarding",
  },
];

export default DfinanceData;
