const config = require("config");
const axios = require("axios");
const express = require("express");
const router = express.Router();

// Set API key to every request to clean up code
axios.defaults.headers.common["X-Riot-Token"] = config.get("leagueApiKey");

router.get("/summoner/:name", async (req, res) => {
    const name = req.params.name;
    const response = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`);
    res.send(response.data);
})

router.get("/summoner/matches/:name", async (req, res) => {
    const name = req.params.name;
    let responses = {};
    const summoner = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`);
    responses.summoner = summoner.data;
    const matches = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${responses.summoner.puuid}/ids?start=0&count=20`);
    responses.matches = matches.data;
    res.send(responses);
})

module.exports = router;