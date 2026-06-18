export default function Home() {
  return (
    <main className="max-w-full lg:max-w-5xl p-4 mx-auto h-screen">
      <div className="w-3/4 h-full mx-auto mt-32 font-normal">
        {/* <p className="font-mono text-[#9FD89F]">
          <span className="animate-pulse">•</span> open to hire & internships
        </p> */}
        <div className="my-8 flex flex-row items-center gap-4">
          {/* <div className="w-12 h-12 rounded-full overflow-hidden relative group">
            <img src="https://github.com/arcechq.png" alt="arcechq github profile picture" className="object-cover md:w-full md:h-full grayscale group-hover:grayscale-0 transition-all duration-300 cursor-crosshair" />
          </div> */}
          <div>
            <h1 className="text-foreground">Aditya Roychoudhary</h1>
            <p className="text-muted">Mumbai, India — {" "}<span className="font-mono">UTC+5:30</span></p>
          </div>
        </div>
        <p>
          Software engineering and web design student. Crafting{" "}
          <span className="font-cursive">sensible</span> and{" "}
          <span className="font-cursive">pleasing</span> web pages and UIs.
          Writing clean and consistent code and also frequently dabbling in
          backend and Linux.
        </p>
      </div>
    </main>
  );
}
