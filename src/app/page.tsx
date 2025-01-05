export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8">
        <h1 className="text-white text-3xl">This domain is owned by p0ntus</h1>
        <p className="text-white mt-4">
          This domain is not for sale and never will be.
        </p>
        <p className="text-white mt-4">
          If you have any questions, feel free to reach out to me at <a href="mailto:admin@p0ntus.com" className="text-blue-500">admin@p0ntus.com</a>
        </p>
        <p className="text-white mt-4">
          This domain is not used at the moment, but will soon house something great. This page takes it&apos;s place while I work on it!
        </p>
      </div>
    </div>
  );
}
