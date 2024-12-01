"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
      {localStorage.getItem('lang')=="de"?  
        router.push("/de/Weihnachtsolympiade/Scoreboard/team") : router.push("/en/Olympia/Scoreboard/team") 
      };
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      {/* Optional: Content can be added here */}
    </main>
  );
}
