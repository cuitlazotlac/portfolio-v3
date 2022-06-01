import crypto_watcher from "../images/portfolios/crypto_watcher.svg";
// import dapp_farmer from "../images/portfolios/dapp_farmer.svg";
import weather_tracker from "../images/portfolios/weather_tracker.svg";
import mex_mtl from "../images/portfolios/mex_mtl.svg";
import anime_library from "../images/portfolios/anime_library.svg";
import what_movie from "../images/portfolios/what_movie.svg";
import covid_dashboard from "../images/portfolios/covid_dashboard.svg";
import carb_one from "../images/portfolios/carb_one.svg";
import pygame from "../images/portfolios/pygame.svg";

//PORTFOLIO PAGE PROJECTS
const portfolios = [
  {
    id: 1,
    category: "React",
    image: crypto_watcher,
    link1: "https://github.com/cuitlazotlac/crypto-watcher-v2",
    link2: "https://cuitlazotlac.github.io/crypto-watcher-v2/",
    title: "Crypto Watcher",
    desc: "💱 👓 CryptoWatcher is a price-tracking website for cryptocurrencies. This web application is using https://www.coingecko.com/en/api to get Crypto datas",
    stack: "react, styled-components, react-bootstrap, bootstrap4, axios",
  },
  {
    id: 2,
    category: "React",
    image: weather_tracker,
    link1: "https://github.com/cuitlazotlac/WeatherChecker",
    link2: "https://weatherchecker1.herokuapp.com/",
    title: "Weather Checker",
    desc: "🌤 🌦 Responsive web application to check to detailed weather. Built-in React + SCSS and using OpenWeatherMap API (https://openweathermap.org/)",
    stack: "react, scss, openweathermap-api",
  },
  {
    id: 3,
    category: "API",
    image: mex_mtl,
    link1: "https://github.com/cuitlazotlac/mtlmex-api",
    link2: "https://mtlmex-api.herokuapp.com/",
    title: "MTL Mex API",
    desc: "🇲🇽🌮 An API of the Mexican restaurants in Montréal 🇨🇦 This need to be constantly updated with the best addresses that you know so do not hesitate to contribute 🤠",
    stack: "javascript, heroku, jsondb",
  },
  {
    id: 4,
    category: "React",
    image: anime_library,
    link1: "https://github.com/cuitlazotlac/anime-library",
    link2: "https://anime-library1.herokuapp.com/",
    title: "Anime Library",
    desc: "⛩ 🏮 Simple Web application to display your favorite animes - manga.. information using the Unofficial MYANIMELIST API (https://jikan.moe/)",
    stack: "react, api, scss",
  },
  {
    id: 5,
    category: "Vue",
    image: what_movie,
    link1: "https://github.com/cuitlazotlac/what-movie",
    link2: "https://what-movies.herokuapp.com/",
    title: "What Movie ?",
    desc: "🎥 🍿 A very simple web application displaying movies information using the OMDB API (https://www.omdbapi.com/)",
    stack: "vuejs, api, javascript",
  },
  {
    id: 6,
    category: "React",
    image: covid_dashboard,
    link1: "https://github.com/cuitlazotlac/covid-tracker-dashboard",
    link2: "https://www.google.com",
    title: "Covid Tracker Dashboard",
    desc: "covid dashboard using https://covidtracking.com/data api",
    stack: "react, api",
  },
  {
    id: 7,
    category: "Open Source Project",
    image: carb_one,
    link1: "https://github.com/climate-stuff/carbon-calculator",
    link2: "https://www.google.com",
    title: "Carb One Caculator",
    desc: "🪴👨🏽‍💻👨🏻‍💻 This is the story of two guys interested in environmental topics, building a carbon footprint calculator",
    stack: "react, javascript",
  },
  {
    id: 8,
    category: "Python",
    image: pygame,
    link1: "https://github.com/cuitlazotlac/pygamon",
    link2: "https://www.google.com",
    title: "PyGamon",
    desc: "👾 🎮 16-bit inspired 2-D Adventure RPG Python game",
    stack: "python, pygame, tiled",
  },
];

export default portfolios;
