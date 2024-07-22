import Background from "@/components/Background";
import Foreground from "@/components/Foreground";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-zinc-900 relative overflow-hidden w-full h-screen ">
        <Background />
        <Foreground />
      </div>
    </>
  );
}
