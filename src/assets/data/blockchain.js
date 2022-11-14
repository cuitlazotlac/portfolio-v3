// images
import cryptowatcher from "../images/portfolios/cryptowatcher.png";
import ethsignin from "../images/portfolios/ethsignin.png";
import nftmint from "../images/portfolios/nftmint.png";
import weatherchecker from "../images/portfolios/weatherchecker.png";
import dune_analytics from "../images/portfolios/dune_analytics.png";
import katakomb from "../images/portfolios/katakomb.png";
import spread from "../images/portfolios/spread.png";
import animelibrary from "../images/portfolios/animelibrary.png";
import dbapi from "../images/portfolios/dbapi.png";
import defi_farm from "../images/portfolios/defi_farm.png";

// gif
import cryptowatcher_gif from "../images/portfolios/cryptowatcher.gif";
import nftmint_gif from "../images/portfolios/nftmint.gif";
import weatherchecker_gif from "../images/portfolios/weatherchecker.gif";
import dune_analytics_gif from "../images/portfolios/dune_analytics.gif";
import katakomb_gif from "../images/portfolios/katakomb.gif";

// BLOCKCHAIN WEB3.0 PROJECTS
const blockchain = [
  {
    id: 1,
    category: "React",
    image: cryptowatcher,
    animatation: cryptowatcher_gif,
    link1: "https://github.com/cuitlazotlac/crypto-watcher-v2",
    link2: "https://cuitlazotlac.github.io/crypto-watcher-v2/",
    title: "Crypto Watcher",
    desc: "💱 👓 CryptoWatcher is a price-tracking website for cryptocurrencies. This web application is getting Crypto infos from CoinGeckoApi",
    stack: "react, styled-components, react-bootstrap, bootstrap4, axios",
  },
  {
    id: 2,
    category: "DApp",
    image: katakomb,
    animatation: katakomb_gif,
    link1: "https://github.com/cuitlazotlac/katakomb",
    link2: "https://mtlmex-api.herokuapp.com/",
    title: "Katakomb",
    desc: "🪦⛓️ This is a full stack DApp allowing ETH transactions (Goerli) just to interact with smart contract and wallets.",
    stack: "react, vite, ethers, solidity",
  },
  {
    id: 3,
    category: "React",
    image: spread,
    animatation: spread,
    link1: "https://github.com/cuitlazotlac/twitter-clone",
    link2:
      "https://ipfs.fleek.co/ipfs/QmcFvYSMft7okugk5KarYf8Muw2jECThoEcUhruvEzvg7Q/",
    title: "Spread",
    desc: " 📨 ⛓ Spread is a Twitter Clone using Web3 technologies, wallet connection and solidity smart contract.",
    stack: "react, ipfs, hardhat, solidity, nodejs, react-bootstrap",
  },
  {
    id: 4,
    category: "DeFi",
    image: defi_farm,
    animatation: defi_farm,
    link1: "https://github.com/cuitlazotlac/defi_app",
    link2: "https://defi-dapp-token-farm.herokuapp.com/",
    title: "DeFi DApp Token Farm",
    desc: "👨🏽‍🌾🪙 DeFi App - reproducing a Digital bank where we can earn interest for depositing cryptocurrency",
    stack: "react, ethereum, truffle, solidity, web3js",
  },
  {
    id: 5,
    category: "React",
    image: ethsignin,
    animatation: ethsignin,
    link1: "https://github.com/cuitlazotlac/eth-sign-in",
    link2: "https://cuitlazotlac.github.io/eth-sign-in/",
    title: "ETH SignIn",
    desc: "🛂 ⛓ I followed and customized a tutorial to build out an identity management system for creating, reading, and updating a user's profile using their Ethereum wallet.",
    stack: "react, ceramic, idx, dids, ethers",
  },
  {
    id: 6,
    category: "React",
    image: nftmint,
    animatation: nftmint_gif,
    link1: "https://github.com/cuitlazotlac/full-mint-website",
    link2: "https://cuitlazotlac.github.io/full-mint-website/",
    title: "NFT Mint Website",
    desc: "🖼 🤖 very simple NFT Mint Website where we can connect our wallet and mint a digital asset. Built to practice connect smartcontract with UI and enable interaction between them.",
    stack: "react, Solidity, ethers, hardhat, chakraUI, Infura",
  },
  {
    id: 7,
    category: "Analytics",
    image: dune_analytics,
    animatation: dune_analytics_gif,
    link1: "",
    link2: "https://dune.com/cuitlazotlac",
    title: "Dune Dashboards and Data Analysis",
    desc: "👨🏽‍💻 📈 Using the crypto analytics by and for the community in order to practice building dashboards create and share crypto analytics.",
    stack: "SQL",
  },
  {
    id: 8,
    category: "React",
    image: weatherchecker,
    animatation: weatherchecker_gif,
    link1: "https://github.com/cuitlazotlac/WeatherChecker",
    link2: "https://weatherchecker1.herokuapp.com/",
    title: "Weather Checker",
    desc: "🌤 🌦 Responsive web application to check to detailed weather. Built-in React + SCSS and using OpenWeatherMap API (https://openweathermap.org/)",
    stack: "react, scss, openweathermap-api",
  },
  {
    id: 9,
    category: "API",
    image: dbapi,
    animatation: dbapi,
    link1: "https://github.com/cuitlazotlac/mtlmex-api",
    link2: "https://mtlmex-api.herokuapp.com/",
    title: "MTL MEX Restaurant API",
    desc: "🇲🇽🌮 An API of the Mexican restaurants in Montréal 🇨🇦 This need to be constantly updated with the best addresses that you know so do not hesitate to contribute 🤠",
    stack: "javascript, heroku, jsondb",
  },
  {
    id: 10,
    category: "React",
    image: animelibrary,
    animatation: animelibrary,
    link1: "https://github.com/cuitlazotlac/anime-library",
    link2: "https://anime-library1.herokuapp.com/",
    title: "Anime Library",
    desc: "⛩ 🏮 Simple Web application to display your favorite animes - manga.. information using the Unofficial MYANIMELIST API (https://jikan.moe/)",
    stack: "react, api, scss",
  },
];

export default blockchain;
