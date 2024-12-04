import React, { useState } from "react";
import {
  Menu,
  Bell,
  User,
  Search,
  Settings,
  LogOut,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const notifications = [
    { id: 1, text: "New investor report available", time: "5m ago" },
    { id: 2, text: "System maintenance scheduled", time: "1h ago" },
    { id: 3, text: "Energy consumption peak detected", time: "2h ago" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 bg-white shadow-sm z-40">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center flex-1">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-600"
          >
            <Menu size={24} />
          </button>

          {/* Search Bar */}
          <div className="ml-4 flex-1 max-w-lg hidden md:block">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-gray-300 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              className="text-gray-600 hover:text-gray-800 transition-colors"
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            >
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                {notifications.map((notification) => (
                  <a
                    key={notification.id}
                    href="#"
                    className="px-4 py-3 hover:bg-gray-50 flex items-start"
                  >
                    <p className="text-sm text-gray-600">{notification.text}</p>
                    <span className="text-xs text-gray-400 ml-auto">
                      {notification.time}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
            >
              <User size={32} className="text-gray-600" />
              <span className="text-sm font-medium hidden md:block">
                Admin User
              </span>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                <Link
                  to="/profile"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <User size={16} className="mr-2" />
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <Settings size={16} className="mr-2" />
                  Settings
                </Link>
                <Link
                  to="/help"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <HelpCircle size={16} className="mr-2" />
                  Help
                </Link>
                <hr className="my-2" />
                <button className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center w-full">
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
