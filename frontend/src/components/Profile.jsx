import React from 'react';

function Profile(props) {

    const {profileIconId, name, summonerLevel} = props.summoner;

    return (
        <div className="profile">
            <img src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${profileIconId}.png`} alt="profile icon for user"></img>
            <h1 className="profile-level">{summonerLevel}</h1>
            <h1>{name}</h1>
        </div>
     );
}

export default Profile;