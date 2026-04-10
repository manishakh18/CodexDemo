"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const toUpperCase = () => {
    setOutput(input.toUpperCase());
  };

  const reverseText = () => {
    setOutput(input.split("").reverse().join(""));
  };

  const improveText = () => {
    // Mock AI improvement
    setOutput("✨ " + input + " (Improved version)");
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Codex Demo App 🚀</h1>

      <textarea
        placeholder="Enter text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: 100,
          padding: 10,
          marginBottom: 20,
        }}
      />

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={toUpperCase}>Uppercase</button>
        <button onClick={reverseText}>Reverse</button>
        <button onClick={improveText}>Improve</button>
      </div>

      <h3 style={{ marginTop: 30 }}>Output:</h3>
      <div style={{ background: "#f4f4f4", padding: 15 }}>
        {output}
      </div>
    </div>
  );
}