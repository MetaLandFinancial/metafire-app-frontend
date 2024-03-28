import socialOne from "@/../public/assets/social1.svg"
import socialTwo from "@/../public/assets/social2.svg"
import socialThree from "@/../public/assets/social3.svg"
import socialFour from "@/../public/assets/social4.svg"
import socialFive from "@/../public/assets/social5.svg"

import swOne from "@/../public/assets/tele_white.svg"

import swTwo from "@/../public/assets/twitter_white.svg"

import swThree from "@/../public/assets/youtube_white.svg"

import swFour from "@/../public/assets/discord_white.svg"

import swFive from "@/../public/assets/website_white.svg"
import collectionImgOne from "@/../public/assets/collectionImgOne.png";
import collectionImgTwo from "@/../public/assets/collectionImgTwo.png";
import collectionImgThree from "@/../public/assets/collectionImgThree.png";
import collectionImgFour from "@/../public/assets/collectionImgFour.png";
import collectionImgFive from "@/../public/assets/collectionImgFive.png";
import collectionImgSix from "@/../public/assets/collectionImgSix.png";


interface NavItem {
    name: string;
    path: string;
}

export const NavBarData: NavItem[] = [
    {
        name: "NFT Financing",
        path: "/accountSummary"
    }, {
        name: "NFT Equity",
        path: "/nft-equity"
    }, {
        name: "Foreclosed NFTs",
        path: "/foreclosed-nfts"
    }, {
        name: "Deposits",
        path: "/deposits"
    }, {
        name: "Metrics",
        path: "/metrics"
    }, {
        name: "Dashboard",
        path: "/dashboard"
    }, 
    // {
    //     name: "Company",
    //     path: "/company"
    // },
]

interface socialInfo {
    icon: any,
    name: string,
    path: string
}

export const profileSocialInfo: socialInfo[] = [
    {
        icon: socialOne,
        name: "telegram",
        path: "#"
    },
    {
        icon: socialTwo,
        name: "twitter",
        path: "#"
    }, {
        icon: socialThree,
        name: "youtube",
        path: "#"
    }, {
        icon: socialFour,
        name: "discord",
        path: "#"
    }, {
        icon: socialFive,
        name: "website",
        path: "#"
    },
]

export const tableHead: any = [
    "Asset Class", "Lock Period", "Deposited Date", "Unlock Date", "Total Staked", "APY %", "Operation"
]

interface tableBody {
    assestClass: string,
    timePeriod: number,
    depositedDate: string,
    unlockDate: string,
    totalStaked: any,
    apy: any,
    operation: any
}

export const tableBody: tableBody[] = [
    {
        assestClass: '5.0',
        timePeriod: 0,
        depositedDate: "February 22, 2024",
        unlockDate: "November 22, 2024",
        totalStaked: "0.10397",
        apy: "2.9755",
        operation: "Withdraw"
    }, {
        assestClass: '5.0',
        timePeriod: 120,
        depositedDate: "February 22, 2024",
        unlockDate: "November 22, 2024",
        totalStaked: "0.10397",
        apy: "2.9755",
        operation: "Withdraw"
    }, {
        assestClass: '5.0',
        timePeriod: 210,
        depositedDate: "February 22, 2024",
        unlockDate: "November 22, 2024",
        totalStaked: "0.10397",
        apy: "2.9755",
        operation: "Withdraw"
    }, {
        assestClass: '5.0',
        timePeriod: 300,
        depositedDate: "February 22, 2024",
        unlockDate: "November 22, 2024",
        totalStaked: "0.10397",
        apy: "2.9755",
        operation: "Withdraw"
    },
]

export const responsiveTableHead: any = [

    {
        title: "assest Class",
        rightSight: '5.0'
    },

    {
        title: "time Period",
        rightSight: '120'
    },

    {
        title: "deposited Date",
        rightSight: 'February 22, 2024'
    },

    {
        title: "unlock Date",
        rightSight: 'November 22, 2024'
    },

    {
        title: "total Staked",
        rightSight: 'November 22, 2024'
    },

    {
        title: "apy",
        rightSight: '2.9755'
    },

    {
        title: "operation",
        rightSight: 'Withdraw'
    },
]

interface footerOne {
    name: string,
    link: string
}

export const footerOne: footerOne[] = [
    {
        name: "Marketplace",
        link: "#",
    },

    {
        name: "How it Works",
        link: "#",
    },

    {
        name: "Our Mission",
        link: "#",
    },
]

interface footerTwo {
    name: string,
    link: string
}

export const footerTwo: footerTwo[] = [
    {
        name: "Profile",
        link: "#",
    },

    {
        name: "Favorites",
        link: "#",
    },

    {
        name: "My Nfts",
        link: "#",
    }, {
        name: "Settings",
        link: "#",
    },
]

interface footerThree {
    name: string,
    link: string
}

export const footerThree: footerThree[] = [
    {
        name: "About",
        link: "#",
    },

    {
        name: "Career",
        link: "#",
    },

    {
        name: "My Nfts",
        link: "#",
    }, {
        name: "Settings",
        link: "#",
    },
]

interface footerSocialInfo {
    icon: any,
    name: string,
    path: string
}

export const footerSocialInfo: footerSocialInfo[] = [
    {
        icon: swOne,
        name: "telegram",
        path: "#"
    },
    {
        icon: swTwo,
        name: "twitter",
        path: "#"
    }, {
        icon: swThree,
        name: "youtube",
        path: "#"
    }, {
        icon: swFour,
        name: "discord",
        path: "#"
    }, {
        icon: swFive,
        name: "website",
        path: "#"
    },
]

export const myCollections = [
    {
        collectionImg: collectionImgOne,
        collectionName: "MetaFire NFT #23",
        floorTitle: "Floor Price",
        factorTitle: "Liquidation Factor",
        auctionTitle: "Current Auction Price",
        bidderTitle: "Bidder",
        auctionEndTitle: "Auction End",
        floorPrice: "1.2 ETH",
        liquidationFactor: "100%",
        currentAuctionPrice: "N/A",
        bidder: "N/A",
        auctionEnd: "23 Feb, 2024",
        auctionBtn: "Auction",
        buyNowBtn: "Buy Now"
    }, {
        collectionImg: collectionImgTwo,
        collectionName: "MetaFire NFT #23",
        floorTitle: "Floor Price",
        factorTitle: "Liquidation Factor",
        auctionTitle: "Current Auction Price",
        bidderTitle: "Bidder",
        auctionEndTitle: "Auction End",
        floorPrice: "1.2 ETH",
        liquidationFactor: "100%",
        currentAuctionPrice: "N/A",
        bidder: "N/A",
        auctionEnd: "23 Feb, 2024",
        auctionBtn: "Auction",
        buyNowBtn: "Buy Now"
    },{
        collectionImg: collectionImgThree,
        collectionName: "MetaFire NFT #23",
        floorTitle: "Floor Price",
        factorTitle: "Liquidation Factor",
        auctionTitle: "Current Auction Price",
        bidderTitle: "Bidder",
        auctionEndTitle: "Auction End",
        floorPrice: "1.2 ETH",
        liquidationFactor: "100%",
        currentAuctionPrice: "N/A",
        bidder: "N/A",
        auctionEnd: "23 Feb, 2024",
        auctionBtn: "Auction",
        buyNowBtn: "Buy Now"
    },{
        collectionImg: collectionImgFour,
        collectionName: "MetaFire NFT #23",
        floorTitle: "Floor Price",
        factorTitle: "Liquidation Factor",
        auctionTitle: "Current Auction Price",
        bidderTitle: "Bidder",
        auctionEndTitle: "Auction End",
        floorPrice: "1.2 ETH",
        liquidationFactor: "100%",
        currentAuctionPrice: "N/A",
        bidder: "N/A",
        auctionEnd: "23 Feb, 2024",
        auctionBtn: "Auction",
        buyNowBtn: "Buy Now"
    },{
        collectionImg: collectionImgFive,
        collectionName: "MetaFire NFT #23",
        floorTitle: "Floor Price",
        factorTitle: "Liquidation Factor",
        auctionTitle: "Current Auction Price",
        bidderTitle: "Bidder",
        auctionEndTitle: "Auction End",
        floorPrice: "1.2 ETH",
        liquidationFactor: "100%",
        currentAuctionPrice: "N/A",
        bidder: "N/A",
        auctionEnd: "23 Feb, 2024",
        auctionBtn: "Auction",
        buyNowBtn: "Buy Now"
    },{
        collectionImg: collectionImgSix,
        collectionName: "MetaFire NFT #23",
        floorTitle: "Floor Price",
        factorTitle: "Liquidation Factor",
        auctionTitle: "Current Auction Price",
        bidderTitle: "Bidder",
        auctionEndTitle: "Auction End",
        floorPrice: "1.2 ETH",
        liquidationFactor: "100%",
        currentAuctionPrice: "N/A",
        bidder: "N/A",
        auctionEnd: "23 Feb, 2024",
        auctionBtn: "Auction",
        buyNowBtn: "Buy Now"
    },
]

import LoansCardImg from "@/../public/assets/LoansCardImg.png"
import LoansCardImg2 from "@/../public/assets/LoansCardImg2.png"
import LoanHealth from "@/../public/assets/loanHealth.svg";
import LoanHealth2 from "@/../public/assets/loanHealth2.svg"
export const loansData = [
    {
        loanCarImg: LoansCardImg,
        loanTitle: "MetaFire NFT ",
        loanNbr: "#39",
        ethPoints: "0.0025487",
        balance:  "0.0025487 ETH",
        borrowRate: "22.7%",
        loanActiveStatus: 'Active',
        assetClass :"5 Star",
        startOn: "Sep, 17th 2024",
        loanActiveHealth: LoanHealth
    },
    {
        loanCarImg: LoansCardImg2,
        loanTitle: "MetaFire NFT ",
        loanNbr: "#39",
        ethPoints: "0.0025487",
        balance:  "0.0025487 ETH",
        borrowRate: "22.7%",
        loanActiveStatus: 'Inactive',
        assetClass :"5 Star",
        startOn: "Sep, 17th 2024",
        loanActiveHealth: LoanHealth2
    },

    {
        loanCarImg: LoansCardImg2,
        loanTitle: "MetaFire NFT ",
        loanNbr: "#39",
        ethPoints: "0.0025487",
        balance:  "0.0025487 ETH",
        borrowRate: "22.7%",
        loanActiveStatus: 'Paused',
        assetClass :"5 Star",
        startOn: "Sep, 17th 2024",
        loanActiveHealth: LoanHealth
    },
]