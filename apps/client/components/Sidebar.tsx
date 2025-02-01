import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const pages = [
    { name: "All Live", path: "/alllive", imagePath: "Vector.png" },
    { name: "Favorites", path: "/favorites", imagePath: "Vector.png" },
    { name: "Top Parleys", path: "/topparleys", imagePath: "Vector.png" },
    { name: "promotions", path: "/promotions", imagePath: "Vector.png" },
    { name: "Cricket", path: "/cricket", imagePath: "Vector.png" },
    { name: "Football", path: "/football", imagePath: "Vector.png" },
    { name: "Basketball", path: "/basketball", imagePath: "Vector.png" },
  ];

  return (
    <div className="overflow-auto w-80 text-white flex flex-col p-4 border-r-1">
      <nav className="space-y-2">
        {pages.map((page) => (
          <div
            key={page.path}  // Added key prop here
            className="flex items-center gap-x-2 px-5 py-3 hover:bg-cyan-950 rounded-2xl"
          >
            <img src={page.imagePath} alt={page.name} />
            <div>{page.name}</div>
          </div>
        ))}
      </nav>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="max-h-auto flex-1 p-6 text-white">
      <h2 className="text-2xl font-semibold">Main Content Area</h2>
      <p className="mt-4">
        This is where your main content goes. It is placed to the right of the sidebar.
      </p>
    </div>
  );
};

const Layout = () => {
  return (
    <div className="flex h-screen bg-black">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Layout;
