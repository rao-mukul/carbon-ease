import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  ListChecks,
  PlusCircle,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

// Define the navigation items
const navigation = [
  { name: "Dashboard", href: "/buyer", icon: BarChart3 },
  { name: "Browse Marketplace", href: "/market", icon: ListChecks },
  { name: "Emission Calculator", href: "/calculator", icon: PlusCircle },
  {
    name: "Orders & Transactions",
    href: "/transaction-listing",
    icon: ShoppingCart,
  },
  // { name: "Certifications and Rewards", href: "/coming", icon: DollarSign },
  // { name: "Messages & Notifications", href: "/coming", icon: MessageSquare },
  // { name: "Profile & Settings", href: "/coming", icon: Settings },
];

export function BuyerSidebar() {
  const location = useLocation(); // React Router Hook to get current path

  return (
    <div className="flex w-64 flex-col border-r border-border/80 bg-card/95 text-card-foreground backdrop-blur">
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-border/80 px-6">
        <span className="text-lg font-semibold">Buyer Console</span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
      </div>
      <nav className="flex-1 space-y-1 px-4 py-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href; // Check if the route is active
          return (
            <Link
              key={item.name}
              to={item.href} // Use "to" instead of "href"
              className={`flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary/10 text-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
