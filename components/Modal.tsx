"use client";

import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-slate-900/45 p-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-[18px] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.2)]"
      >
        {children}
      </div>
    </div>
  );
}
