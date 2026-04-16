"use client";
import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toUpperCase = () => {
    setOutput(input.toUpperCase());
  };

  const reverseText = () => {
    if (!input) {
      setOutput("");
      return;
    }

    if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
      const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
      const graphemes = Array.from(segmenter.segment(input), ({ segment }) => segment);
      setOutput(graphemes.reverse().join(""));
      return;
    }

    setOutput(Array.from(input).reverse().join(""));
  };

  const improveText = () => {
    // Mock AI improvement
    setOutput("✨ " + input + " (Improved version)");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-100 to-blue-200 px-5 py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Codex Demo App 🚀
        </h1>

        <textarea
          placeholder="Enter text..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mb-5 min-h-28 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
        />

        <div className="flex flex-wrap gap-3">
          <Button onClick={toUpperCase}>Uppercase</Button>
          <Button onClick={reverseText}>Reverse</Button>
          <Button onClick={improveText}>Improve</Button>
          <Button onClick={openModal} variant="backdrop">
            Open Modal
          </Button>
        </div>

        <h3 className="mt-8 text-xl font-semibold text-slate-900">Output:</h3>
        <div className="mt-3 rounded-2xl bg-white/80 p-4 text-slate-800 shadow-sm ring-1 ring-slate-200">
          {output}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="mb-3 text-3xl font-semibold text-slate-950">
          Hi, Welcome to Codex modal!
        </h2>
        <p className="mb-5 text-sm leading-6 text-slate-600">
          This modal opens from the semi-backdrop button and now uses
          Tailwind classes throughout the UI.
        </p>
        <Button onClick={closeModal}>Close</Button>
      </Modal>
    </div>
  );
}
