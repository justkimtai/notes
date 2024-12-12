"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

 return(
  <div className="flex flex-col justify-center items-center h-screen">
    <button onClick={() => router.push("/notes")} className="p-4 bg-yellow-200 text-black">Notes</button>
  </div>
  );
}
