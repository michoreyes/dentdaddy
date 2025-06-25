import Header from "@/components/Header/Header";
import DesktopHero from "@/components/Hero/DesktopHero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="itaas w-full">

        <Header/>
        <DesktopHero/>
      </div>
    </>
  );
}
