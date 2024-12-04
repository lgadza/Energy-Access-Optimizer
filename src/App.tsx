import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import AdminLayout from "./layouts/AdminLayout";
import PublicLayout from "./layouts/PublicLayout";
import "./index.css";
import { ThemeProvider } from "./theme/ThemeContext";

// Lazy load pages
// const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
// const EnergyMapping = lazy(() => import("./pages/admin/EnergyMapping"));
// const InvestorPortal = lazy(() => import("./pages/admin/InvestorPortal"));
// const Community = lazy(() => import("./pages/admin/Community"));
// const Maintenance = lazy(() => import("./pages/admin/Maintenance"));
// const EnergyTrade = lazy(() => import("./pages/admin/EnergyTrade"));

// Public pages
// const Home = lazy(() => import("./pages/public/Home"));
// const About = lazy(() => import("./pages/public/About"));
// const Contact = lazy(() => import("./pages/public/Contact"));
// const Solutions = lazy(() => import("./pages/public/Solutions"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));

// Loading component
const PageLoading = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
);

// Auth guard component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("token"); // Replace with your auth logic
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/solutions" element={<Solutions />} /> */}
            </Route>

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              {/* <Route path="dashboard" element={<Dashboard />} />
            <Route path="mapping" element={<EnergyMapping />} />
            <Route path="investors" element={<InvestorPortal />} />
            <Route path="community" element={<Community />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="trade" element={<EnergyTrade />} /> */}
              <Route
                index
                element={<Navigate to="/admin/dashboard" replace />}
              />
            </Route>

            {/* 404 Route */}
            <Route
              path="*"
              element={
                <PublicLayout>
                  <div className="text-center py-20">
                    <h1 className="text-4xl font-bold text-gray-900">
                      404 - Page Not Found
                    </h1>
                    <p className="mt-4 text-gray-600">
                      The page you're looking for doesn't exist.
                    </p>
                  </div>
                </PublicLayout>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
