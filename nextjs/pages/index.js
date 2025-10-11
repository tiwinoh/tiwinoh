export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white shadow-md p-8">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">hello!!</h1>
          <nav className="space-x-3">
            <a className="btn-rect" href="#">Home</a>
            <a className="btn-rect-outline" href="/projects">Projects</a>
          </nav>
        </header>

        <section className="mb-6">
          <p className="text-gray-700">i'm tiwinoh, a 13 year old developer with a passion for old technology. here are some facts about me and what i like:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3">
            <li>i am 13 years old</li>
            <li>i currently use Windows 11 as my main computer operating system and my main phone is an Iphone SE 2nd GEN</li>
            <li>i love biking a lot in the forest...</li>
            <li>i love playing minecraft and doing videos with my discord friends</li>
            <li>i enjoy developing minecraft plugins, nextjs websites and c# executables...</li>
          </ul>
        </section>

        <section id="about">
          <h2 className="font-semibold mb-2">about me</h2>
          <p className="text-gray-700">pronouns: he/him</p>
          <p className="text-gray-700">hobbies: I like biking, coding, reading</p>
        </section>

        </div>
    </main>
  )
}
