import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { projects } from '../data/projects';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Projects() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="relative bg-brandDark1 py-24 sm:py-32 lg:py-20 border-t border-white/[0.06] overflow-hidden" id="projects">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] rounded-full blur-[160px] bg-[radial-gradient(circle,rgba(229,241,52,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] rounded-full blur-[150px] bg-[radial-gradient(circle,rgba(229,241,52,0.06)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-brandYellow"></span>
              <span className="text-xs font-mono text-brandYellow tracking-widest uppercase">04 // Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="text-brandYellow font-marcellus font-normal">Creations</span>.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-between md:justify-end">
            <p className="text-brandMuted text-sm sm:text-base max-w-[360px] leading-relaxed">
              Production-ready platforms designed for real-world impact, high-throughput data pipelines, and responsive performance.
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-auto">
              <button
                ref={(node) => setPrevEl(node)}
                aria-label="Previous project"
                className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-brandYellow/40 flex items-center justify-center text-white disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95 cursor-pointer"
              >
                <i className="ri-arrow-left-line text-lg"></i>
              </button>
              <button
                ref={(node) => setNextEl(node)}
                aria-label="Next project"
                className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-brandYellow/40 flex items-center justify-center text-white disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95 cursor-pointer"
              >
                <i className="ri-arrow-right-line text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Track */}
        <div className="py-2 -my-2">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            speed={600}
            grabCursor={true}
            keyboard={{ enabled: true }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 32
              }
            }}
            navigation={{
              prevEl,
              nextEl
            }}
            pagination={{
              el: '.custom-projects-pagination',
              clickable: true,
              bulletClass: 'custom-bullet',
              bulletActiveClass: 'custom-bullet-active'
            }}
            className="w-full !p-2 !pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="!h-auto flex">
                <div 
                  className="w-full group relative flex flex-col rounded-3xl bg-[#14141b]/90 border border-white/[0.08] hover:border-brandYellow/35 transition-all duration-300 overflow-hidden transform-gpu shadow-xl"
                  style={{ isolation: 'isolate' }}
                >
                  
                  {/* Card Media Deck */}
                  <div className="relative h-[260px] sm:h-[300px] bg-[#0d0d12] border-b border-white/[0.08] overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-[#111218]/90 backdrop-blur-md z-10 shrink-0">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]"></span>
                      </div>
                      <span className="text-[11px] font-mono text-gray-400 bg-white/[0.04] px-3.5 py-0.5 rounded-full border border-white/[0.06]">
                        {project.domain}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>

                    <div className="relative w-full h-full overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#14141b]/60 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-7 sm:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-brandYellow uppercase tracking-wider">
                          {project.id} // {project.category}
                        </span>
                        <span className="text-xs font-mono text-gray-500">{project.year} RELEASE</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brandYellow transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-brandMuted text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
                      <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-300">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={project.link} 
                        className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white group-hover:bg-brandYellow group-hover:text-black transition-all"
                      >
                        <i className="ri-arrow-right-up-line text-lg"></i>
                      </a>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Pills */}
        <div className="custom-projects-pagination flex items-center justify-center gap-2 mt-8"></div>

      </div>

      <style>{`
        .custom-projects-pagination .custom-bullet {
          display: inline-block;
          width: 8px;
          height: 6px;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .custom-projects-pagination .custom-bullet:hover {
          background-color: rgba(255, 255, 255, 0.4);
        }
        .custom-projects-pagination .custom-bullet-active {
          width: 28px;
          background-color: #E5F134 !important;
        }
      `}</style>
    </section>
  );
}