import Image from "next/image";
export default function Home() {
  return (
    // about me section
    <main>
      <section className="py-12 bg-gray-50">
        <Image src="/banner.bg.png"alt="its an image" width={200} height={200} className="rounded-full ml-48 border-4 border-gray-500"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-900">
        Name
          </h2>
          <p className="mt-4 text-gray-600">
        Amir Ansari
          </p>
          </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <h2 className="text-2xl font-semibold text-gray-900">
            About Me
          </h2>
          <p className="mt-4 text-gray-600">

          I am a web developer, my role involves designing, coding, and maintaining websites and web applications. I work with a combination of languages, frameworks, and tools to create functional, user-friendly, and visually appealing websites that cater to the needs of clients or end-users.
          </p>
        </div>
      </section>
    {/* project section */}
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="mt-4 space-y-4">
<li className="border p-4 rounded-md shadow">
  <h3 className="text-lg font-semibold">
project 1
  </h3>
  <p className="text-gray-600">
    <a href="https://hackathon-milestone1-2-zeta.vercel.app/">Hackathon</a>
  </p>
</li>
<li className="border p-4 rounded-md shadow">
  <h3 className="text-lg font-semibold">
project 2
  </h3>
  <p className="text-gray-600">
    <a href="https://hackathon-milestone5-omega.vercel.app/">Shareable Resume Builder</a>
  </p>
</li>

        </ul>
      </div>
    </section>
    {/* contact section */}
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="2xl font-semibold text-gray-900">
          Contact
        </h2>
        <p className="mt-4 text-gray-600">
          <a href="mailto:">amiransari10101@gmail.com</a>
        </p>
        <p className="mt-4 text-gray-600">
          <a href="phone">03453494644</a>
        </p>
        
        {/* footer */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p>&copy; 2024 My Portfolio</p>
          </div>
        </footer>
      </div>
    </section>
    
    </main>
  )
};
