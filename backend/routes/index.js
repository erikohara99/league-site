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

    const profile = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`);
    responses.profile = profile.data;

    const matches = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${responses.profile.puuid}/ids?start=0&count=20`);
    responses.matches = matches.data;

    const matches_ranked = await axios.get(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${responses.profile.id}`);
    if(matches_ranked.data.length === 0){
        let data = {
            wins: 0,
            losses: 0,
            winrate: 0,
            tier: "NONE",
            rank: ""
        };
        matches_ranked.data[0] = data;
    }
    else {
        let temp = matches_ranked.data[0];
        temp.winrate = ((temp.wins / (temp.wins + temp.losses)) * 100).toPrecision(2);
        matches_ranked.data[0] = temp;
    }
    responses.matches_ranked = matches_ranked.data[0];
    
    res.send(responses);
})

module.exports = router;