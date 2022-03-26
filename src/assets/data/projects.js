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
    desc: "💱 👓 CryptoWatcher is a price-tracking website for cryptocurrencies. This web application is using https://www.coingecko.com/en/api to get Crypto datas",
    stacks: "react, styled-components, react-bootstrap, bootstrap4, axios",
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: "DeFi DApp Token Farm",
    desc: "👨🏽‍🌾🪙 DeFi App - reproducing a Digital bank where we can earn interest for depositing cryptocurrency",
    stacks: "react, ethereum, smart-contracts, truffle, solidity, web3js",
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Carb One Caculator",
    desc: "🪴👨🏽‍💻👨🏻‍💻 This is the story of two guys interested in environmental topics, building a carbon footprint calculator",
    stacks: "react, firebase",
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: "MTL Mex API",
    desc: "🇲🇽🌮 An API of the Mexican restaurants in Montréal 🇨🇦 This need to be constantly updated with the best addresses that you know so do not hesitate to contribute 🤠.",
    stacks: "javascript, heroku, jsondb",
    img: UTrackerImg,
  },
];

export default projects;
