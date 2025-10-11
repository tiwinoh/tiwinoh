export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white shadow-md p-8">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
          <nav className="space-x-3">
            <a className="btn-rect" href="/">Home</a>
          </nav>
        </header>

        <section>
          <ul className="list-disc list-inside text-gray-700">
            <li>Tiny utilities for retro platforms (Windows Phone, legacy apps)</li>
            <li>Minecraft plugins and server tools</li>
            <li>Experimentals: Next.js websites and C# utilities</li>
          </ul>
        </section>

        <section className="mt-6">
          <h3 className="font-semibold">Want to collaborate?</h3>
          <p className="text-gray-700">Feel free to open an issue or add links to socials in the README so people can reach you.</p>
        </section>
      </div>
    </main>
  )
}
