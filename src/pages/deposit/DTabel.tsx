import { useEffect, useState } from "react";
import { assetData } from "@/components/constant/DipositPageData/DTableData";
import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


const SUBGRAPH_URL = process.env.NEXT_PUBLIC_SUBGRAPH_URL;

const RESERVE_SUBGRAPH_QUERY = `
  {reserveDataUpdateds(
    orderBy:blockTimestamp,
    orderDirection: desc,
    first: 1
  ){
    liquidityRates
    variableBorrowRate
  }}
`;

const apolloClient = new ApolloClient({
  uri: SUBGRAPH_URL,
  cache: new InMemoryCache(),
});

const DTabel = () => {
  const [liquidityRates, setLiquidityRates] = useState();

  useEffect(() => {
    console.log("Fetching data from subgraph");
    // query from subgraph
    apolloClient
      .query({
        query: gql(RESERVE_SUBGRAPH_QUERY),
      })
      .then((data) => {
        // console.log("Data fetched: ", data.data.reserveDataUpdateds[0].liquidityRates);
        setLiquidityRates(
          data.data.reserveDataUpdateds[0].liquidityRates.map((rate: any) =>
            (rate / 10 ** 25).toFixed(4)
          )
        );
      })
      .catch((err) => {
        console.log("Error fetching data: ", err);
      });
  }, []);

  return (
    <div className="relative px-4 pt-40 pb-40 md:pt-0 md:pb-20 lg:pb-24 xl:pt-0 xxl:pt-0 xxl:pb-28">
      <div className="container">
        <div className="mx-auto w-fit text-center">
          <h2 className="text-white text-center font-semibold text-xl md:text-2xl xl:text-3xl">
            {/* What Asset Classes are earning */}
            ---- Current Depsoit APR ----
          </h2>
          <div className="my-9">
            <div className="Tabel_Bg grid grid-cols-1 divide-y divide-white/[0.2] py-2 mx-auto">
              <div className="flex items-center justify-between gap-5 py-5 px-9">
                <p className="text-white text-base font-medium">Asset Class</p>
                <p className="text-white text-base font-medium w-full max-w-fit md:text-start md:max-w-[136px]">
                  5.0 Star
                </p>
              </div>
              {assetData.map((asset, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-5 py-5 px-9"
                >
                  <p className="text-white text-base font-medium">
                    {asset.name}
                  </p>
                  <p className="text-white text-base font-medium w-full max-w-fit md:text-start md:max-w-[136px]">
                    {/* {asset.percentage} */}
                    {liquidityRates?.[index]}%
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* <p className="text-white text-center font-medium text-sm md:text-[15px]">
            *APR is approximate and will be updated as more data comes available
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default DTabel;
