import { BuyerSidebar } from "@/components/layout";
import BuyerDashboard from "@/features/buyer/pages/BuyerDashboard";

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
