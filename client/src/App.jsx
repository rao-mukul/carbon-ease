import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute, PublicRoute, RoleBasedRoute } from "./components/layout";
import { Register, VerifyOTP, Login, Profile } from "./features/auth";
import { AuthProvider } from "./context/AuthContext";
import { 
  AboutUs, 
  Calculator as CarbonEmissionCalculator, 
  ContactUs, 
  Blog, 
  BlogDetail, 
  ComingSoon,
  ReceiptViewer,
  TransactionPage
} from "./features/shared";
import UserDashboard from "./features/shared/UserDashboard";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { LandingPage } from "./features/landing";
import { 
  AllListings as ListingsPage,
  PopupForm as DataForm,
} from "./features/seller";
import { 
  Marketplace,
  TransactionListing,
} from "./features/buyer";
import { AdminDashboard } from "./features/admin";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        {/* Full-height container with column layout */}
        <div className="flex flex-col min-h-screen">
          {/* Navbar always at the top */}
          <Navbar />

          {/* Main content with flex-1 to push footer to bottom */}
          <main className="flex-1">
            <Routes>
              {/* Public Routes */}
              <Route element={<PublicRoute />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verify-otp" element={<VerifyOTP />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<AboutUs />} />
                <Route
                  path="/calculator"
                  element={<CarbonEmissionCalculator />}
                />
                <Route path="/form" element={<DataForm />} />
                <Route path="/listings" element={<ListingsPage />} />
                <Route path="/coming" element={<ComingSoon />} />
                <Route path="/market" element={<Marketplace />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
              </Route>

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                {/* User Dashboard - accessible by all users except admin */}
                <Route path="/dashboard" element={
                  <RoleBasedRoute allowedRoles={["user"]}>
                    <UserDashboard />
                  </RoleBasedRoute>
                } />
                
                {/* Legacy routes - redirect to dashboard */}
                <Route path="/buyer" element={<UserDashboard />} />
                <Route path="/seller" element={<UserDashboard />} />
                
                {/* Transaction routes */}
                <Route path="/payment" element={<TransactionPage />} />
                <Route path="/transaction-listing" element={<TransactionListing />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/listings" element={<ListingsPage />} />
                
                {/* Admin Routes - accessible by admin only */}
                <Route path="/admin" element={
                  <RoleBasedRoute allowedRoles={["admin"]}>
                    <AdminDashboard />
                  </RoleBasedRoute>
                } />
                
                {/* Common Protected Routes */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/receipt/:transactionId" element={<ReceiptViewer />} />
              </Route>

              {/* Default Route */}
              <Route path="*" element={<Login />} />
            </Routes>
          </main>

          {/* Footer always at the bottom */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
