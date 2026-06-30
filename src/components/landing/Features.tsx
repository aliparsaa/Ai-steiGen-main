export default function Features() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold">Features</h2>

      <div className="mt-12 grid grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div>
          <h3 className="font-semibold">AI Video</h3>
          <p className="text-gray-400 mt-2">
            Generate cinematic educational videos.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Medical Content</h3>
          <p className="text-gray-400 mt-2">
            Designed for scientific storytelling.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Automation</h3>
          <p className="text-gray-400 mt-2">
            Turn ideas into visuals instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
