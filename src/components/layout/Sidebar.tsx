import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { navigation } from "../../config/navigation";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 bg-gray-800">
        <span className="text-xl font-bold text-white">Energy Platform</span>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden text-white"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="mt-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
              location.pathname === item.path ? "bg-gray-800 text-white" : ""
            }`}
          >
            <item.Icon size={24} />
            <span className="ml-3">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
