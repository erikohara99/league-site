const config = require("config");
const axios = require("axios");
const express = require("express");
const router = express.Router();

const api = axios.create({
    headers: {
        "X-Riot-Token": config.get("leagueApiKey")
    }
});

router.get("/", (req, res) => {
    res.status(200).send("API Route");
})

router.get("/summoner/:name", async (req, res) => {
    const name = req.params.name;
    const response = await api.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`);
    res.send(response.data);
})

module.exports = router;