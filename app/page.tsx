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
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 p-10 font-sans">
      <h1 className="text-3xl font-bold">Codex Demo App 🚀</h1>

      <textarea
        placeholder="Enter text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="h-28 w-full rounded-md border border-gray-300 p-3"
      />

      <div className="flex flex-wrap gap-2.5">
        <button
          onClick={toUpperCase}
          className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
        >
          Uppercase
        </button>
        <button
          onClick={reverseText}
          className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
        >
          Reverse
        </button>
        <button
          onClick={improveText}
          className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
        >
          Improve
        </button>
      </div>

      <h3 className="text-xl font-semibold">Output:</h3>
      <div className="min-h-14 rounded-md bg-gray-100 p-4 text-gray-900">{output}</div>
    </div>
  );
}
