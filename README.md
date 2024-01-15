# SupremeDAO Frontend

## Getting Started

```
npm i

npm run dev
```

wsteth total will be from :

const contract = new web3.eth.Contract(contractAbi, contractAddress);

contract.methods.totalwstETHDeposited().call()

debt total from :

contract.methods.totalDebt().call()

Strategy health from :

contract.methods.strategyHealth().call()

I got the js examples from chat gpt for web3.js

the liquidation range and anual apr I'll make methods now and send the calls to you shortly
