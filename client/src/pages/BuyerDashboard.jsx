import { BuyerSidebar } from "@/components/BuyerSidebar";
import BuyerDashboard from "@/pages/BuyerPages/BuyerDashboard";

export default function BuyerDashboardLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <BuyerSidebar />
      <div className="flex-1">
        <BuyerDashboard />
      </div>
    </div>
  );
}
