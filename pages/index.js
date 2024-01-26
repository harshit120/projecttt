import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "@/Container/login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Login/>
    </>
  );
}
