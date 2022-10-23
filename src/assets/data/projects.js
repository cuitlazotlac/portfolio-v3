import { v4 as uuidv4 } from "uuid";
import test_image from "../images/test.gif";

//CAROUSSEL PROJECTS
const projects = [
  {
    id: uuidv4(),
    name: "Crypto Watcher",
    link1: "https://github.com/cuitlazotlac/crypto-watcher-v2",
    link2: "https://cuitlazotlac.github.io/crypto-watcher-v2/",
    desc: "💱 👓 CryptoWatcher is a price-tracking website for cryptos, gathering news from the industry.",
    stacks: "react, styled-components, react-bootstrap, axios",
    image: test_image,
  },
  {
    id: uuidv4(),
    name: "Spread",
    link1: "https://github.com/cuitlazotlac/twitter-clone",
    link2:
      "https://ipfs.fleek.co/ipfs/QmcFvYSMft7okugk5KarYf8Muw2jECThoEcUhruvEzvg7Q/",
    desc: " 📨 ⛓ Spread is a Twitter Clone using Web3 technologies, wallet connection and solidity smart contract.",
    stacks: "react, ipfs, hardhat, solidity, nodejs",
    image: test_image,
  },
  {
    id: uuidv4(),
    name: "ETH SignIn",
    link1: "https://github.com/cuitlazotlac/eth-sign-in",
    link2: "https://cuitlazotlac.github.io/eth-sign-in/",
    desc: "🛂 ⛓ An identification management system for creating, reading, and updating a user's profile using their wallet.",
    stacks: "react, ceramic, idx, dids, ethers",
    image: test_image,
  },
  {
    id: uuidv4(),
    name: "NFT Mint Website",
    link1: "https://github.com/cuitlazotlac/full-mint-website",
    link2: "https://cuitlazotlac.github.io/full-mint-website/",
    desc: "🖼 🤖 NFT Mint Website where we can connect our wallet and mint a digital asset.",
    stacks: "react, Solidity, ethers, hardhat, chakraUI, Infura",
    image: test_image,
  },
];

export default projects;
