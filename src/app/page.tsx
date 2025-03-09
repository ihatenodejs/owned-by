import { TbWorld, TbRss } from "react-icons/tb";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 max-w-4xl">
        <h1 className="text-white text-3xl">This domain is owned by p0ntus</h1>
        <p className="text-white mt-4">
          You are seeing this page because there is currently no project hosted at this domain. This domain is not for sale and never will be, unless I stop paying for it. Sorry, no offers are accepted.
        </p>
        <p className="text-white mt-4">
          If you have any questions, feel free to reach out to me at <a href="mailto:aidan@p0ntus.com" className="text-blue-500">aidan@p0ntus.com</a>
        </p>
        <p className="text-white mt-4">
          This domain is not used at the moment, but will soon house something great. This page takes it&apos;s place while I work on it!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="https://aidxn.cc"
            className="w-full sm:w-auto flex items-center justify-center bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-all"
          >
            <TbWorld size={18} className="flex-shrink-0 mr-2" />
            <span className="whitespace-nowrap">My Website</span>
          </a>
          <a
            href="https://disfunction.blog"
            className="w-full sm:w-auto flex items-center justify-center bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-all"
          >
            <TbRss size={18} className="flex-shrink-0 mr-2" />
            <span className="whitespace-nowrap">My Blog</span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-white text-xs">
        <p>Copyright-free and open source on <a href="https://git.pontusmail.org/aidan/owned-by" className="text-blue-500 hover:text-blue-600 transition-all">LibreCloud Git</a></p>
      </div>
    </div>
  );
}
