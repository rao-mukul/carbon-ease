import { SellerSidebar } from "@/components/layout";
import SellerDashboard from "@/features/seller/pages/SellerDashboard";

export default function SellerDashboardLayout() {
  return (
    <div className="flex min-h-screen bg-muted/20">
      <SellerSidebar />
      <main className="flex-1 overflow-y-auto">
        <SellerDashboard />
      </main>
    </div>
  );
}
