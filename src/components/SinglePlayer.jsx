import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlayerById } from "../api";
import PlayerCard from "./PlayerCard/PlayerCard";

export default function SinglePlayer() {
  const [puppy, setPuppy] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function getPlayerData() {
      try {
        const puppyObj = await getPlayerById(id);
        setPuppy(puppyObj);
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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PlayerCard player={puppy} component={"detail"} />
    </div>
  );
}
