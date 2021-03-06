import { v4 as uuidv4 } from "uuid";
import image from "../images/avatar.svg";

//CAROUSSEL PROJECTS
const projects = [
  {
    id: uuidv4(),
    name: "Crypto Watcher",
    link1: "https://github.com/cuitlazotlac/crypto-watcher-v2",
    link2: "https://cuitlazotlac.github.io/crypto-watcher-v2/",
    desc: "๐ฑ ๐ CryptoWatcher is a price-tracking website for cryptos. This application is getting crypto data from an API.",
    stacks: "react, styled-components, react-bootstrap, axios",
    img: image,
  },
  {
    id: uuidv4(),
    name: "Spread",
    link1: "https://github.com/cuitlazotlac/twitter-clone",
    link2:
      "https://ipfs.fleek.co/ipfs/QmcFvYSMft7okugk5KarYf8Muw2jECThoEcUhruvEzvg7Q/",
    desc: " ๐จ โ Spread is a Twitter Clone using Web3 technologies, wallet connection and solidity smart contract.",
    stacks: "react, ipfs, hardhat, solidity, nodejs, react-bootstrap",
    img: image,
  },
  {
    id: uuidv4(),
    name: "ETH SignIn",
    link1: "https://github.com/cuitlazotlac/eth-sign-in",
    link2: "https://cuitlazotlac.github.io/eth-sign-in/",
    desc: "๐ โ I followed and customized a tutorial to build out an identity management system for creating, reading, and updating a user's profile using their Ethereum wallet.",
    stacks: "react, ceramic, idx, dids, ethers",
    img: image,
  },
  {
    id: uuidv4(),
    name: "MTL Mex API",
    link1: "https://github.com/cuitlazotlac/mtlmex-api",
    link2: "https://mtlmex-api.herokuapp.com/",
    desc: "๐ฒ๐ฝ๐ฎ An API of the Mexican restaurants in Montrรฉal. This need to be constantly updated with the best addresses that I know, hear about or discover.",
    stacks: "javascript, heroku, jsondb",
    img: image,
  },
];

export default projects;
