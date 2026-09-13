import type { Metadata } from "next";
import HowItWorksPage from "@/pages/HowItWorksPage";

export const metadata: Metadata = {
  title: "How It Works — ProsConnect",
  description:
    "Discover how ProsConnect makes it easier to find professionals, explore expertise, and build meaningful professional connections.",
};

export default function HowItWorks() {
  return <HowItWorksPage />;
}
