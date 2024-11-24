import Image from 'next/image'
export default function Home() { 
 
  const numbers = [
    { id: 1, top: 20, left: 30, color: 'bg-pink-600' },
    { id: 2, top: 40, left: 50, color: 'bg-blue-600' },
    { id: 3, top: 60, left: 20, color: 'bg-green-600' },
    { id: 4, top: 10, left: 70, color: 'bg-yellow-600' },
  ];
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1 sm:p-8 pt-20 bg-pink-50 dark:bg-gray-900">



<section className="bg-white dark:bg-gray-800 p-1 sm:p-6 rounded-lg shadow-lg w-full text-center mb-10">
  <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Erdgeschoss</h1>

  <div className="relative flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-transform transform">
    {/* Base Image */}
    <Image
      src="/images/map_eg.jpg"
      alt="Image Erdgeschoss"
      className="w-full h-auto object-cover bg-gray-300"
      width={1600}
      height={1131}
    />

    {/* Map Numbers */}
    {numbers.map((num) => (
      <span
        key={num.id}
        className={`absolute text-white font-bold text-sm ${num.color} rounded-full w-6 h-6 flex items-center justify-center`}
        style={{
          top: `${num.top}%`,
          left: `${num.left}%`,
        }}
      >
        {num.id}
      </span>
    ))}
  </div>
</section>




      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl text-center mb-12">
        <h3 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Obergeschoss 1</h3>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
         Karte 2
        </p>
      </section>

    </main>
  );
}
