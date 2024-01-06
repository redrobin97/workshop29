import React from "react";
import { useState } from "react";
import { createPlayer } from "../api";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm() {
  const navigate = useNavigate();
  const [puppyName, setPuppyName] = useState("");
  const [breed, setBreed] = useState("");
  const [playerStatus, setPlayerStatus] = useState("field");
  const [imageUrl, setImageUrl] = useState(
    "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png"
  );

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const player = await createPlayer({
        name: puppyName,
        breed,
        status: playerStatus,
        imageUrl,
      });
      if (player.success) {
        alert("Puppy added successfully!");
        navigate("/");
      } else {
        alert("Something went wrong, please try again");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      style={{
        width: "50%",
        margin: "0 auto",
      }}
    >
      {puppyName}
      {breed}
      <h1 style={{ textAlign: "center" }}>Add a new Player!</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "0 auto",
        }}
        action=""
        onSubmit={handleSubmit}
      >
        <label htmlFor="">
          Name:
          <input
            style={{ marginBottom: "10px", textAlign: "center" }}
            type="text"
            onChange={(e) => setPuppyName(e.target.value)}
            placeholder={"text.."}
          />
        </label>
        <label htmlFor="">
          Breed:
          <input
            style={{ marginBottom: "10px", textAlign: "center" }}
            type="text"
            onChange={(e) => setBreed(e.target.value)}
            placeholder={"text.."}
          />
        </label>
        <label htmlFor="">
          Image:
          <input
            style={{ marginBottom: "10px", textAlign: "center" }}
            type="text"
            placeholder={"url.."}
            onChange={(e) => setImageUrl(e.target.value)}
            textAlign="center"
          />
        </label>
        <label htmlFor="">
          Status:
          <select
            style={{ marginBottom: "10px" }}
            onChange={(e) => setPlayerStatus(e.target.value)}
            defaultValue={"bench"}
          >
            <option value="bench">Bench</option>
            <option>Field</option>
          </select>
        </label>
        <button style={{ width: "45%", margin: "0 auto" }}>Add Puppy!</button>
      </form>
    </div>
  );
}
