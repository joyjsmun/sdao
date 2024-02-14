import { useContractWrite } from "wagmi";
import { useState } from "react";
import wethABI from "../app/abis/weth.json";

export default function Test() {
  const [inputValue, setInputValue] = useState("");
  const [targetAddress, setTargetAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Call useContractWrite hook to obtain the contract function
  const { write: approveFunction } = useContractWrite({
    address: "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9",
    abi: wethABI,
    functionName: "approve",
    args: ["0x91Ce6fEC501fc5e2dA8Ed6cB85603906ea4cd21F", 100000000],
  });

  const handleApprove = async () => {
    setIsLoading(true);
    try {
      // Call the contract function directly
      await approveFunction();
      console.log("Approval successful");
    } catch (error) {
      setIsError(true);
      console.error("Error occurred while approving:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleApprove} disabled={isLoading}>
        {isLoading ? "Approving..." : "Approve"}
      </button>
      {isError && <p>Error occurred while approving.</p>}
    </div>
  );
}
