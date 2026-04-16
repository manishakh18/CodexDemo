"use client";

import { useMemo, useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Hero from "../components/Hero";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Aurora Smart Lamp",
    description: "Voice-controlled lamp with adaptive warmth for work and relaxation.",
    price: "$79",
    image: "/products/lamp.svg",
  },
  {
    id: 2,
    name: "PulseFit Tracker",
    description: "Lightweight activity tracker with 10-day battery and sleep insights.",
    price: "$119",
    image: "/products/tracker.svg",
  },
  {
    id: 3,
    name: "Breeze Sound Mini",
    description: "Portable speaker with immersive sound and splash-resistant design.",
    price: "$99",
    image: "/products/speaker.svg",
  },
];

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const activeProduct = useMemo(
    () => featuredProducts[activeProductIndex],
    [activeProductIndex],
  );

  const showTextResult = (nextOutput: string) => {
    setOutput(nextOutput);
    setIsModalOpen(true);
  };

  const toUpperCase = () => {
    showTextResult(input.toUpperCase());
  };

  const reverseText = () => {
    if (!input) {
      showTextResult("");
      return;
    }

    if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
      const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
      const graphemes = Array.from(segmenter.segment(input), ({ segment }) => segment);
      showTextResult(graphemes.reverse().join(""));
      return;
    }

    showTextResult(Array.from(input).reverse().join(""));
  };

  const improveText = () => {
    showTextResult("✨ " + input + " (Improved version)");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPreviousProduct = () => {
    setActiveProductIndex((currentIndex) => {
      if (currentIndex === 0) {
        return featuredProducts.length - 1;
      }
      return currentIndex - 1;
    });
  };

  const goToNextProduct = () => {
    setActiveProductIndex((currentIndex) => {
      if (currentIndex === featuredProducts.length - 1) {
        return 0;
      }
      return currentIndex + 1;
    });
  };

  const addToCart = () => {
    setCartCount((currentCount) => currentCount + 1);
  };

  return (
    <div className="bg-linear-to-br from-slate-50 via-blue-100 to-blue-200 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <Hero />

        <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950 md:text-3xl">
                Featured Product
              </h2>
              <p className="text-sm text-slate-600">
                Swipe through our picks and add your favorite to cart.
              </p>
            </div>
            <p className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
              Cart items: {cartCount}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="h-72 w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-blue-700">Top pick</p>
              <h3 className="mt-1 text-2xl font-bold text-slate-950">
                {activeProduct.name}
              </h3>
              <p className="mt-3 text-slate-600">{activeProduct.description}</p>
              <p className="mt-4 text-xl font-semibold text-slate-900">
                {activeProduct.price}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button onClick={addToCart}>Add to cart</Button>
                <Button variant="backdrop" onClick={goToPreviousProduct}>
                  Previous
                </Button>
                <Button variant="backdrop" onClick={goToNextProduct}>
                  Next
                </Button>
              </div>
              <div className="mt-5 flex gap-2">
                {featuredProducts.map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => setActiveProductIndex(index)}
                    className={`h-2.5 w-8 rounded-full transition ${
                      index === activeProductIndex
                        ? "bg-slate-900"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Show ${product.name}`}
                    aria-current={index === activeProductIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-4xl rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm md:p-8">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Codex Demo App 🚀
          </h2>

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
          </div>
        </section>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="mb-3 text-2xl font-semibold text-slate-950">Output</h2>
        <p className="mb-5 text-sm leading-6 text-slate-600">
          {output || "No output generated yet."}
        </p>
        <Button onClick={closeModal}>Close</Button>
      </Modal>
    </div>
  );
}
