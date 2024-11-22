import Image from 'next/image'
export default function Home() { 
 
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 pt-20 bg-pink-50 dark:bg-gray-900">

      <section className="bg-white dark:bg-gray-800 p-1 sm:p-6 rounded-lg shadow-lg w-full text-center mb-10">
        <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Erdgeschoss</h1>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
            <div
              className="relative flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105"
            >
              
              <Image
                    src={`/images/map_eg.jpg`}
                    alt={"Image Erdgeschoss "}
                    className="w-full h-64 object-cover bg-gray-300"
                    width={200}
                    height={150}
                  />
                
            </div>
          </p>
      </section>

      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl text-center mb-12">
        <h3 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Obergeschoss 1</h3>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
         Karte 2
        </p>
      </section>

      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl text-center mb-12">
        <h3 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Obergeschoss 2</h3>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
         Karte 3
        </p>
      </section>

    </main>
  );
}
