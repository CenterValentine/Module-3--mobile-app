import React, { useState } from "react";
import { useGreeting } from "@project/core";

export default function App() {
  const [input, setInput] = useState("");
  const { message, setName } = useGreeting();

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <h1>Web: Shared Core Demo</h1>
      <p style={{ fontSize: 18, marginTop: 8 }}>{message}</p>
      <label style={{ display: "block", marginTop: 16 }}>
        Name:{" "}
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setName(e.target.value);
          }}
          placeholder="Type your name"
        />
      </label>
      <p style={{ color: "#555", marginTop: 12 }}>
        Powered by <code>@project/core</code>
      </p>
    </main>
  );
}