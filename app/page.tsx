"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    console.log("Language: " + savedLang);
    switch (savedLang) {
        case "de":
            router.push("/de/");
            break;
        case "en":
            router.push("/en/");
            break;
        default:
            router.push("/de/");
            break;
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      {/* Optional: Content can be added here */}
    </main>
  );
}
