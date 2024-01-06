import React from "react";
import { useEffect, useState } from "react";
import { getPlayers } from "../api/index";
import PlayerCard from "./PlayerCard/PlayerCard";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function getPlayerData() {
      try {
        const players = await getPlayers();
        setPlayers(players);
      } catch (err) {
        console.log(err);
      }
    }
    getPlayerData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {players.map((puppy) => (
        <PlayerCard player={puppy} key={puppy.id} />
      ))}
    </div>
  );
}
