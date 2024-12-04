"use client";

export default function Page() {

  const faq=[
    {"q":"#Feld #?", "a":"Das #Feld bezieht sich auf das online Formular im <a href='./Scoreboard/team' className='text-pink-600'>Team Editor</a> und meint das Eingabe-<a href='./Weihnachtsolympiade/Scoreboard/team' style='color: #ec4899;'>&#x1F517;#Feld</a> des jeweiligen Spielers oder Objektes (1 bis 4) für die Punkte/Lösungs-Eintragung."},

  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      <nav className="mb-6 flex gap-4 sm:mt-8">
      <a
          href="."
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Spiele
        </a>
        <a
          href="./Scoreboard"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Scoreboard
        </a>
        <a
          href="./Scoreboard/team"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Team Editor
        </a>
          </nav>
      <div className={`sm:pl-64 flex-1 w-full transition-all duration-300`}>
        <div className="sm:p-4">

          {faq.map((faq, index) => (
            <div  key={index}  className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-3">
              <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-4">{faq.q}</h2>
              <p
            dangerouslySetInnerHTML={{ __html: faq.a }}
            className="text-gray-700 dark:text-gray-300"
          ></p>
              </div>
            ))}

        </div>
      </div>
    </main>
  );
}
