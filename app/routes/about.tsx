const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      <div className="flex flex-col items-center gap-10 mb-12 md:flex-row md:items-start ">
        <img src="/images/profile.jpg" alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"/>
          <div className="flex  justify-center flex-col">
            <h1 className="text-3xl font-bold text-white mb-2">Hi,This is profile</h1>
            <p className="text-lg text-gray-300 mt-3">
              When server rendering, loader is used for both initial page loads and client navigations. 
              Client navigations call the loader through an automatic fetch by React Router from the browser to your server.
            </p>
          </div>
      </div>
      <div className="mb-12">
        <h2 className="text-white font-semibold text-2xl mb-4">
              Period
        </h2>
        <p className="text-gray-300 leading-relaxed mb-2">
                When I returned home after an overseas trip earlier this year, I was exhausted, sleep-deprived, and burnt out. 
                I had been on holiday, so why did I feel desperate for another break? The truth is, travelling is rarely as relaxing as we hope it to be.
                 From navigating airport chaos and lugging suitcases to finding affordable accommodation, it can be stressful.

                Professor of religion, psychology and culture, Jaco Hamman says, “Many of us seek to get away in order to be present; 
                we speed to destinations in order to slow down; we may care about the environment but still leave carbon footprints.”

        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">Tech I use</h2>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
          {['React','Typescript','PHP','Python','.Net','Tailwind','Vue','Docker'].map((item) => (
            <li key={item} className="bg-gray-700 px-2 py-1 text-white rounded-md">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About