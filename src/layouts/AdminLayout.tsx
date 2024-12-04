import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 w-[100vw]">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="lg:pl-64">
        <Header setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="pt-16 min-h-screen">
          <div className="px-4 py-6">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
