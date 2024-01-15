import { useContractRead } from "wagmi";
import crvUsdControllerAbis from "../app/abis/curvUSD_Controller.json";
import { useState } from "react";

export default function Test() {
  const [inputValue, setInputValue] = useState(
    "0x100dAa78fC509Db39Ef7D04DE0c1ABD299f4C6CE"
  );

  const { data, isError, isLoading } = useContractRead({
    address: "0x100dAa78fC509Db39Ef7D04DE0c1ABD299f4C6CE",
    abi: crvUsdControllerAbis,
    functionName: "health",
    args: [inputValue],
  });

  console.log("health: ", data);

  // Convert the BigInt to a string before rendering it in the component.
  const dataString = data ? data.toString() : "";

  return <div>health:{dataString}</div>;
}
