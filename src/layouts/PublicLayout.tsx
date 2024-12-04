import React from "react";
import { Link, Outlet } from "react-router-dom";
import PublicHeader from "../components/layout/PublicHeader";
import Footer from "../components/layout/Footer";

interface PublicLayoutProps {
  showHero?: boolean;
  heroContent?: React.ReactNode;
  preFooterContent?: React.ReactNode;
  headerProps?: {
    transparent?: boolean;
    darkMode?: boolean;
    customNav?: Array<{ name: string; href: string }>;
  };
  children?: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({
  showHero = false,
  heroContent,
  preFooterContent,
  //   headerProps,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col w-[100vw] bg-gradient-to-br from-slate-900 to-slate-800">
      <PublicHeader />

      {/* Hero Section */}
      {showHero && (
        <div className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          {heroContent || (
            <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                Sustainable Energy Solutions
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                Empowering communities through renewable energy access and smart
                grid technology.
              </p>
              <div className="mt-10">
                <Link
                  to="/solutions"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow w-full text-slate-100">
        <div className="w-full backdrop-blur-sm bg-slate-900/30">
          {children || <Outlet />}
        </div>
      </main>

      {/* Pre-Footer Content */}
      {preFooterContent && (
        <div className="bg-slate-800/50 backdrop-blur-sm w-full">
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {preFooterContent}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PublicLayout;
