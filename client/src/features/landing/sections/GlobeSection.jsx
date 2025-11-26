import { Globe } from "@/components/globe";
import { GridPattern } from "@/components/grid-pattern";
import { PulsatingButton } from "@/components/pulsating-button";
import { cn } from "@/lib/utils";
import { ArrowRight, DollarSign, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export function GlobeSection() {
  return (
    <section className="relative flex min-h-[90vh] justify-center overflow-hidden bg-background px-6 md:px-40 md:pb-40">
      {/* Title and description */}
      <div className=" text-center max-w-3xl z-10 px-4">
        <h1 className="mt-8 bg-gradient-to-b from-[#1f4d24] to-[#5CB338] bg-clip-text text-3xl font-semibold text-transparent leading-tight sm:text-5xl sm:leading-tight dark:from-[#9BEA6C] dark:to-[#5CB338]">
          Trade Carbon Credits & Renewable Energy Transparently with
          <span className="text-brandMainColor"> CarbonEase!</span>
        </h1>
      </div>

      {/* Globe animation */}
      <Globe className="top-36 z-0 absolute w-full h-full object-cover" />
      {/* Buttons */}
      <div className="absolute bottom-12 flex gap-8 justify-center w-full px-6 sm:px-0">
        <Link to="/buyer">
          {/* Link to "About Us" page */}
          <PulsatingButton className="bg-card text-brandMainColor shadow-2xl transition-colors duration-200 hover:bg-brandMainColor/10">
            <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg">
              <ShoppingCart className="w-5 h-5 text-brandMainColor" /> Buy
              Carbon Credits
              <ArrowRight className="w-5 h-5 text-brandMainColor" />{" "}
            </span>
          </PulsatingButton>
        </Link>
        <Link to="/seller">
          {/* Link to "Credits Calculator" page */}
          <button className="flex items-center justify-center gap-2 whitespace-pre-wrap rounded-md border-2 border-brandMainColor bg-card px-4 py-2 text-center text-sm font-medium leading-none tracking-tight text-brandMainColor transition-colors duration-200 hover:bg-brandMainColor/10 dark:bg-muted lg:text-lg">
            <DollarSign className="h-5 w-5 text-brandMainColor" /> Sell your
            Credits
            <ArrowRight className="h-5 w-5 text-brandMainColor" />{" "}
          </button>
        </Link>
      </div>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 -z-10"
        )}
      />
    </section>
  );
}
