export default function AuthBanner() {
  return (
    <div className="hidden lg:block lg:w-1/2 p-4">
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
        <img src="/background-auth-sec.svg" alt="Dream House" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/40 p-10 rounded-2xl text-white shadow-lg">
          <p className="text-sm font-extrabold mb-2 opacity-90">MnB: Match And Build</p>
          <h2 className="text-3xl font-extrabold mb-4 shadow-sm">Welcome to MnB</h2>
          <p className="text-sm leading-relaxed opacity-90 font-medium">
            Match And Build redefines modern living at Salone del Mobile.Milano 2024.
          </p>
        </div>
      </div>
    </div>
  );
}