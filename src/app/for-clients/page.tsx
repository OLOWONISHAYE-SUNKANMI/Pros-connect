import type { Metadata } from "next";
import ForClientsPage from "@/pages/ForClientsPage";

export const metadata: Metadata = {
  title: "For Clients — ProsConnect",
  description:
    "Find and connect with trusted professionals, explore verified expertise, and hire specialists to move your projects and business forward on ProsConnect.",
};

export default function ForClients() {
  return <ForClientsPage />;
}
