import { v4 as uuidv4 } from "uuid";
import ProjectImg from "../images/projects/img1.jpg";
import UTrackerImg from "../images/projects/img1.svg";
// import GreenCtgImg from '../images/greenctg.jpg';
// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: "Crypto Watcher",
    link1: "https://github.com/cuitlazotlac/crypto-watcher",
    link2: "https://cryptowatcher1.herokuapp.com/",
    desc: "💱 👓 CryptoWatcher is a price-tracking website for cryptocurrencies. This web application is getting Crypto infos from CoinGeckoApi",
    stacks: "react, styled-components, react-bootstrap, bootstrap4, axios",
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: "DeFi DApp Token Farm",
    link1: "https://github.com/cuitlazotlac/defi_app",
    link2: "https://defi-dapp-token-farm.herokuapp.com/",
    desc: "👨🏽‍🌾🪙 DeFi App - reproducing a Digital bank where we can earn interest for depositing cryptocurrency",
    stacks: "react, ethereum, smart-contracts, truffle, solidity, web3js",
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: "ETH SignIn",
    link1: "https://github.com/cuitlazotlac/eth-sign-in",
    // link2: "https://cryptowatcher1.herokuapp.com/",
    desc: "🛂 ⛓ I followed and customized a tutorial to build out an identity management system for creating, reading, and updating a user's profile using their Ethereum wallet.",
    stacks: "react, ceramic, idx, dids, ethers",
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: "MTL Mex API",
    link1: "https://github.com/cuitlazotlac/mtlmex-api",
    link2: "https://mtlmex-api.herokuapp.com/",
    desc: "🇲🇽🌮 An API of the Mexican restaurants in Montréal 🇨🇦 This need to be constantly updated with the best addresses that you know so do not hesitate to contribute 🤠.",
    stacks: "javascript, heroku, jsondb",
    img: UTrackerImg,
  },
];

export default projects;
