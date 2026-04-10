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

  const countWords = () => {
    const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0;
    setOutput(`Word count: ${wordCount}`);
  };

  const baseButtonStyle = {
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #d0d7de",
    background: "#ffffff",
    color: "#1f2328",
    fontWeight: 600,
    cursor: "pointer",
  } as const;

  const countWordsButtonStyle = {
    ...baseButtonStyle,
    border: "1px solid #0b57d0",
    background: "#0b57d0",
    color: "#ffffff",
  } as const;

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

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button style={baseButtonStyle} onClick={toUpperCase}>
          Uppercase
        </button>
        <button style={baseButtonStyle} onClick={reverseText}>
          Reverse
        </button>
        <button style={baseButtonStyle} onClick={improveText}>
          Improve
        </button>
        <button style={countWordsButtonStyle} onClick={countWords}>
          Count Words
        </button>
      </div>

      <h3 style={{ marginTop: 30 }}>Output:</h3>
      <div style={{ background: "#f4f4f4", padding: 15 }}>
        {output}
      </div>
    </div>
  );
}