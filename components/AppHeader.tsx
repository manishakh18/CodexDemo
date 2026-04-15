import AppBrand from "./AppBrand";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3">
        <AppBrand compact />
        <p className="text-sm font-medium text-slate-600">Text tools powered by Tailwind</p>
      </div>
    </header>
  );
}
