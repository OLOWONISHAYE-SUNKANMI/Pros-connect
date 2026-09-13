import type { Metadata } from "next";
import ForProfessionalsPage from "@/pages/ForProfessionalsPage";

export const metadata: Metadata = {
  title: "For Professionals — ProsConnect",
  description:
    "Showcase your expertise, become discoverable, and connect with organizations and founders looking for your capabilities on ProsConnect.",
};

export default function ForProfessionals() {
  return <ForProfessionalsPage />;
}
