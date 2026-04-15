import Link from "next/link";

type AppBrandProps = {
  compact?: boolean;
};

export default function AppBrand({ compact = false }: AppBrandProps) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 rounded-lg px-2 py-1 transition hover:bg-slate-100"
      aria-label="Go to homepage"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-lg font-extrabold text-white shadow-md">
        CD
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-medium text-slate-500">Logo</span>
        <span
          className={
            compact
              ? "text-lg font-bold tracking-tight text-slate-900"
              : "text-xl font-bold tracking-tight text-slate-900"
          }
        >
          Codex Demo App
        </span>
      </span>
    </Link>
  );
}
