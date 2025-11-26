import { cn } from "@/lib/utils";
import {
  DollarSign,
  MessageCircle,
  Leaf,
  ShieldCheck,
  MapPin,
  CreditCard,
} from "lucide-react";

const notifications = [
  {
    name: "Transparent Trading",
    description: "Powered by blockchain for fraud-free transactions.",
    icon: <ShieldCheck size={24} className="text-white" />,
    gradient: "from-brandMainColor via-emerald-600 to-emerald-700",
  },
  {
    name: "Emission Calculator",
    description: "Estimate & offset your carbon footprint in minutes.",
    icon: <Leaf size={24} className="text-white" />,
    gradient: "from-emerald-500 via-brandMainColor to-emerald-700",
  },
  {
    name: "Certified Carbon Credits",
    description: "Verified listings from authentic providers.",
    icon: <DollarSign size={24} className="text-white" />,
    gradient: "from-brandSubColor via-brandMainColor to-emerald-600",
  },
  {
    name: "Gamification & Rewards",
    description: "Earn rewards for eco-friendly actions.",
    icon: <MessageCircle size={24} className="text-white" />,
    gradient: "from-brandMainColor via-emerald-500 to-brandSubColor",
  },
  {
    name: "Geo-Mapping of Sellers",
    description: "Find renewable energy sources near you.",
    icon: <MapPin size={24} className="text-white" />,
    gradient: "from-emerald-700 via-brandMainColor to-emerald-900",
  },
  {
    name: "Multiple Payment Options",
    description: "Pay via cards, crypto, or bank transfers.",
    icon: <CreditCard size={24} className="text-white" />,
    gradient: "from-brandMainColor via-emerald-700 to-emerald-900",
  },
];

const Notification = ({ name, description, icon, gradient }) => {
  return (
    <div className="group flex flex-col items-center rounded-2xl border border-border bg-card/95 p-6 text-center shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${gradient} shadow-lg`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      <p className="mt-2 text-sm text-muted-foreground dark:text-white/80">
        {description}
      </p>
    </div>
  );
}

function FeatureSection({ className }) {
  return (
    <section
      className={cn(
        "relative w-full py-16 px-6 md:px-20 bg-background text-center",
        className
      )}
    >
      <h1 className="text-3xl font-bold text-brandMainColor md:text-4xl dark:text-brandSubColor">
        Why Choose CarbonEase?
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground dark:text-white/85">
        Explore key features that make our platform the best choice for
        sustainable and transparent carbon credit trading.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
