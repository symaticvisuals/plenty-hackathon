import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import faqImage from "../assets/images/frontpage/plentymedium.svg";
function Faqs() {
  const [faqs] = useState([
    {
      question: "What is Plenty?",
      line: [
        "The Plenty protocol enables swapping of fungible tokens on Tezos.",
        "Plenty is a protocol that enables swapping of fungible tokens on Tezos.",
        "You can only swap tokens on Plenty if there is enough liquidity for those tokens. Providing liquidity will get you Plenty Liquidity Provider (PLP) tokens, which will generate rewards in the form of trading fees for making sure there's always liquidity for the exchange to use. \n Yield farming lets users that are providing liquidity earn PLENTY rewards by locking their PLP tokens into a farm.",
      ],
    },
    {
      question: "How does Plenty work?",
      line: [
        "Plenty is a collection of smart contracts to make liquidity pools and corresponding markets that are compatible with each other. The architecture is based on Uniswap V2.",
        "Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen. The pools keep track of reserves (liquidity) and update those reserves every single time someone trades. Because the reserves are automatically rebalanced, a liquidity pool can always be used to buy or sell a token without requiring a counterparty on the other side of a trade.",
      ],
    },
    {
      question: "Why can’t I trade native tez?",
      line: [
        "Plenty is the first token-to-token Automated Market Maker (AMM) on Tezos. This means that native tez trading is not supported. However, trading with a collateralized version of tez, called ctez is supported.",
        `Ctez solves the issue of using tez inside DeFi contracts without worrying about the governance matter of "who should be the baker" and without the opportunity cost of not delegating.`,
      ],
    },
    {
      question: "How do I use Plenty?",
      line: [
        "First you’ll need a Tezos wallet and some tez. Tez is available at all big crypto exchanges like Coinbase, Kraken  and Binance. Do you have some tez? Go to ctez.app to swap it for ctez!",
        "Each transaction on Tezos comes with a small gas fee, paid in tez, which is a fee for the bakers to keep the Proof of Stake network running. So make sure you to keep some tez for these fees.",
        "If you are a DeFi user from another blockchain, you can wrap your assets using the Wrap Protocol. Wrap tokens like USDC, BUSD, LINK, MATIC, or WBTC on the Ethereum blockchain, and use them on Plenty to trade and earn.",
      ],
    },
    {
      question: "How are prices determined?",
      line: [
        "Prices are determined by the amount of each token in a pool. The smart contract maintains a constant using the following function: x*y=k. For example, x = tokenABC, y = tokenXYZ, and k = constant. During each trade, a certain amount of one token is removed from the pool for an amount of the other token. To maintain k, the balances held by the smart contract are adjusted during the execution of the trade, thereby changing the price.",
      ],
    },
    {
      question: "Are there risks?",
      line: [
        "Using smart contracts always brings risk. To reduce this risk, the Plenty smart contracts are audited. Both the AMM and staking smart contracts were audited successfully.",
        "For liquidity providers there is the risk of Impermanent loss. This is a price difference that can occur when holding tokens in an AMM liquidity pool instead of holding them in your wallet. It occurs when the price of tokens inside an AMM diverge in any direction. The more divergence, the greater the impermanent loss.",
      ],
    },
  ]);
  return (
    <div className="bg-frontpage h-auto bg-cover md:bg-contain bg-no-repeat bg-bottom w-full px-14 py-4">
      <h3 className="text-skin-inverted-dark text-3xl font-sans font-semibold text-left">
        Frequently asked<br></br>questions
      </h3>
      <div className="grid grid-cols-2 grid-flow-row gap-6 mt-10 sm:grid-cols-1">
        <div className="w-full">
          <Faq question={faqs[0].question} line={faqs[0].line} />
          <Faq question={faqs[1].question} line={faqs[1].line} />
          <Faq question={faqs[2].question} line={faqs[2].line} />
        </div>
        <div className="w-full">
          <Faq question={faqs[3].question} line={faqs[3].line} />
          <Faq question={faqs[4].question} line={faqs[4].line} />
          <Faq question={faqs[5].question} line={faqs[5].line} />
          <div className="w-full animate-pulse">
            <img src={faqImage} alt="frontpage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;

interface FaqTypes {
  question: string;
  line: string[];
}
const Faq = (faq: FaqTypes) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-left border-b border-b-white pb-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer transform transition-all duration-500"
        onClick={() => {
          setOpen(!open);
        }}>
        <h5 className="text-skin-inverted-dark font-sans font-semibold">
          {faq.question}
        </h5>
        <BiChevronDown className="text-skin-inverted-dark text-2xl" />
      </div>
      <div className={`mt-4 ${open === false ? "hidden" : ""}`}>
        {faq.line.map((text, index) => (
          <p className="text-skin-inverted-dark font-sans mt-2">{text}</p>
        ))}
      </div>
    </div>
  );
};
