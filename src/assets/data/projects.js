import { v4 as uuidv4 } from "uuid";

// images
import cryptowatcher from "../images/portfolios/cryptowatcher.png";
import ethsignin from "../images/portfolios/ethsignin.png";
import nftmint from "../images/portfolios/nftmint.png";
import spread from "../images/portfolios/spread.png";

// gif
import cryptowatcher_gif from "../images/portfolios/cryptowatcher.gif";
import nftmint_gif from "../images/portfolios/nftmint.gif";

//CAROUSSEL PROJECTS
const projects = [
  {
    id: uuidv4(),
    name: "Crypto Watcher",
    link1: "https://github.com/cuitlazotlac/crypto-watcher-v2",
    link2: "https://cuitlazotlac.github.io/crypto-watcher-v2/",
    desc: "💱 👓 CryptoWatcher is a price-tracking website for cryptos, gathering news from the industry.",
    stacks: "react, styled-components, react-bootstrap, axios",
    image: cryptowatcher,
    animatation: cryptowatcher_gif,
  },
  {
    id: uuidv4(),
    name: "Spread",
    link1: "https://github.com/cuitlazotlac/twitter-clone",
    link2:
      "https://ipfs.fleek.co/ipfs/QmcFvYSMft7okugk5KarYf8Muw2jECThoEcUhruvEzvg7Q/",
    desc: " 📨 ⛓ Spread is a Twitter Clone using Web3 technologies, wallet connection and solidity smart contract.",
    stacks: "react, ipfs, hardhat, solidity, nodejs",
    image: spread,
    animatation: spread,
  },
  {
    id: uuidv4(),
    name: "ETH SignIn",
    link1: "https://github.com/cuitlazotlac/eth-sign-in",
    link2: "https://cuitlazotlac.github.io/eth-sign-in/",
    desc: "🛂 ⛓ An identification management system for creating, reading, and updating a user's profile using their wallet.",
    stacks: "react, ceramic, idx, dids, ethers",
    image: ethsignin,
    animatation: ethsignin,
  },
  {
    id: uuidv4(),
    name: "NFT Mint Website",
    link1: "https://github.com/cuitlazotlac/full-mint-website",
    link2: "https://cuitlazotlac.github.io/full-mint-website/",
    desc: "🖼 🤖 Full stack NFT Mint website. This app is built so you can connect your wallet and mint a digital asset.",
    stacks: "react, Solidity, ethers, hardhatx, Infura",
    image: nftmint,
    animatation: nftmint_gif,
  },
];

export default projects;
