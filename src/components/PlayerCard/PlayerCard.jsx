import React from "react";
import "./PlayerCard.css";
import { useNavigate } from "react-router-dom";

export default function PlayerCard({ player, component }) {
  const { name, breed, imageUrl, id, status } = player;
  const navigate = useNavigate();

  async function deletePlayer(id) {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (result.success) {
        alert("Puppy deleted successfully!");
        navigate("/");
      } else {
        alert("Something went wrong, please try again");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="player-card-container">
      <h2>{name}</h2>
      <img src={imageUrl} alt={`A dog named ${name}`} />
      <h3>{breed}</h3>
      {status && <h3>{status}</h3>}
      {component !== "detail" && (
        <button onClick={() => navigate(`/players/${id}`)}>See Details</button>
      )}
      {component === "detail" && (
        <button onClick={() => deletePlayer(id)}>Delete Player</button>
      )}
    </div>
  );
}
