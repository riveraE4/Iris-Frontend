import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Iris" },
    { name: "description", content: "Welcome to Iris." },
  ];
}

export default function Home() {
  return <Welcome />;
}
