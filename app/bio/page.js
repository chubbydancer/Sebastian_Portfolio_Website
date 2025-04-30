// app/bio/page.js
export default function Bio() {
  return (
    <main className="flex-grow py-10 px-4 sm:px-10">
      <div className="flex flex-col sm:flex-row items-start gap-8">
        {/* Image on the Left */}
        <div className="w-full sm:w-1/2">
          <img
            src="https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/portraits/portrait_process_rolling.jpg"
            alt="Portrait"
            className="max-w-full h-auto"
          />
        </div>

        {/* Text on the Right */}
        <div className="w-full sm:w-1/2 text-left px-8">
          <p className="text-lg">
            Artist based in Stockholm, working across a range of materials and
            techniques. Exploring form, texture, and process.
          </p>
        </div>
      </div>
    </main>
  );
}
