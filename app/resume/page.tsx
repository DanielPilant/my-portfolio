// CHANGELOG:
// - Updated resume page styling to new palette with sharp corners.
export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 flex flex-col items-center min-h-[70vh]">
      <div className="w-full border border-white/10 bg-white/[0.02] p-8 flex flex-col items-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
        <h1 className="text-4xl font-extrabold mb-6 tracking-tight text-primary-400 drop-shadow-lg text-center">Resume</h1>
        <a
          className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium border border-white/10 bg-primary-500/10 hover:bg-primary-500/20 hover:shadow-lg active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 transition mb-6"
          href="/resume.pdf"
          download
        >
          Download PDF
        </a>
        <iframe src="/resume.pdf" className="w-full h-[80vh] border border-white/10 bg-white" />
      </div>
    </main>
  );
}
