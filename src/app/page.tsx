import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-red-600">
      <Header />
      <Hero />
    </div>
  );
}
