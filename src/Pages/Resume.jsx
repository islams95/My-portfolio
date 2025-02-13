import { Link } from "react-router-dom";

function Resume() {
  return (
    <div className="min-h-screen pt-20 flex flex-col items-center bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">My Resume</h1>

      {/* Embed Resume */}
      <div className="w-full max-w-4xl h-screen border rounded-lg shadow-lg">
        <iframe
          src="/IslamSalah-Resume.pdf"
          className="w-full h-full rounded-lg"
          title="Islam Salah Resume"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href="/IslamSalah-Resume.pdf"
        download="IslamSalah-Resume.pdf"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all"
      >
        📄 Download My Resume
      </a>

      {/* Back to Home */}
      <Link
        to="/"
        className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default Resume;