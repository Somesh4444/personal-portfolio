export default function SkeletonLoader() {
  return (
    <div className="bg-[#151419] min-h-screen text-white overflow-hidden animate-pulse">
      
      {/* 1. Header Skeleton */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0c0c0e]/80 border-b border-white/[0.05] px-6 sm:px-8 py-4">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center">
          {/* Logo Skeleton */}
          <div className="h-7 w-32 bg-white/[0.05] rounded-lg"></div>
          
          {/* Nav Links Skeleton */}
          <div className="hidden md:flex gap-8">
            <div className="h-4 w-16 bg-white/[0.03] rounded"></div>
            <div className="h-4 w-20 bg-white/[0.03] rounded"></div>
            <div className="h-4 w-16 bg-white/[0.03] rounded"></div>
            <div className="h-4 w-16 bg-white/[0.03] rounded"></div>
          </div>

          {/* Button Skeleton */}
          <div className="h-9 w-24 bg-white/[0.05] rounded-full"></div>
        </div>
      </header>

      {/* 2. Hero Section Skeleton */}
      <section className="pt-36 sm:pt-44 pb-20 max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          
          {/* Left Column Skeletons */}
          <div className="flex flex-col items-center lg:items-start space-y-5">
            {/* Status Pill */}
            <div className="h-6 w-36 bg-white/[0.04] rounded-full border border-white/[0.04]"></div>
            
            {/* Heading Lines */}
            <div className="h-8 w-28 bg-white/[0.04] rounded-md"></div>
            <div className="h-14 sm:h-16 w-3/4 bg-white/[0.05] rounded-xl"></div>
            <div className="h-10 w-1/2 bg-white/[0.04] rounded-xl"></div>

            {/* Paragraph lines */}
            <div className="space-y-2.5 w-full max-w-[480px] pt-2">
              <div className="h-3.5 w-full bg-white/[0.03] rounded"></div>
              <div className="h-3.5 w-5/6 bg-white/[0.03] rounded"></div>
              <div className="h-3.5 w-2/3 bg-white/[0.03] rounded"></div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <div className="h-12 w-36 bg-white/[0.06] rounded-full"></div>
              <div className="h-12 w-32 bg-white/[0.03] border border-white/[0.05] rounded-full"></div>
            </div>
          </div>

          {/* Right Column: Single Flat Minimalist Container */}
          <div className="flex justify-center items-center relative py-6">
            <div className="w-[300px] sm:w-[380px] h-[360px] sm:h-[420px] bg-white/[0.02] border border-white/[0.05] rounded-3xl"></div>
          </div>

        </div>
      </section>

      {/* 3. Tech Stack Marquee Skeleton */}
      <div className="border-y border-white/[0.04] py-8 flex gap-5 overflow-hidden px-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-12 w-36 bg-white/[0.03] border border-white/[0.03] rounded-2xl shrink-0"></div>
        ))}
      </div>

    </div>
  );
}