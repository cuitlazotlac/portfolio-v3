// import clapperboard from "../resources/img/project-icons/what_movie.svg";
// import co2 from "../resources/img/project-icons/carb_one.svg";
// import corona from "../resources/img/project-icons/covid_dashboard.svg";
// import cryto from "../resources/img/project-icons/dapp_farmer.svg";
// import controller from "../resources/img/project-icons/pygame.svg";
// import blockchain from "../resources/img/project-icons/crypto_watcher.svg";
// import manga from "../resources/img/project-icons/anime_library.svg";
// import sun from "../resources/img/project-icons/weather_tracker.svg";
// import taco from "../resources/img/project-icons/mex_mtl.svg";

import test from "../images/avatar.png";

const portfolios = [
  {
    id: 1,
    category: "React",
    image: test,
    link1: "https://github.com/cuitlazotlac/crypto-watcher",
    link2: "https://cryptowatcher1.herokuapp.com/",
    title: "Crypto Watcher",
    desc: "💱 👓 CryptoWatcher is a price-tracking website for cryptocurrencies. This web application is using https://www.coingecko.com/en/api to get Crypto datas",
    stack: "react, styled-components, react-bootstrap, bootstrap4, axios",
  },
  {
    id: 2,
    category: "DApp",
    image: test,
    link1: "https://github.com/cuitlazotlac/defi_app",
    link2: "https://defi-dapp-token-farm.herokuapp.com/",
    title: "DeFi DApp Token Farm",
    desc: "👨🏽‍🌾🪙 DeFi App - reproducing a Digital bank where we can earn interest for depositing cryptocurrency",
    stack: "react, ethereum, smart-contracts, truffle, solidity, web3js",
  },
  {
    id: 3,
    category: "React",
    image: test,
    link1: "https://github.com/cuitlazotlac/WeatherChecker",
    link2: "https://weatherchecker1.herokuapp.com/",
    title: "Weather Checker",
    desc: "🌤 🌦 Responsive web application to check to detailed weather. Built-in React + SCSS and using OpenWeatherMap API (https://openweathermap.org/)",
    stack: "react, scss, openweathermap-api",
  },
  {
    id: 4,
    category: "API",
    image: test,
    link1: "https://github.com/cuitlazotlac/mtlmex-api",
    link2: "https://mtlmex-api.herokuapp.com/",
    title: "MTL Mex API",
    desc: "🇲🇽🌮 An API of the Mexican restaurants in Montréal 🇨🇦 This need to be constantly updated with the best addresses that you know so do not hesitate to contribute 🤠",
    stack: "javascript, heroku, jsondb",
  },
  {
    id: 5,
    category: "React",
    image: test,
    link1: "https://github.com/cuitlazotlac/anime-library",
    link2: "https://anime-library1.herokuapp.com/",
    title: "Anime Library",
    desc: "⛩ 🏮 Simple Web application to display your favorite animes - manga.. information using the Unofficial MYANIMELIST API (https://jikan.moe/)",
    stack: "react, api, scss",
  },
  {
    id: 6,
    category: "Vue",
    image: test,
    link1: "https://github.com/cuitlazotlac/what-movie",
    link2: "https://what-movies.herokuapp.com/",
    title: "What Movie ?",
    desc: "🎥 🍿 A very simple web application displaying movies information using the OMDB API (https://www.omdbapi.com/)",
    stack: "vuejs, api, javascript",
  },
  {
    id: 7,
    category: "React",
    image: test,
    link1: "https://github.com/cuitlazotlac/covid-tracker-dashboard",
    link2: "https://www.google.com",
    title: "Covid Tracker Dashboard",
    desc: "covid dashboard using https://covidtracking.com/data api",
    stack: "react, api",
  },
  {
    id: 8,
    category: "Open Source Project",
    image: test,
    link1: "https://github.com/climate-stuff/carbon-calculator",
    link2: "https://www.google.com",
    title: "Carb One Caculator",
    desc: "🪴👨🏽‍💻👨🏻‍💻 This is the story of two guys interested in environmental topics, building a carbon footprint calculator",
    stack: "react, javascript",
  },
  {
    id: 9,
    category: "Python",
    image: test,
    link1: "https://github.com/cuitlazotlac/pygamon",
    link2: "https://www.google.com",
    title: "PyGamon",
    desc: "👾 🎮 16-bit inspired 2-D Adventure RPG Python game",
    stack: "python, pygame, tiled",
  },
];

export default portfolios;
