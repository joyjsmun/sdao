import { useEffect, useState } from "react";

const axios = require("axios");
// const createCsvWriter = require("csv-writer").createObjectCsvWriter;
//const { DateTime } = require("luxon");

// Define the GraphQL endpoint
const ENDPOINT = "https://data.aura.finance/graphql";

// Define the GraphQL query and variables
const QUERY = `
query PoolApr($poolId: String!, $chainId: Int, $range: DateRangeIntervalInput!) {
  pool(id: $poolId, chainId: $chainId) {
    aprs {
      totalHistoric(range: $range) {
        timestamp
        total
        breakdown
      }
    }
  }
}
`;

const VARIABLES = {
  poolId: "107",
  chainId: 1,
  range: {
    end: 1696984200, // timestamp
    frequency: 0,
    start: 1687221000, // timestamp
  },
};

// Send the GraphQL query

export default function AuraTest() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .post(ENDPOINT, { query: QUERY, variables: VARIABLES })
      .then((response: any) => {
        console.log(response);
        const data = response.data.data.pool.aprs.totalHistoric;
        setDatas(data);
      })
      .catch((error: string) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      {datas.map((data: any, index) => (
        <div key={index}>
          <div>TimeStamp:{data.timestamp}</div>
          <div>Total:{data.total}</div>
          <div>Aura:{data.breakdown.AURA}</div>
        </div>
      ))}
    </div>
  );
}
