export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 flex flex-col items-center min-h-[70vh]">
      <div className="w-full bg-neutral-900/80 rounded-2xl shadow-lg border border-neutral-800 p-8 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-6 tracking-tight text-primary-400 drop-shadow-lg text-center">Resume</h1>
        <a className="rounded-lg px-6 py-2 bg-primary-500 text-white font-semibold shadow hover:bg-primary-400 transition mb-6" href="/resume.pdf" download>
          Download PDF
        </a>
        <iframe src="/resume.pdf" className="w-full h-[80vh] rounded-lg border border-neutral-800 bg-white" />
      </div>
    </main>
  );
}
