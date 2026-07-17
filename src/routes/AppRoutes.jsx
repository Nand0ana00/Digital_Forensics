import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import TimelinePage from "../pages/TimelinePage";
import GraphPage from "../pages/GraphPage";
import Report from "../pages/Report";
import History from "../pages/History";
import Settings from "../pages/Settings";
import Analytics from "../pages/Analytics";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/layout/ProtectedRoute";
import MainLayout from "../components/layout/MainLayout";


export default function AppRoutes() {

  return (

    <Routes>

      {/* Public Routes */}

      <Route 
        path="/" 
        element={<Login />} 
      />

      <Route 
        path="/login" 
        element={<Login />} 
      />


      {/* Protected Routes */}

      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />

        <Route 
          path="/upload" 
          element={<Upload />} 
        />

        <Route 
          path="/timeline" 
          element={<TimelinePage />} 
        />

        <Route 
          path="/graph" 
          element={<GraphPage />} 
        />

        <Route 
          path="/report" 
          element={<Report />} 
        />

        <Route 
          path="/history" 
          element={<History />} 
        />

        <Route 
          path="/settings" 
          element={<Settings />} 
        />

        <Route 
          path="/analytics" 
          element={<Analytics />} 
        />

      </Route>


      {/* 404 */}

      <Route 
        path="*" 
        element={<NotFound />} 
      />

    </Routes>

  );
}