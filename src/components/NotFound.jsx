// import React from 'react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-black text-white/90 mb-4 tracking-tight">
        404
      </h1>
      <h2 className="text-2xl font-bold text-white mb-3">
        Page Not Found
      </h2>
      <p className="text-neutral-400 max-w-md mb-8 text-sm sm:text-base">
        The link you followed doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
      >
        Back to Home
      </a>
    </main>
  );
}