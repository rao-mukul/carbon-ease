import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  ListChecks,
  PlusCircle,
  ShoppingCart,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import FormComponent from "@/pages/SellerPages/PopupForm";

const navigation = [
  { name: "Dashboard Overview", href: "/seller-dashboard", icon: BarChart3 },
  { name: "Manage Listings", href: "/listings", icon: ListChecks },
  {
    name: "Orders & Transactions",
    href: "/transaction-listing",
    icon: ShoppingCart,
  },
];

export function SellerSidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="flex w-72 flex-col border-r border-border/80 bg-card/95 text-card-foreground shadow-sm backdrop-blur">
      <div className="flex h-20 flex-col justify-center gap-y-2 border-b border-border/80 px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Seller Console</span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
        </div>
        <p className="text-xs text-muted-foreground">
          Monitor performance, manage inventory, and stay ahead of demand.
        </p>
      </div>
      <nav className="flex-1 space-y-1 px-4 py-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
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
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="mt-4 flex w-full items-center gap-x-3 rounded-lg border border-dashed border-primary/40 bg-primary/5 px-3 py-2 text-left text-sm font-semibold text-primary transition hover:border-primary/60 hover:bg-primary/10"
        >
          <PlusCircle className="h-5 w-5" />
          Create New Listing
        </button>
      </nav>
      <div className="space-y-3 border-t border-border/80 px-6 py-5 text-xs text-muted-foreground">
        <div className="flex items-center gap-x-2 rounded-lg border border-border px-3 py-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <div>
            <p className="font-medium text-foreground">Compliance Ready</p>
            <p>Ensure each listing includes verified project details.</p>
          </div>
        </div>
        <p>
          Need help? Reach us at
          <span className="font-medium text-foreground">
            {" "}
            support@carbonease.com
          </span>
          .
        </p>
      </div>
      <FormComponent isOpen={isOpen} setIsOpen={setIsOpen} />
    </aside>
  );
}
