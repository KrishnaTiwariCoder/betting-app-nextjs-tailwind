import { useRouter } from "next/navigation";
import { MainContent } from "./MainContent";

const Sidebar = () => {
  const router = useRouter();

  const pages = [
    { name: "All Live", path: "/login", imagePath: "Vector.png" },
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
            onClick={()=> router.push(page.path)}
          >
            <img src={page.imagePath} alt={page.name} />
            <div>{page.name}</div>
          </div>
        ))}
      </nav>
    </div>
  );
};


const SidebarAndMainContent = () => {
  return (
    <div className="flex h-screen bg-black">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default SidebarAndMainContent;