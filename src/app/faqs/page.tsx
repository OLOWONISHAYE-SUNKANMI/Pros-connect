import type { Metadata } from "next";
import FAQPage from "@/pages/FAQPage";

export const metadata: Metadata = {
  title: "FAQs — ProsConnect",
  description:
    "Find answers to frequently asked questions about ProsConnect, how discovery works, early access benefits, and launch updates.",
};

export default function FAQs() {
  return <FAQPage />;
}
