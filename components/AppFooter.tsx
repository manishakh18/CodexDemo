import AppBrand from "./AppBrand";

export default function AppFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <AppBrand compact />
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Codex Demo App. Built with Next.js.</p>
      </div>
    </footer>
  );
}
