const config = require("config");
const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("API Route");
})

router.get("/summoner/:name", async (req, res) => {
    const name = req.params.name;
    const response = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`, {
        headers: {
            "X-Riot-Token": config.get("leagueApiKey")
        }
    });
    res.send(response.data);
})

module.exports = router;