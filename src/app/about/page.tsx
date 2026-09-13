import type { Metadata } from "next";
import AboutPage from "@/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Us — ProsConnect",
  description:
    "We're building a better way to connect people and expertise. Learn about ProsConnect's story, mission, vision, and core principles.",
};

export default function About() {
  return <AboutPage />;
}
