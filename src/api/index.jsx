import { Navigate, useNavigate } from "react-router-dom";

async function getPlayers() {
  try {
    const res = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players"
    );
    const json = await res.json();
    return json.data.players;
  } catch (err) {
    throw err;
  }
}
async function getPlayerById(id) {
  try {
    const res = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players/${id}`
    );
    const json = await res.json();
    console.log(json.data.player);
    return json.data.player;
  } catch (err) {
    throw err;
  }
}
async function createPlayer(playerData) {
  try {
    const res = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/players",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playerData),
      }
    );
    const json = await res.json();
    return json;
  } catch (err) {
    throw err;
  }
}

export { getPlayers, getPlayerById, createPlayer };
