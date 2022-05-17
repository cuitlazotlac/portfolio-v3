import { v4 as uuidv4 } from "uuid";
import ProjectImg from "../images/projects/img1.jpg";
import UTrackerImg from "../images/projects/img1.svg";

//CAROUSSEL PROJECTS
const projects = [
  {
    id: uuidv4(),
    name: "Crypto Watcher",
    link1: "https://github.com/cuitlazotlac/crypto-watcher-v2",
    link2: "https://cuitlazotlac.github.io/crypto-watcher-v2/",
    desc: "💱 👓 CryptoWatcher is a price-tracking website for cryptos. This application is getting crypto data from an API.",
    stacks: "react, styled-components, react-bootstrap, axios",
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: "Spread",
    link1: "https://github.com/cuitlazotlac/twitter-clone",
    link2:
      "https://ipfs.fleek.co/ipfs/QmcFvYSMft7okugk5KarYf8Muw2jECThoEcUhruvEzvg7Q/",
    desc: " 📨 ⛓ Spread is a Twitter Clone using Web3 technologies, wallet connection and solidity smart contract.",
    stacks: "react, ipfs, hardhat, solidity, nodejs, react-bootstrap",
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: "ETH SignIn",
    link1: "https://github.com/cuitlazotlac/eth-sign-in",
    link2: "https://cuitlazotlac.github.io/eth-sign-in/",
    desc: "🛂 ⛓ I followed and customized a tutorial to build out an identity management system for creating, reading, and updating a user's profile using their Ethereum wallet.",
    stacks: "react, ceramic, idx, dids, ethers",
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: "MTL Mex API",
    link1: "https://github.com/cuitlazotlac/mtlmex-api",
    link2: "https://mtlmex-api.herokuapp.com/",
    desc: "🇲🇽🌮 An API of the Mexican restaurants in Montréal. This need to be constantly updated with the best addresses that I know, hear about or discover.",
    stacks: "javascript, heroku, jsondb",
    img: UTrackerImg,
  },
];

export default projects;
