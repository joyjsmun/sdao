import { useContractRead } from "wagmi";
import crvUsdControllerAbis from "../app/abis/curvUSD_Controller.json";

export default function Test() {
  const { data, isError, isLoading } = useContractRead({
    address: "0x100dAa78fC509Db39Ef7D04DE0c1ABD299f4C6CE",
    abi: crvUsdControllerAbis,
    functionName: "total_debt",
  });

  console.log("TotalDebt: ", data);
  console.log("alchemy:", process.env.ALCHEMY_ID);

  // Convert the BigInt to a string before rendering it in the component.
  const dataString = data ? data.toString() : "";

  return <div>{dataString}</div>;
}
