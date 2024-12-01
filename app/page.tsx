"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [domainEnding, setDomainEnding] = useState('');
  


  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname; // e.g., "example.com"
      const parts = hostname.split('.');
      if (parts.length > 1) {
        setDomainEnding(parts[parts.length - 1]); // e.g., "com"
      }
    }

    let savedLang = localStorage.getItem("lang");
    if(savedLang===null) domainEnding=="de" ? savedLang="de" : savedLang="en";
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
  }, [router, domainEnding]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      {/* Optional: Content can be added here */}
    </main>
  );
}
