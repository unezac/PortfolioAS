export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-6 py-24 text-center">
      <div className="max-w-md">
        <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.28em] text-tertiary">404</p>
        <h1 className="text-2xl font-semibold text-primary">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-secondary">
          The page you are looking for does not exist or may have moved.
        </p>
      </div>
    </div>
  );
}
