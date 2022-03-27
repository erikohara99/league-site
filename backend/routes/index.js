const config = require("config");
const axios = require("axios");
const express = require("express");
const router = express.Router();

// Set API key to every request to clean up code
axios.defaults.headers.common["X-Riot-Token"] = config.get("leagueApiKey");

router.get("/", (req, res) => {
    res.status(200).send("API Route");
})

router.get("/summoner/:name", async (req, res) => {
    const name = req.params.name;
    const response = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`);
    res.send(response.data);
})

router.get("/summoner/matches", async (req, res) => {
    const response = await axios.get();
})

module.exports = router;